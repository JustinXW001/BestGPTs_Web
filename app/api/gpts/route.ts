import { getRows } from "@/app/models/gpts";

export async function GET() {
  const data = await getRows(0, 50);

  return Response.json({ data: data });
}
