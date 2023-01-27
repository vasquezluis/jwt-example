import jwt from "jsonwebtoken";

const users = [
  {
    id: 1,
    name: "luisvasquez",
    email: "luivasquez95@gmail.com",
  },
];

export const getItemsService = () => {
  const result = users[0];

  return result;
};
