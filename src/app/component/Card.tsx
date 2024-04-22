"use client";

import Link from 'next/link';
import { UserInterface } from '@/types/User.type'
import { PrimaryButton, CloseButton } from './Button';
import { deleteUser } from '@/actions/user.actions';
import { toast } from 'sonner';
import { navigateEdit } from '@/actions/redirect.actions';

export const Card = ({ data }: { data: UserInterface }) => {

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
            <div className='bg-slate-100 p-6 border rounded-2xl w-[24rem] h-[20rem] flex flex-col justify-between'>
                <div className="text-black font-semibold">
                    <p className="mb-2">ID: {data.id}</p>
                    <p className="mb-2">Nama: {data.name}</p>
                    <p className="mb-2 text-wrap">Email: {data.email}</p>
                    <p>Kelas: {data.kelas}</p>
                </div>
                <div className='flex w-full gap-2 items-center'>
                    <PrimaryButton className='btn-warning w-[48%]' onClick={() => navigateEdit(data.id)}>Update</PrimaryButton>
                    <PrimaryButton className='btn-error w-[48%]' onClick={() => { const dialogElement = document.getElementById('modalDelete') as HTMLDialogElement; dialogElement.showModal() }}>Delete</PrimaryButton>
                </div>
            </div>
            <dialog id="modalDelete" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <CloseButton>✕</CloseButton>
                    </form>
                    <h3 className="font-bold text-lg">Hapus User {data.name}</h3>
                    <p className="py-4">Apakah kamu yakin ingin menghapus data ini!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <PrimaryButton className='btn-error' onClick={() => handleDelete(data.id)}>Delete</PrimaryButton>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
