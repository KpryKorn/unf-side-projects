import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: body,
  });
  return NextResponse.json(user);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const user = await prisma.user.update({
    where: { id: body.id },
    data: body,
  });
  return NextResponse.json(user);
}
