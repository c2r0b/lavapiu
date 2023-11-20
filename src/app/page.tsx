import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-36">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative "
          src="/logo-small-transparent.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="text-center mb-24 mt-10">
        <h1 className="text-2xl mb-4">
          Da Gennaio 2024
        </h1>
        <a href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9">
          <h2 className="font-bold text-xl hover:underline">
            📍 Via Bat Yam 6, Livorno
          </h2>
        </a>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Self Service{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Aperto tutti i giorni dalle 7.00 alle 23.00
          </p>
        </a>

        <a
          href="#priceList"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Listino prezzi{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Prezzi competitivi e macchine di qualità.
          </p>
        </a>

        <a
          href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Posizione{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A Livorno, zona Ardenza. Parcheggio pubblico gratuito.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hai domande?{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Puoi contattarci telefonicamente o per email
          </p>
        </a>
      </div>

      <div className="mb-32 lg:mt-32 grid text-center">
        {/* Price List Section */}
        <div id="priceList" className="rounded-xl border border-gray-300 bg-white p-10 shadow-lg ">
          <h2 className="text-2xl font-semibold mb-4">
            Listino Prezzi
          </h2>
          <ul className="list-disc pl-5 text-left">
            <li className="py-1">
              Lavaggio piccolo - €X,XX
            </li>
            <li className="py-1">
              Lavaggio medio - €X,XX
            </li>
            <li className="py-1">
              Lavaggio grande - €X,XX
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
        
        {/* ... other sections ... */}

      </div>
    </main>
  )
}
