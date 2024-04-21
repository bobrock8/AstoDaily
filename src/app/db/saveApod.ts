import { Collection } from "mongodb";
import { fetchApod } from "../api/fetchApod";
import { getDb } from "../lib/mongodb";
import { getDate } from "./helper";

const saveApod = async () => {
  if (!process.env.DB_NAME || !process.env.DB_COLLECTION) {
    throw new Error(
      "Database or collection is not defined. Add it to .env.local"
    );
  }

  try {
    const image = await fetchApod();
    const imagesCollection: Collection<APOD> = (await getDb()).collection(
      process.env.DB_COLLECTION
    );
    const isAlreadyAdded = await imagesCollection
      .find({ date: getDate() })
      .toArray();
    if (image && isAlreadyAdded.length === 0) {
      await imagesCollection.insertOne(image);
    }
  } catch (e) {
    console.error(e);
  }
};

export { saveApod };
