export const calculateFine = (dueDate) => {
    const FINE_RATE_PER_HOUR = 0.1; // 10 cents per hour
    const now = new Date();

    if (now > dueDate) {
        const lateHours = Math.ceil((now - dueDate) / (1000 * 60 * 60));
        const fine = lateHours * FINE_RATE_PER_HOUR;
        return Math.round(fine * 100) / 100; // rounding to 2 decimal places
    }

    return 0;
};
