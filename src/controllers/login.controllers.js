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
      res.status(409).json({ message: "Incorrect password" });
    }

    /**
     * * utilizar jwt
     * ? primer parametro datos de usuario
     * ? segundo parametro es la palabra clave, debe ser secreta
     * ? el tercer parametro es el tiempo de expiracion
     * ? el cuarto parametro es un callback con la respuesta
     */

    const expiresTime = "2m";

    jwt.sign(
      { user: response },
      secret,
      { expiresIn: expiresTime },
      (err, token) => {
        res.json({
          message: "authData",
          token: token,
          expiration: `Expires ${expiresTime} from now`,
          userData: {
            user: response.user,
            roles: response.roles,
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
