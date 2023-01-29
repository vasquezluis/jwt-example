const users = [
  {
    id: 1,
    user: "luisvasquez",
    password: 123456789,
    email: "luisvasquez@gmail.com",
  },
];

export const getItemsService = (user, password) => {
  const userFound = users.find((item) => item.user === user);

  if (userFound) {
    const passFound = userFound.password === password;

    var result = null;

    if (passFound) {
      return userFound;
    } else {
      result = { error: "pass" };
      return result;
    }
  } else {
    result = { error: "user" };
    return result;
  }
};
