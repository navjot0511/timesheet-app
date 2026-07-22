import { NextResponse } from "next/server";
import { weeklyTimesheets } from "../../../utils/mockData";

export async function GET() {
  return NextResponse.json(weeklyTimesheets);
}
