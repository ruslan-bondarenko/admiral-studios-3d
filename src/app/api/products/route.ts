import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const products = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10").then((res) =>
      res.json()
    );

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "failed to fetch data" },
      { status: 500 }
    );
  }
}