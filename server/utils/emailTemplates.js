export function generateVerificationOtpEmailTemplate(code) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #4CAF50;">Bookworm Library – Email Verification</h2>
      <p>Hello,</p>
      <p>Thank you for registering on <strong>Bookworm Library Management System</strong>.</p>
      <p>Your verification code is:</p>
      <div style="font-size: 24px; font-weight: bold; color: #333; margin: 10px 0;">
        ${code}
      </div>
      <p>This code is valid for the next <strong>15 minutes</strong>.</p>
      <p>If you did not request this, please ignore this email.</p>
      <br/>
      <p>Regards,<br/>Bookworm Team</p>
    </div>
  `;
}
export function generateForgotPasswordEmailTemplate(resetPasswordUrl){
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
          <h2>Reset Your Password</h2>
        </div>
        <div style="padding: 30px;">
          <p>Hello,</p>
          <p>We received a request to reset your password for your Library Management account. Click the button below to reset it:</p>

          <p style="text-align: center;">
            <a href="${resetPasswordUrl}" target="_blank" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Reset Password</a>
          </p>

          <p>If the button above doesn't work, you can also copy and paste the following link into your browser:</p>
          <p style="word-break: break-all; color: #007BFF;">${resetPasswordUrl}</p>

          <p>If you didn’t request this, you can safely ignore this email. This password reset link will expire in 15 minutes.</p>
          <p>Thanks,<br><strong>The Library Management Team</strong></p>
        </div>
        <div style="background-color: #f0f0f0; text-align: center; padding: 15px; font-size: 12px; color: #555;">
          &copy; ${new Date().getFullYear()} Library Management System. All rights reserved.
        </div>
      </div>
    </div>
  `;
};
