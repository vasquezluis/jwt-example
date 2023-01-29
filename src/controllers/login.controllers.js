import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { getItemsService } from "../services/login.services.js";

dotenv.config();
const secret = process.env.SECRET;

export const getItems = (req, res) => {
  const { user, password } = req.body;

  try {
    const response = getItemsService(user, password);

    if (response.error == "user") {
      res.status(404).json({ message: "User not found" });
    }
    if (response.error == "pass") {
      res.status(409).json({ message: "Invalid password" });
    }

    /**
     * * utilizar jwt
     */

    /**
     * * el tercer parametro es el tiempo de expiracion
     */

    const expiresTime = "2m";

    jwt.sign(
      { user: response },
      secret,
      { expiresIn: expiresTime },
      (err, token) => {
        res.json({
          message: "token",
          body: token,
          expiration: `Expires ${expiresTime} from now`,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
