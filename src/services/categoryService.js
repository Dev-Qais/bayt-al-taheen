import { TablesDB } from "appwrite";
import client from "./appwrite";

const tablesDB = new TablesDB(client);

const DATABASE_ID = "6ae2be4800392cae4776";
const CATEGORIES_TABLE_ID = "6ae6661200007f98faef";

export async function getCategories() {
  const response = await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId: CATEGORIES_TABLE_ID,
  });

  return response.rows;
}