"use server";

import { TData } from "@/types/Types";
import prisma from "./prisma";

// READ toutes les entrées de la table "users"
export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

// CREATE une entrée dans la table "users"
export async function createUser(data: TData) {
  try {
    const user = await prisma.user.create({
      data,
    });
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
