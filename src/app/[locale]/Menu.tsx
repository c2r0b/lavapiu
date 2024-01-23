import { useTranslations } from 'next-intl'
import { MenuContainer } from '@/ui/MenuContainer'
import { MenuItem } from '@/ui/MenuItem'

const Menu = () => {
    const t = useTranslations('nav');
    return (
        <MenuContainer>
            <MenuItem id="one" href="#priceList">
                <h2>{t('prices.title')}</h2>
                <p>{t('prices.description')}</p>
            </MenuItem>
            <MenuItem id="two" href="#gallery">
                <h2>{t('gallery.title')}</h2>
                <p>{t('gallery.description')}</p>
            </MenuItem>
            <MenuItem id="three" href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9">
                <h2>{t('location.title')}</h2>
                <p>{t('location.description')}</p>
            </MenuItem>
            <MenuItem id="four" href="tel:+393201506351">
                <h2>{t('contact.title')}</h2>
                <p>{t('contact.description')}</p>
            </MenuItem>
        </MenuContainer>
    )
}

export default Menu