import { Collection } from "mongodb";
import { getDb } from "../lib/mongodb";

const getLastApod = async () => {
  if (!process.env.DB_NAME || !process.env.DB_COLLECTION) {
    throw new Error(
      "Database or collection is not defined. Add it to .env.local"
    );
  }

  try {
    const imagesCollection: Collection<APOD> = (await getDb()).collection(
      process.env.DB_COLLECTION
    );
    return await imagesCollection
      .find({})
      .sort({ date: -1 })
      .limit(1)
      .toArray();
  } catch (e) {
    console.error(e);
  }
};

export { getLastApod };
