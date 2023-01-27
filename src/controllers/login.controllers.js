import jwt from "jsonwebtoken";

import { getItemsService } from "../services/login.services.js";

export const getItems = (req, res) => {
  try {
    const user = getItemsService();

    /**
     * * utilizar jwt
     */

    /**
     * * el tercer parametro es el tiempo de expiracion
     */

    jwt.sign({ user }, "secretkey", { expiresIn: "32s" }, (err, token) => {
      res.json({ message: "token", body: token });
    });
  } catch (error) {
    console.log(error);
  }
};
