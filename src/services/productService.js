import { TablesDB } from "appwrite";
import client from "./appwrite";


const tablesDB = new TablesDB(client);

const DATABASE_ID = "6ae2be4800392cae4776";
const PRODUCTS_TABLE_ID = "6ae2bf3e0004b9d672f2";

export async function getProducts() {
    const response = await tablesDB.listRows({
  databaseId: DATABASE_ID,
  tableId: PRODUCTS_TABLE_ID,
});
return response.rows;
}