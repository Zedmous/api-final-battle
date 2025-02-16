import { UserInterface } from "../../interfaces";

const usersSeeds: Partial<UserInterface>[] = [
  {
    id: 1,
    name: "Zedmous",
    email: "zedmous@example.com",
    password: "123456789",
    createdAt: new Date(),
    role_id: 1,
  },
];

export { usersSeeds };