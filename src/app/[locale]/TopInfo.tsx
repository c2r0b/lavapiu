import { useTranslations } from 'next-intl'

const TopInfo = () => {
    const t = useTranslations('info');

    return (
        <div className="text-center mt-5">
          <h1 className="text-l mb-2 font-bold">
            {t('title')}
          </h1>
          <a href="https://maps.app.goo.gl/g9FZviFhnzASxvfG9">
            <h1 className="text-xl mb-4">
              📍 {t('address')}
            </h1>
          </a>
        </div>
    )
}

export default TopInfo