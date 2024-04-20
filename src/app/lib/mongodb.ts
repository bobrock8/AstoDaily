import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbClient = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export { dbClient };
