
import pageOption from "./models/pageOptions";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {

  const data = await pageOption.findOne({ _id: "65f9dfb24b4a50349771767b" });

  return NextResponse.json(data) ;
}