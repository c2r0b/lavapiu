import { Main } from '@/ui/Main';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Gallery } from './Gallery';
import { PriceList } from './PriceList';
import { Footer } from '@/ui/Footer';

export default function Home() {
  return (
    <>
      <Main>
        <Logo />

        <div className="text-center mt-5">
          <h1 className="text-l mb-2 font-bold">
            Da Gennaio 2024
          </h1>
          <a href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9">
            <h1 className="text-xl mb-4">
              📍 Via Bat Yam 6, Livorno
            </h1>
          </a>
        </div>

        <Menu />
        <Gallery />
        <PriceList />
        
        <Footer>
          © LavaPiù Livorno - P.IVA 1234567890
        </Footer>
      </Main>
    </>
  )
}
