// Example of GET route to fetch all users
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma'

function validateUser() {

}

export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json({ props: { users } });
}

export async function POST() {
    const user = _testInsertUser()
    return NextResponse.json({ props: { user } });
}

async function _testInsertUser() {
    const email ='wawa@gmail.com'
    const name = 'nirco';
    if (!email || !name) {
      throw new Error("Email or name undefined.");
    }
    // Find the user in the database
    const User = await prisma.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
        name,
        props: {
          create: {
          },
        },
      },
    });
}