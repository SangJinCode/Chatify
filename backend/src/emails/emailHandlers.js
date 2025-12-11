import { resendClient, sender } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js"

export const sendWelcomeEmail = async (sendWelcomeEmail, name, clientURL) => {
    const { data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatify!",
        html: createWelcomeEmailTemplate(name, clientURL),
    })

    if (error) {
        console.log("Error sending welcome email:", error);
        //함수를 더이상 실행하지 않고 중단
        throw new Error("Failed to send welcome email")
    }

    console.log("Welcome Email sent successfully", data);
}