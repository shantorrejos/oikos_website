import { faker } from "@faker-js/faker";

const users = [];
for (let i = 0; i < 20; i++) {
  users[i] = {
    displayName: faker.internet.displayName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthday: faker.date.birthdate(),
    location: `${faker.location.buildingNumber()} ${faker.location.city()} ${faker.location.country()}`,
    gender: { sex: faker.person.sex(), pronouns: faker.person.prefix() },
    contact: {
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
    },
  };
}

export default () => {
  return {
    users,
  };
};
