import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const body = await req.json();
  const user = await prisma.users.create({
    data: body,
  });
  revalidatePath("/users");
  return NextResponse.json(user);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const user = await prisma.users.update({
    where: { id: body.id },
    data: body,
  });
  return NextResponse.json(user);
}
