import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const post = await prisma.post.create({
    data: body,
  });
  return NextResponse.json(post);
}
