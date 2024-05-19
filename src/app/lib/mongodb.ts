// @ts-nocheck

import { Collection, Db, MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let dbClient: Promise<MongoClient>;

if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  dbClient = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  dbClient = client.connect();
}

const getDb = async () => (await dbClient).db(process.env.DB_NAME);

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { getDb };
