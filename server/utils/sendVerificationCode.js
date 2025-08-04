import { generateVerificationOtpEmailTemplate } from "./emailTemplates.js";
import { sendEmail } from "./sendEmail.js";

export async function sendVerificationCode(verificationCode, email) {
    try {
        const message = generateVerificationOtpEmailTemplate(verificationCode);
        await sendEmail({
            email,
            subject: "Verification Code (Bookworm Library Management System)",
            message,
        });
    } catch (error) {
        throw new Error("Failed to send verification code.");
    }
}
