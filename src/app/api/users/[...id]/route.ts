// Example of GET route to fetch all users
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(req: Request, context: any) {
  debugger;
  // const { email } = await req.json();
  const { strId } = context.params;
  const id = parseInt(strId);
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    return NextResponse.json(
      { user },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 200,
      }
    );
  }
}