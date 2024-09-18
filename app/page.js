import Link from "next/link";

export default function Home() {
    return (
        <main className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold'>
                CPRG 306: Web Development 2 - Assignments
            </h1>
            <ul className='mt-5'>
                <li className='text-lg'>
                    <Link
                        href={"/week-2"}
                        className='transition-all px-8 py-2 rounded hover:bg-zinc-800 focus:bg-zinc-700'
                    >
                        Week 2
                    </Link>
                </li>
            </ul>
        </main>
    );
}
