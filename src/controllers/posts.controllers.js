import jwt from "jsonwebtoken";

export const createItems = (req, res) => {
  try {
    jwt.verify(req.token, "secretkey", (error, authData) => {
      if (error) {
        res.sendStatus(403);
      } else {
        res.json({ message: "post creado", authData });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
