import { navigateEdit } from '@/actions/redirect.actions'
import { UserInterface } from '@/types/User.type'

export const Card = ({ data, onDrop }: { data: UserInterface, onDrop: () => void }) => {
    const dialogElement = document.getElementById('modalDelete') as HTMLDialogElement;
    return (
        <>
            <div key={data.id} className='bg-slate-100 p-6 border rounded-2xl w-[24rem] h-[20rem] flex flex-col justify-between'>
                <div className="text-black font-semibold">
                    <p className="mb-2">ID: {data.id}</p>
                    <p className="mb-2">Nama: {data.name}</p>
                    <p className="mb-2 text-wrap">Email: {data.email}</p>
                    <p>Kelas: {data.kelas}</p>
                </div>
                <div>
                    <button className='btn mt-4 w-full btn-warning text-white' onClick={() => navigateEdit(data.id.toString())}>Update</button>
                    <button className="btn mt-4 w-full btn-error text-white" onClick={() => dialogElement.showModal()}>Delete</button>
                </div>
            </div>
            <dialog id="modalDelete" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hapus User {data.name}</h3>
                    <p className="py-4">Apakah kamu yakin ingin menghapus data ini!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-error text-white" onClick={() => onDrop()}>Delete</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
