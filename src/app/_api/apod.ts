import { dbClient } from "../lib/mongodb";

const getApod = async () => {
  if (!process.env.DB_NAME || !process.env.DB_COLLECTION) {
    throw new Error(
      "Database or collection is not defined. Add it to .env.local"
    );
  }

  try {
    const db = dbClient.db(process.env.DB_NAME);
    const images = await db
      .collection(process.env.DB_COLLECTION)
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    console.log(images);
  } catch (e) {
    console.error(e);
  } finally {
    await dbClient.close();
  }
};

export { getApod };
