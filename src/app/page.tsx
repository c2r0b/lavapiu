'use client'
import Image from 'next/image'
import Confetti from 'react-confetti'
import useWindowSize from '@/hooks/useWindowSize';

function drawBubble(this:any, context:any) {
  // remove animation
  this.angle = 0;
  this.angularSpin = 0;
  this.rotateY = 1;
  this.rotationDirection = 0;
  this.color='';
  if (!this.key) {
    this.radius = Math.random() * 30;
    this.key = Math.random();
  }
  this.hue = 200;
  context.beginPath();
  context.arc(0, 0, this.radius, 0, 2 * Math.PI);
  context.strokeStyle = `hsl(${this.hue} 100% 50%)`;
  context.stroke();

  const gradient = context.createRadialGradient(
    0,
    0,
    1,
    0 + 0.5,
    0 + 0.5,
    this.radius
  );

  gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
  gradient.addColorStop(0.95, "#e7feff");

  context.fillStyle = gradient;
  context.fill();
}

export default function Home() {
  const size = useWindowSize();

  return (
    <>
      { size.width ? (
        <Confetti
          width={size.width - 50}
          height={size.height}
          confettiSource={{x: (size.width ?? 0) / 2 - 30, y: 280, w: 30, h: 30}}
          friction={1}
          gravity={0.02}
          numberOfPieces={3}
          colors={[]}
          drawShape={drawBubble}
        />
      ) : null }
      <main className="w-full flex min-h-screen flex-col items-center justify-between pt-16">
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
        <div className="text-center mt-5">
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
        <div className="grid mt-10 text-center grid-cols-2 lg:w-full lg:max-w-7xl lg:mb-0 lg:grid-cols-4 lg:text-left relative px-5 lg:px-10">
          <a
            href="#priceList"
          >
            <div className="bubble" id="one">
              <div className="content">
                  <h2>Prezzi</h2>
                  <p>Prezzi competitivi e macchine di qualità</p>
              </div>
            </div>
          </a>
          <a
            href="#gallery"
          >
            <div className="bubble" id="two">
              <div className="content">
                  <h2>Galleria</h2>
                  <p>Le nostre macchine Miele Professional</p>
              </div>
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bubble" id="three">
              <div className="content">
                  <h2>Dove siamo</h2>
                  <p>A Livorno, Ardenza. Parcheggio gratuito</p>
              </div>
            </div>
          </a>
          <a
            href="tel:+3905861234567"
            rel="noopener noreferrer"
          >
            <div className="bubble" id="four">
              <div className="content">
                  <h2>Hai domande?</h2>
                  <p>Puoi contattarci a questo numero: 0586 1234567</p>
              </div>
            </div>
          </a>
        </div>

        <div id="priceList" className="mt-16 w-full px-8 lg:px-32 py-32 grid text-center bg-white dark:bg-gray-800">
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
              <tr className="bg-gray-50 dark:bg-neutral-800 border-l-4 border-sky-500">
                <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold">Lavaggio</td>
                <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold text-sky-600">€ 5,00</td>
                <td className="p-3 border border-gray-200 dark:border-neutral-700">6kg</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-neutral-800 border-l-4 border-sky-500">
                <td className="p-3 border border-gray-200 dark:border-neutral-700">Asciugatura</td>
                <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold text-sky-600">€ 5,00</td>
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
          <h2><b>Sconto del 10%</b> su tutti i prodotti per pagamento con chiavetta ricaricabile</h2>
        </div>
        <div id="gallery" className="px-8 lg:px-32 py-32 w-full grid text-center bg-gray-100 dark:bg-gray-900">
          <h1 className="text-3xl font-bold mb-10">
            Galleria
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Image
              className="relative border"
              src="/gallery/1.jpg"
              alt="Foto 1"
              width={400}
              height={300}
              priority
            />
            <Image
              className="relative border"
              src="/gallery/1.jpg"
              alt="Foto 1"
              width={400}
              height={300}
              priority
            />
            <Image
              className="relative border"
              src="/gallery/1.jpg"
              alt="Foto 1"
              width={400}
              height={300}
              priority
            />
          </div>
        </div>
        
        <footer className="flex bg-white dark:bg-black flex-col items-center justify-center w-full h-24 border-t text-gray-500 dark:border-neutral-700">
          © LavaPiù Livorno - P.IVA 1234567890
        </footer>
      </main>
    </>
  )
}
