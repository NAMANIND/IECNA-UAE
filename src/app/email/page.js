"use server";
import { Resend } from "resend";

const Sendemail = async (to, subject, html) => {
  const resend = new Resend("re_39pwxCko_H6jU6QouHSEgRYLF4czWCzuZ");

  try {
    const response = await resend.emails.send({
      from: "uae@theiena.com",
      to,
      subject,
      html,
    });
    console.log("Email sent successfully:", response);
    // Return true indicating success
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    // Return false indicating failure
    return false;
  }
};

export default Sendemail;
