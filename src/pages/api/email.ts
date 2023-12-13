import ContactMail from '@/emails/ContactMail';
import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer"

type EmailPayload = {
    to: string
    subject: string,
}

const smtpOptions = {
  host: process.env.SMTP_HOST,
  secure: true,
  auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
  }
};

async function sendEmail(data: EmailPayload, fromEmail: string,  html: string) {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
})

return await transporter.sendMail({
    from: fromEmail,
    ...data,
    html: html
})
}


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'POST'){
        try {
            const requestBody = JSON.parse(req.body);
            const { name, message, email } = requestBody;
           await sendEmail({
                to: "nnorom.christian4@gmail.com",
                subject: `This is a feedback from client`,                
           }, email, render(ContactMail(name, email, message)))
            return res.status(200).json({success: true})            
        } catch (error) {            
            return res.status(400).json({ message: error });
        }    
    } else {
        console.log("Method Not Allowed")
        return res?.status(405).end("Method Not Allowed"); // Method Not Allowed
    }
}
