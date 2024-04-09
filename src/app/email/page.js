"use server";
import { Resend } from "resend";

const Sendemail = async (to, subject, html) => {
  const resend = new Resend("re_brvYxEKv_oX8bHFYuVGozFSzRU95VfV7u");

  try {
    await resend.emails.send({
      from: "iena@namanrai.tech",
      to: to,
      subject: subject,
      html: html, // Changed 'react' to 'html'
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default Sendemail;
