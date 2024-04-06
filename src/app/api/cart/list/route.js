import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

// Create Cart Item
export async function POST(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    let reqBody = await req.json();
    reqBody.user_id = id;

    const prisma = new PrismaClient();
    const result = await prisma.product_carts.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// Update Cart Item
export async function PUT(req, res) {
  try {
    let headerList = headers();
    let user_id = parseInt(headerList.get("id"));
    let reqBody = await req.json();

    const prisma = new PrismaClient();
    const result = await prisma.product_carts.updateMany({
      where: {
        AND: [{ id: reqBody["id"] }, { user_id: user_id }],
      },
      data: {
        color: reqBody["color"],
        size: reqBody["size"],
        qty: reqBody["qty"],
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// List Cart Item
export async function GET(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.product_carts.findMany({
      where: { user_id: id },
      include: { products: true },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

// Delete Cart Item
export async function DELETE(req, res) {
  try {
    let headerList = headers();
    let user_id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    const result = await prisma.product_carts.deleteMany({
      where: {
        AND: [{ id: reqBody["id"] }, { user_id: user_id }],
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
