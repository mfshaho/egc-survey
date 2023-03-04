import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.HOSTINGER_EMAIL_USERNAME,
    pass: process.env.HOSTINGER_EMAIL_PASSWORD,
  },
});

export async function streamToArrayBuffer(
  stream: ReadableStream<Uint8Array>
): Promise<Uint8Array> {
  let result = new Uint8Array(0);
  const reader = stream.getReader();
  while (true) {
    // eslint-disable-line no-constant-condition
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    const newResult = new Uint8Array(result.length + value.length);
    newResult.set(result);
    newResult.set(value, result.length);
    result = newResult;
  }
  return result;
}

export async function POST(request: NextRequest) {
  const body = request.body;
  // @ts-ignore
  const buffer = await streamToArrayBuffer(body);
  const text = new TextDecoder().decode(buffer);
  const json = JSON.parse(text);

  const questions = {
    q1: json.q1,
    q2: json.q2,
    q3: json.q3,
    q4: json.q4,
    q5: json.q5,
    q6: json.q6,
    q7: json.q7,
    q8: json.q8,
  };
  const data = await prisma.survey.create({
    data: {
      ...questions,
    },
  });
  const html = `<div>
    <h2>Thank you for submitting your survey</h2>
    <p>visit our website  for more info <a href='https://egc2022.com' target='_blank'>egc2022.com</a></p>
    <div>
      <p>to submit another survey, <a href='https://survey.egc2022.com' target='_blank'>click here</a>
    </div>
  </div>`;
  const mailOptions = {
    from: process.env.HOSTINGER_EMAIL_USERNAME,
    to: json.q1,
    subject: "East Gate Center | Survey",
    html,
  };
  await transporter.sendMail(mailOptions);

  return new Response(JSON.stringify(questions));
}
