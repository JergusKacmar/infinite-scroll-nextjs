import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  const { page: pageToLoad } = params;
  if (!+pageToLoad) {
    return NextResponse.json("Internal error!");
  }
  const LIMIT = 8;
  const { items, totalPages, page } = await new PocketBase(
    "http://127.0.0.1:8090"
  )
    .collection("posts")
    .getList(+pageToLoad, LIMIT);

  return NextResponse.json({ items, totalPages, page });
}
