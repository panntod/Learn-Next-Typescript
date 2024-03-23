import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            kelas: true,
        },
    });
    return Response.json(result);
}