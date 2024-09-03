import "dotenv/config";
import jwt from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = "AccessToken@123!";
const REFRESH_TOKEN_SECRET = "AccessToken@123!";

export function generateToken(
  payload: object,
  expiresIn: string = "40s"
): string {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn });
}

export function refreshTokenn(
  payload: object,
  expiresIn: string = "7d"
): string {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn });
}
export function verifyToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}
