"use server";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";
// import {signIn} from "next-auth/react"

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};

export const loginUsingCredentials = async () => {
  // redirect("/api/auth/signin");
  await signIn();
};
