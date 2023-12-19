import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const post = await prisma.post.create({
    data: body,
  });
  revalidatePath("/dashboard");
  return NextResponse.json(post);
}
