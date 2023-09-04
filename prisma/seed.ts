import {prisma} from "../utils/connect";

async function main() {
  const response = await Promise.all([
    prisma.whitelistUser.upsert({
      where: { email: "temtanay@gmail.com" },
      update: {},
      create: {
        email: "temtanay@gmail.com"
      }
    }),
    prisma.whitelistUser.upsert({
      where: { email: "surapol@gmail.com" },
      update: {},
      create: {
        email: "surapol@gmail.com"
      }
    }),
    prisma.user.upsert({
      where: { email: "rauchg@vercel.com" },
      update: {},
      create: {
        name: "Guillermo Rauch",
        email: "rauchg@vercel.com",
        image:
          "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
      },
    }),
    prisma.user.upsert({
      where: { email: "lee@vercel.com" },
      update: {},
      create: {
        name: "Lee Robinson",
        email: "lee@vercel.com",
        image:
          "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
      },
    }),
    await prisma.user.upsert({
      where: { email: "stey@vercel.com" },
      update: {},
      create: {
        name: "Steven Tey",
        email: "stey@vercel.com",
        image:
          "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
      },
    }),
  ]);
  console.log(response);
}

// async function main() {
// const response = await Promise.all([
//   prisma.users.upsert({
//     where: { email: 'rauchg@vercel.com' },
//     update: {},
//     create: {
//       name: 'Guillermo Rauch',
//       email: 'rauchg@vercel.com',
//       image:
//         'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
//     },
//   }),
//   prisma.users.upsert({
//     where: { email: 'lee@vercel.com' },
//     update: {},
//     create: {
//       name: 'Lee Robinson',
//       email: 'lee@vercel.com',
//       image:
//         'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
//     },
//   }),
//   await prisma.users.upsert({
//     where: { email: 'stey@vercel.com' },
//     update: {},
//     create: {
//       name: 'Steven Tey',
//       email: 'stey@vercel.com',
//       image:
//         'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
//     },
//   }),
// ])
//   console.log(response)
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
