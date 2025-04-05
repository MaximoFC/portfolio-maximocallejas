import { Metadata } from "next";
import AboutContent from "./aboutContent";

export const metadata: Metadata = {
    title: "Sobre mí | Máximo Facundo Callejas",
    description: "Conocé más sobre mí y mi camino como desarrollador web.",
};

export default function AboutPage() {
    return <AboutContent />;
}