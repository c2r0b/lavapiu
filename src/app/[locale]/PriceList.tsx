import { useTranslations } from "next-intl";
import { Section } from "@/ui/Section";
import { SectionTitle } from "@/ui/SectionTitle";

const PriceList = () => {
  const t = useTranslations("priceList");

  return (
    <Section id="priceList" type="light">
      <SectionTitle>{t("title")}</SectionTitle>
      <table className="table-fixed border-collapse mb-16 border border-gray-200 dark:border-neutral-700">
        <thead>
          <tr>
            <th className="w-1/2 p-3 border border-gray-200 dark:border-neutral-700">
              {t("service")}
            </th>
            <th className="w-1/4 p-3 border border-gray-200 dark:border-neutral-700">
              {t("price")}
            </th>
            <th className="w-1/4 p-3 border border-gray-200 dark:border-neutral-700">
              {t("load")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 dark:bg-neutral-800 border-l-4 border-lime-500">
            <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold">
              {t("wash")}
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold text-lime-600">
              € 5,00
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              6kg
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-neutral-800 border-l-4 border-lime-500">
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              {t("dry")}
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700 font-bold text-lime-600">
              € 5,00
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              15kg
            </td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              {t("wash")}
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              € 6,00
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              7.5kg
            </td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              {t("wash")}
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              € 8,00
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              15kg
            </td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              {t("petWash")}
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              € 4,00
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              6kg
            </td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              {t("petDry")}
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              € 4,00
            </td>
            <td className="p-3 border border-gray-200 dark:border-neutral-700">
              6kg
            </td>
          </tr>
        </tbody>
      </table>
      <h2>{t("discount")}</h2>
      <br />
      <h2>
        <b>{t("happyHour")}</b>
      </h2>
    </Section>
  );
};

export default PriceList;
