import { Functions } from "appwrite";
import client from "./appwrite";

const functions = new Functions(client);

export async function createOrder(orderData) {
  const execution = await functions.createExecution({
    functionId: "6ae69f790031fad9b848",
    body: JSON.stringify(orderData),
  });

  return execution;
}

export async function getMyOrders() {
  const execution = await functions.createExecution({
    functionId: "6ae787d7003e508b45c3",
    body: JSON.stringify({}),
  });

  return execution;
}