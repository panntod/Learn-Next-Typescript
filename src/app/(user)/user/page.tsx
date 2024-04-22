import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteUser } from "@/actions/user.actions";
import { UserInterface } from "@/types/User.type";
import { Card } from "@/app/component/Card";
import { toast } from "sonner";
import { PrismaClient } from "@prisma/client";


export default async function Home() {
  const prisma = new PrismaClient()
  const data = await prisma.user.findMany({
    select: {
        id: true,
        name: true,
        email: true,
        kelas: true,
    },
});

  const handleDelete = async (id: string) => {
    const response = await deleteUser(id);
    if (response.success == true) {
      toast.success(response.message);
    } else if (response.success == false) {
      toast.error(response.message);
    }
  }

  return (
    <>

      <div className="w-full flex flex-col justify-center items-center pt-24 px-6">
        <div className="w-[1280px]">
          <h2 className="text-4xl font-bold mb-4 text-center">User Details</h2>
          <Link className="btn mb-6 w-64 btn-primary text-white" href={"/tambah-user"}>Tambah User</Link>
          <div className="gap-6 mb-6 flex justify-center flex-wrap">
            {data?.map((data) => <Card data={data} key={data.id} onDrop={() => { handleDelete(data.id) }} />)}
          </div>
        </div>
      </div>

    </>
  );
}
