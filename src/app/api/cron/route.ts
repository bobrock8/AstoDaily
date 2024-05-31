import { saveApod } from "../saveApod";

export async function GET(request: Request) {
  try {
    saveApod();
    return new Response(`Hello from cron`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
