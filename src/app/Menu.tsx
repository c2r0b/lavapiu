import { MenuContainer } from "@/ui/MenuContainer";
import { MenuItem } from "@/ui/MenuItem";

export const Menu = () => (
    <MenuContainer>
        <MenuItem id="one" href="#priceList">
            <h2>Prezzi</h2>
            <p>Prezzi competitivi e macchine di qualità</p>
        </MenuItem>
        <MenuItem id="two" href="#gallery">
            <h2>Galleria</h2>
            <p>Le nostre macchine Miele Professional</p>
        </MenuItem>
        <MenuItem id="three" href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9">
            <h2>Dove siamo</h2>
            <p>A Livorno, Ardenza. Parcheggio gratuito</p>
        </MenuItem>
        <MenuItem id="four" href="tel:+3905861234567">
            <h2>Chiamaci</h2>
            <p>Puoi contattarci a questo numero: 0586 1234567</p>
        </MenuItem>
    </MenuContainer>
)