import { NextResponse } from "next/server";
import { timesheetEntries } from "../../../utils/mockData";

export async function GET() {
  return NextResponse.json(timesheetEntries);
}
