import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtUtils";

export async function verifyTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ result: "Token is missing. Unauthorized access." });
  }

  try {
    const decoded = await verifyToken(token);
    (req as any).decode = decoded;
    next();
  } catch (err) {
    if (err === "TokenExpiredError") {
      return res
        .status(401)
        .json({ result: "Token expired. Please log in again." });
    } else {
      return res.status(403).json({ result: "Token is invalid." });
    }
  }
}
