import { saveApod } from "../saveApod";

export async function GET(request: Request) {
  saveApod();
  return new Response(`Hello from cron`);
}
