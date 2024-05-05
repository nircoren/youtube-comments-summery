// Example of GET route to fetch all users
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma'

export async function GET() {
    const users = await prisma.user.findMany()
    console.log(users)
    return NextResponse.json({ props: { users } });
}

export async function POST() {
    const users = await prisma.user.findMany()
    console.log(users)
    return NextResponse.json({ props: { users } });
}
