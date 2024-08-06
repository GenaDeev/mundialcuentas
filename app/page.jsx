import Image from "next/image";
import dynamic from 'next/dynamic'
import ParticipantElement from "./components/ParticipantElement";
const Countdown = dynamic(() => import('./components/Countdown'), {
  ssr: false
})

export const fetchCache = 'force-no-store';


export const metadata = {
  title: "Mundial de Cuentas | Resultados en Vivo | Encu5Futbol",
  description: "Monitorea los resultados del Mundial de Cuentas de Encu5Futbol en vivo a traves de una plataforma web completa, facil e intuitiva.",
  openGraph: {
    title: 'Mundial de Cuentas | Resultados en Vivo | Encu5Futbol',
    description: 'Monitorea los resultados del Mundial de Cuentas de Encu5Futbol en vivo a traves de una plataforma web completa, facil e intuitiva.',
    url: 'https://mundialdecuentas.vercel.app/',
    siteName: 'Mundial de Cuentas | Encu5Futbol',
    images: [
      {
        url: 'https://mundialdecuentas.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: "Mundial de Cuentas"
      }
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundial de Cuentas | Resultados en Vivo | Encu5Futbol',
    description: 'Monitorea los resultados del Mundial de Cuentas de Encu5Futbol en vivo a traves de una plataforma web completa, facil e intuitiva.',
    siteId: '1498764837601484801',
    creator: '@Encu5Futbol',
    creatorId: '1498764837601484801',
    images: ['https://mundialdecuentas.vercel.app/og.png'],
  },
}

export default async function Home() {
  const res = await fetch('https://filehost.comidolar.com.ar:2020/api/mundialcuentas');
  const data = await res.json();

  const { totalVotes, team1Votes, team2Votes, timestamp } = data[0];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-8">
        <section id="hero" className="flex items-center text-center justify-between w-full">
          <Image className="w-24 aspect-square object-contain h-auto" src="/copa.webp" alt="Mundial de Cuentas" width={200} height={400} />
          <div className="text flex flex-col items-center">
            <h1 className="text-4xl font-bold text-yellow-600">Mundial de Cuentas</h1>
            <h2 className="text-2xl font-semibold hover:text-yellow-600 transition-colors duration-200">
              <a href="https://x.com/encu5futbol">@Encu5Futbol</a>
            </h2>
          </div>
          <a title="Encu5Futbol" href="https://x.com/encu5futbol" className="hover:scale-105 transition-transform duration-200"><Image className="w-24 h-auto rounded-full" src="/encu.webp" alt="Logo de Encu5Futbol" width={200} height={400} /></a>
        </section>

        <section className="flex flex-col items-center w-full text-center mt-12">
          <h3 className="flex items-center gap-4 text-xl mb-4">
            <a className="hover:text-yellow-600 transition-colors duration-200" href="https://x.com/clossmoments">Sensei Closs</a>
            vs
            <a className="hover:text-yellow-600 transition-colors duration-200" href="https://x.com/expefutbol">Expefutbol</a>
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <ParticipantElement isWinning={team1Votes > team2Votes} name="Sensei Closs" url="https://x.com/clossmoments" image="/sensei.webp" votes={team1Votes} totalVotes={totalVotes} />

            <div className="relative w-64 h-8 bg-blue-500 rounded-full">
              <div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ width: `${team1Votes}%` }}
              ></div>
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{ width: `${team2Votes}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">{team1Votes}% - {team2Votes}%</span>
            </div>

            <ParticipantElement isWinning={team2Votes > team1Votes} name="Expefutbol" url="https://x.com/expefutbol" image="/expe.webp" votes={team2Votes} totalVotes={totalVotes} />
          </div>

          <Countdown to="2024-08-06T21:03:00-03:00" />


          <div className="mt-4 text-lg">
            <p>Total de votos: <span className="font-semibold">{totalVotes}</span></p>
            <p className="mt-2 text-gray-400">
              Última actualización: <span className="font-semibold">
                {new Date(timestamp).toLocaleString('es-ES', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </span>
            </p>
            <p className="text-sm text-gray-500">Se actualiza cada minuto.</p>
          </div>
        </section>
      </main>
      <footer className="bg-neutral-950 flex items-center justify-between w-full py-12 px-8 flex-wrap">
        <section className="flex items-center">
          <Image className="w-24 h-24" src="/genadev-v-nobg-3.png" alt="Logo de GenaDeev" width={200} height={200} />
          <h4>Coded by <span className="cursor-pointer hover:text-yellow-500 transition-colors duration-200">© 2024 GenaDeev</span></h4>
        </section>
        <section className="flex items-center gap-4">
          <a className="px-4 py-1 flex rounded-xl items-center gap-2 bg-slate-950 hover:bg-slate-900 transition-colors duration-200" href="https://github.com/GenaDeev" target="_blank" referrerPolicy="no-referrer">
            <svg viewBox="0 0 256 256" width="16" height="16" fill="#fff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" /></svg>
            Github
          </a>
          <a className="px-4 py-1 flex rounded-xl items-center gap-2 bg-blue-600 hover:bg-blue-900 transition-colors duration-200" href="https://linkedin.com/in/GenaDev" target="_blank" referrerPolicy="no-referrer">
            <svg width="16" height="16" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor" /></svg>
            LinkedIn
          </a>
          <a className="px-4 py-1 flex rounded-xl items-center gap-2 bg-black hover:bg-neutral-900 transition-colors duration-200 fill-white" href="https://x.com/genaaaaj" target="_blank" referrerPolicy="no-referrer">
          <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"/></svg>
            Twitter
          </a>
        </section>
      </footer>
    </>
  );
}

