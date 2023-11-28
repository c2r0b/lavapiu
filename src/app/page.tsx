import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-36 w-full">

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
        <h1 className="text-l mb-4 font-bold">
          Da Gennaio 2024
        </h1>
        <h1 className="text-2xl mb-4">
          Lavanderia Self Service
        </h1>
        <a href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9">
          <h2 className="font-bold text-xl hover:underline">
            📍 Via Bat Yam 6, Livorno
          </h2>
        </a>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
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
            Dove siamo{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A Livorno, zona Ardenza. Parcheggio pubblico gratuito.
          </p>
        </a>

        <a
          href="tel:+3905861234567"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hai domande?{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Puoi contattarci a questo numero: 0586 1234567
          </p>
        </a>
      </div>

      <div id="priceList" className="mt-32 px-8 lg:px-32 py-32 w-full grid text-center bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-10">
          Listino prezzi
        </h1>
        <table className="table-fixed border-collapse mb-16 border border-gray-200 dark:border-neutral-700">
          <thead>
            <tr>
              <th className="w-1/2 p-3 border border-gray-200 dark:border-neutral-700">Servizio</th>
              <th className="w-1/4 p-3 border border-gray-200 dark:border-neutral-700">Prezzo</th>
              <th className="w-1/4 p-3 border border-gray-200 dark:border-neutral-700">Carico</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-neutral-800 border-l-4 border-lime-500">
              <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold">Lavaggio</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold text-lime-600">€ 5,00</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">6kg</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-neutral-800 border-l-4 border-lime-500">
              <td className="p-3 border border-gray-200 dark:border-neutral-700">Asciugatura</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold text-lime-600">€ 5,00</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">15kg</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">Lavaggio</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">€ 8,00</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">15kg</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">Lavaggio Pet</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">€ 4,00</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">6kg</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">Asciugatura Pet</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">€ 4,00</td>
              <td className="p-3 border border-gray-200 dark:border-neutral-700">6kg</td>
            </tr>
          </tbody>
        </table>
        <h2><b>Sconto del 10%</b> su tutti i prodotti per pagamento con chiavetta ricaricabile<br/>Cauzione chiavetta di 5€ che verranno resi alla restituzione della stessa.</h2>
      </div>
    </main>
  )
}
