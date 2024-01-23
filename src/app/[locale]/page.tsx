import { Main } from '@/ui/Main';
import { Footer } from '@/ui/Footer';

import Logo from './Logo';
import Menu from './Menu';
import Gallery from './Gallery';
import PriceList from './PriceList';
import TopInfo from './TopInfo';

export default function Home() {
  return (
    <>
      <Main>
        <Logo />
        <TopInfo />
        <Menu />
        <Gallery />
        <PriceList />
        
        <Footer>
          © LavaPiù Livorno
        </Footer>
      </Main>
    </>
  )
}
