import prisma from "./prisma";

export async function getAllUsers() {
  const users = await prisma.users.findMany();
  console.log(users);
  return users;
}

getAllUsers() // TODO: besoin d'appeler 2x ?? tout mettre dans une seule fonction
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
