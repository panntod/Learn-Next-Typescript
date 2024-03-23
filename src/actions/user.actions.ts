"use server";
import { ResponseMessage } from "@/types/Form.type";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function createUser(
  prevState: ResponseMessage,
  formData: FormData
): Promise<ResponseMessage> {
  try {
    await prisma.user.create({
      data: {
        name: formData.get("namaUser") as string,
        email: formData.get("emailUser") as string,
        kelas: formData.get("kelasUser") as string,
        password: formData.get("passwordUser") as string,
      },
    });

    revalidatePath("/user");
    return { success: true, message: "Omaygyat! Berhasil tambah user" };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Noowayy! Error tambah user" };
  }
}

export async function findUser(data: FormData) {
  const keyword = data.get("keyword") as string;
  const result = await prisma.user.findMany({
    where: {
      OR: [
        { email: keyword },
        { kelas: keyword },
        { id: keyword },
        { name: keyword },
      ],
    },
  });

  return result;
}

export async function findUniqueUser(userId: string) {
  const result = await prisma.user.findUnique({
    where: { id: userId },
  });

  return result;
}

export async function updateUser(
  prevState: ResponseMessage,
  newData: FormData
): Promise<ResponseMessage> {
  try {
    const userId = newData.get("id") as string;

    await prisma.user.update({
      where: { id: userId },
      data: {
        name: newData.get("namaUser") as string,
        email: newData.get("emailUser") as string,
        kelas: newData.get("kelasUser") as string,
        password: newData.get("passwordUser") as string,
      },
    });

    revalidatePath("/user");
    return { success: true, message: "Omaygyat! Berhasil update user" };
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, message: "Noowayy! Error update user" };
  }
}

export async function deleteUser(userId: string): Promise<ResponseMessage> {
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return { success: true, message: "Omaygyat! Berhasil delete user" };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, message: "Noowayy! Error delete user" };
  }
}
