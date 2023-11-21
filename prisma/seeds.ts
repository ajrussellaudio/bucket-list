import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const guatemala = await prisma.country.create({
    data: {
      name: 'Guatemala',
      cities: {
        create: {
          name: 'Guatemala City',
        },
      },
    },
  });

  console.log({ guatemala });
}

main().then(async () => await prisma.$disconnect());
