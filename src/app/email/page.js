// "use server";
import { Resend } from "resend";

const Sendemail = async (to, subject, html) => {
  const resend = new Resend("re_brvYxEKv_oX8bHFYuVGozFSzRU95VfV7u");

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: to ? to : "20bei033@ietdavv.edu.in",
      subject: subject ? subject : "Hello from Resend!",
      html: html ? html : "Html", // Changed 'react' to 'html'
    });

    alert("Email sent!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default Sendemail;
