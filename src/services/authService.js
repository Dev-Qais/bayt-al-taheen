import { Account } from "appwrite";
import client from "./appwrite";

const account = new Account(client);

export async function logoutUser() {
  await account.deleteSession({
    sessionId: "current",
  });
}

export async function getCurrentUser() {
  
    return await account.get();

}

  export async function registerUser(formData) {
  const user = await account.create({
    userId: crypto.randomUUID(),
    email: formData.email,
    password: formData.password,
    name: formData.name,
  });

  return user;
}

export async function loginUser(formData) {
    const session = await account.createEmailPasswordSession({
        email: formData.email,
        password: formData.password
    });
    return session;
}