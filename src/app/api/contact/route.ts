import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { isRateLimited } from "@/lib/rateLimit";

function isValidEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export async function POST(req: Request) {
    const ipRaw = req.headers.get('x-forwarded-for') || '';
    const ip = ipRaw.split(',')[0].trim() || 'unknown';

    if (isRateLimited(ip)) {
        return NextResponse.json(
            { success: false, error: 'Demasiados envíos, espera 5 minutos antes de intentar de nuevo' },
            { status: 429 }
        );
    }

    let body;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ success: false, error: 'Formato inválido' }, { status: 400 });
    }

    const { name, email, message, bot_field_823 } = body;

    if (bot_field_823 && bot_field_823.trim() !== '') {
        return NextResponse.json({ success: false, error: 'Posible bot detectado' }, { status: 403 });
    }

    if (
        !name || name.length < 2 || name.length > 100 ||
        !email || !isValidEmail(email) ||
        !message || message.length < 10 || message.length > 1000
    ) {
        return NextResponse.json({ success: false, error: 'Datos inválidos' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    const mailOptions = {
        from: `Portfolio <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${name}`,
        text: `
            Nombre: ${name}
            Email: ${email}
            Mensaje:
            ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status:500 });
    }
}