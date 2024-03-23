"use client";

import { createUser } from "@/actions/user.actions";
import { redirect } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className={
                `text-white rounded-full px-6 py-3 w-[20rem]  ${pending
                    ? "bg-blue-300 cursor-wait"
                    : "bg-blue-500 hover:bg-opacity-85"}`
            }
            disabled={pending}
        >
            <span className="w-full">Submit</span>
        </button>
    );
}

export default function NewForm() {
    const resetForm = useRef<HTMLFormElement>(null);
    // @ts-expect-error
    const [formState, formAction] = useFormState(createUser, {
        success: null,
        message: null
    });

    useEffect(() => {
        if (formState.success) {
            toast.success(formState.message);
            redirect("/user")
        } else if (formState.success == false) {
            toast.error(formState.message);
        }
    });

    return (
        <form action={formAction} ref={resetForm} className="flex items-center justify-center h-screen">
            <div className="flex items-center justify-center flex-col-reverse text-gray-800 bg-white w-[30rem] h-[35rem] rounded-xl shadow-md shadow-white">
                <div className="flex flex-col items-center justify-center flex-wrap gap-4 order-1 w-full p-6">
                    <h1 className="text-4xl font-bold">Tambah User</h1>
                    <div className="w-full">
                        <h1 className="font-medium">Nama Siswa</h1>
                        <input
                            type="text"
                            placeholder="enter name"
                            className="input w-full bg-slate-50"
                            name="namaUser" required
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="font-medium">Kelas Siswa</h1>
                        <input
                            type="text"
                            placeholder="enter class"
                            className="input w-full bg-slate-50"
                            name="kelasUser" required
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="font-medium">Email</h1>
                        <input
                            type="email"
                            placeholder="e.g example@gmail.com"
                            className="input w-full bg-slate-50"
                            name="emailUser" required
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="font-medium">Password</h1>
                        <input
                            type="password"
                            placeholder="********"
                            className="input w-full bg-slate-50"
                            name="passwordUser" required
                        />
                    </div>
                </div>
                <div>
                    <SubmitButton />
                </div>
            </div>
        </form>
    );
}