import { type NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
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

  return new Response(json);
}
