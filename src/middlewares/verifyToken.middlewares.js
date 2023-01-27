// Authorization: Bearer <token>
export const verifyToken = (req, res, next) => {

/**
 * * Obtener token almacenado en headers para autorizacion
 */

  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
