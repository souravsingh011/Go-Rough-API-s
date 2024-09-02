import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../utils/jwtUtils";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function signup(req: Request, res: Response) {
  const { phone_no, password, county_id, verification_code, full_name, role } =
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

    // Create a new user
    const user = await prisma.mechanicSignUp.create({
      data: {
        phone_no,
        password: hashedPassword,
        county_id: county_id || null, // Provide default or null
        verification_code: verification_code || null, // Provide default or null
        full_name: full_name || null, // Provide default or null
        roles: role || "defaultRole", // Provide a default value if needed
      },
    });

    // Generate a JWT token
    const token = generateToken({ id: user.id, phone_no: user.phone_no });

    res.status(201).json({ token });
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

    // Generate a JWT token
    const token = generateToken({ id: user.id, phone_no: user.phone_no });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
