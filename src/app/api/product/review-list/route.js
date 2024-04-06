import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseInt(searchParams.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.product_reviews.findMany({
      where: { product_id: id },
      include: { customer_profiles: { select: { cus_name: true } } },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function POST(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
    let reqBody = await req.json();

    const result = await prisma.product_reviews.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
