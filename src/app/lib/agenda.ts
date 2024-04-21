import Agenda, { Job, JobAttributesData } from "agenda";
import { saveApod } from "../db/saveApod";

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}
const agenda = new Agenda({ db: { address: process.env.MONGODB_URI } });
// agenda.define("save apod each day", async (job) => {

// });

const runAgenda = () => {
  agenda.define("start new play", function (job, done) {
    console.log("new play agenda");
    saveApod();
    done();
  });

  (async function () {
    // IIFE to give access to async/await
    await agenda.start();

    agenda.every("5 seconds", "start new play");
  })();
};

export { runAgenda };
