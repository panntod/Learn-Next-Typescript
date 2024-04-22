import Link from "next/link";
import { Card } from "@/app/component/Card";
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

  return (
    <>

      <div className="w-full flex flex-col justify-center items-center pt-24 px-6">
        <div className="w-[1280px]">
          <h2 className="text-4xl font-bold mb-4 text-center">User Details</h2>
          <Link className="btn mb-6 w-64 btn-primary text-white" href={"/tambah-user"}>Tambah User</Link>
          <div className="gap-6 mb-6 flex justify-center flex-wrap">
            {data?.map((data) => <Card data={data} key={data.id} />)}
          </div>
        </div>
      </div>

    </>
  );
}
