import Agenda, { Job, JobAttributesData } from "agenda";


if (!process.env.MONGODB_URI) {
    throw new Error("Add Mongo URI to .env.local");
  }
const agenda = new Agenda({ db: { address: process.env.MONGODB_URI } });
