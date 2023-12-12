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
