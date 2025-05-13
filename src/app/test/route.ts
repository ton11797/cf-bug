import { db } from "@/db";

export async function GET() {
    await db.run("SELECT 1");
  return new Response('Hello, World!');
}