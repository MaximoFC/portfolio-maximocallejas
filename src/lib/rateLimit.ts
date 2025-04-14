type RateLimitRecord = {
    timestamp: number,
    count:number
};

const RATE_LIMIT_WINDOW = 5 * 60 * 1000;
const MAX_REQUEST = 3;

const ipRecords = new Map<string, RateLimitRecord>();

export function isRateLimited(ip: string): boolean {
    const now = Date.now();

    for (const [key, value] of ipRecords) {
        if (now - value.timestamp > RATE_LIMIT_WINDOW) {
            ipRecords.delete(key);
        }
    }

    const record = ipRecords.get(ip);

    if (!record) {
        ipRecords.set(ip, { timestamp: now, count: 1 });
        return false;
    }

    if (now - record.timestamp < RATE_LIMIT_WINDOW) {
        if (record.count >= MAX_REQUEST) {
            return true;
        } else {
            record.count += 1;
            ipRecords.set(ip, record);
            return false;
        }
    }

    ipRecords.set(ip, { timestamp: now, count: 1 });
    return false;
}