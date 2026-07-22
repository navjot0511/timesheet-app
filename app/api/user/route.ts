import { NextResponse } from "next/server";
import { users } from "../../../utils/mockData";

export async function GET() {
  return NextResponse.json(users);
}
