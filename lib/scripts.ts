import { TData } from "@/types/Types";
import prisma from "./prisma";

export async function getAllUsers() {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createUser(data: TData) {
  try {
    const user = await prisma.users.create({
      data,
    });
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
