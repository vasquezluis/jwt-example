// Authorization: Bearer <token>

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET;

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const verifyToken = (req, res, next) => {
  /**
   * * Obtener token almacenado en headers para autorizacion
   */

  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;

    try {
      jwt.verify(req.token, secret, (error, authData) => {
        if (error) {
          console.log(error.message);
          res.status(403).json({ error: error.message });
        } else {
          // console.log({ message: "authData", authData });
          next();
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.sendStatus(403);
  }
};
