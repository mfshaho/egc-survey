import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { NextApiRequest } from "next";
export async function GET(request: Request) {
  const data = request.headers;
  const db = await prisma.survey.findMany();
  return NextResponse.json(db);
}
