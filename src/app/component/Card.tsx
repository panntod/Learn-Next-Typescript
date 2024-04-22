import { navigateEdit } from '@/actions/redirect.actions'
import { UserInterface } from '@/types/User.type'
import Link from 'next/link';
import { PrimaryButton, CloseButton } from './Button';

export const Card = ({ data, onDrop }: { data: UserInterface, onDrop: () => void }) => {
    
    return (
        <>
            <div className='bg-slate-100 p-6 border rounded-2xl w-[24rem] h-[20rem] flex flex-col justify-between'>
                <div className="text-black font-semibold">
                    <p className="mb-2">ID: {data.id}</p>
                    <p className="mb-2">Nama: {data.name}</p>
                    <p className="mb-2 text-wrap">Email: {data.email}</p>
                    <p>Kelas: {data.kelas}</p>
                </div>
                <div>
                    <Link className='btn mt-4 w-full btn-warning text-white' href={`/${data.id}/edit`}>Update</Link>
                    <PrimaryButton onClick={()=>{const dialogElement = document.getElementById('modalDelete') as HTMLDialogElement; dialogElement.showModal()}}>Delete</PrimaryButton>
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
                            <PrimaryButton  onClick={() => onDrop()}>Delete</PrimaryButton>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
