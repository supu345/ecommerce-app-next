import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// slider-list Create
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    const result = await prisma.product_sliders.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.product_sliders.findMany();
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
