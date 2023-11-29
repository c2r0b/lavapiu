import Image from 'next/image'

export const Logo = () => (
    <div className="flex flex-col place-items-center before:absolute before:h-[300px] before:w-[380px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-sky-300 before:to-sky-200 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[140px] lg:after:w-[640px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-400 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
            className="relative "
            src="/logo-testo.png"
            alt="Next.js Logo"
            width={220}
            height={50}
            priority
        />
        <Image
            className="relative mt-2"
            src="/logo-small-transparent.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
        />
    </div>
)