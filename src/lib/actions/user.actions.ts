"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const SignIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const reponse = await account.createEmailPasswordSession(email, password);

    return parseStringify(reponse);
  } catch (error) {
    console.error("Error", error);
  }
};

export const SignUp = async (useData: SignUpParams) => {
  const { email, password, firstName, lastName } = useData;
  try {
    // Create a user account using Appwrite
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
