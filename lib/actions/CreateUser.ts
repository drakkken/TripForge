"use server";

import { prisma } from "../prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CreateUser = async (email: string, password: string) => {
  const session = await auth();

  // Redirect if already logged in
  if (session) {
    redirect("/");
    return;
  }

  // Check for existing user
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  // Create the user
  await prisma.user.create({
    data: {
      name: "somename",
      email,
      password, // ⚠️ Remember to hash this in real apps
    },
  });

  // ✅ Redirect after successful signup
  redirect("/");
};

export default CreateUser;
