import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateToken, refreshTokenn } from "../utils/jwtUtils";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export async function signup(req: Request, res: Response) {
  const { phone_no, password, county_id, verification_code, full_name, roles } =
    req.body;

  if (!phone_no || !password) {
    return res
      .status(400)
      .json({ error: "Phone number and password are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.mechanicSignUp.findFirst({
      where: { phone_no },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("creating user");
    // Create a new user
    const user = await prisma.mechanicSignUp.create({
      data: {
        county_id: county_id,
        phone_no,
        verification_code: verification_code,
        full_name: full_name,
        password: hashedPassword,
        roles: roles,
      },
    });

    // Generate tokens
    const accessToken = generateToken({ id: user.id, phone_no: user.phone_no });
    const refreshToken = refreshTokenn({
      id: user.id,
      phone_no: user.phone_no,
    });

    // Store refresh token in the database
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiration
      },
    });

    res.status(201).json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function login(req: Request, res: Response) {
  const { phone_no, password } = req.body;

  if (!phone_no || !password) {
    return res
      .status(400)
      .json({ error: "Phone number and password are required" });
  }

  try {
    // Find the user by phone number
    const user = await prisma.mechanicSignUp.findFirst({
      where: { phone_no },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare provided password with hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate tokens
    const accessToken = generateToken({ id: user.id, phone_no: user.phone_no });
    const refreshToken = refreshTokenn({
      id: user.id,
      phone_no: user.phone_no,
    });

    // Store refresh token in the database (optional)
    await prisma.refreshToken.upsert({
      where: { id: user.id },
      update: {
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiration
      },
      create: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiration
      },
    });

    // Send tokens to client
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
