import { Section } from "@/ui/Section";
import { SectionTitle } from "@/ui/SectionTitle";

export const PriceList = () => (
    <Section id="priceList" type="light">
        <SectionTitle>
            Listino prezzi
        </SectionTitle>
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
        <h2>
            <b>Sconto del 10%</b> su tutti i prodotti per pagamento con chiavetta ricaricabile
        </h2>
    </Section>
)