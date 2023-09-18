"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const coordinates_faker_1 = require("../src/utils/coordinates.faker");
const tagsDataList = [];
const prisma = new client_1.PrismaClient();
const clearDatabase = async () => {
    console.log('--------------------------');
    console.log('Suppression des tables...');
    await prisma.favorite.deleteMany({});
    await prisma.rating.deleteMany({});
    await prisma.spotPicture.deleteMany({});
    await prisma.tagsOnSpots.deleteMany({});
    await prisma.tag.deleteMany({});
    await prisma.chatMessage.deleteMany({});
    await prisma.contact.deleteMany({});
    await prisma.profileChat.deleteMany({});
    await prisma.chat.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.profile.deleteMany({});
    console.log('--------------------------');
    console.log('Suppression terminée');
};
const avatarUrls = [
    'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694783898/charac1_xkktq3.png',
    'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694783898/charac2_pkbjkc.png',
];
const fakerUser = (index) => {
    const randomCoordinates = (0, coordinates_faker_1.coordinatesFaker)(44.841088, -0.579116, 60);
    return {
        email: faker_1.faker.internet.email(),
        hashedPassword: faker_1.faker.internet.password(),
        profile: {
            create: {
                pseudo: faker_1.faker.internet.userName(),
                location: randomCoordinates,
                avatarUrl: avatarUrls[index % 2],
            },
        },
    };
};
const createUsers = async (fakerRounds) => {
    console.log('--------------------------');
    console.log('Création des users...');
    const users = new Array(fakerRounds)
        .fill(0)
        .map((_, index) => fakerUser(index));
    users.forEach(async (user) => {
        await prisma.user.create({ data: user });
    });
    console.log('--------------------------');
    console.log('Création des users terminée');
};
const createTag = async () => {
    console.log('--------------------------');
    console.log('Création des tags...');
    tagsDataList.forEach(async (tagData) => {
        await prisma.tag.create({ data: tagData });
    });
    console.log('--------------------------');
    console.log('Création des terminée');
};
async function main() {
    console.log('--------------------------');
    console.log('Début du seed');
    await clearDatabase();
    const fakerRounds = 200;
    await createUsers(fakerRounds);
    await createTag();
    console.log('--------------------------');
    console.log('Fin du seed');
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map