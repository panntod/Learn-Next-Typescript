import { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Not Found Page",
    description: "Created using next app",
};

export default function notfound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center text-white">
            <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
            <div className="animate-bounce bg-indigo-400 px-3 py-1 text-sm rounded absolute">
                Page Not Found
            </div>
            <Link href='/user' className="btn mt-6 w-64 btn-primary text-white">
                Go Home
            </Link>
        </main>
    )
}
