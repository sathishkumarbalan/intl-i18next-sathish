import { useEffect, useState } from "react";

import "./styles.css";
import { format } from "./locales/monetary";
import { useTranslation } from "./locales/i18n";

export default function App() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState("en");
  const amount = 3254.75;

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return (
    <div>
      <select onChange={({ target }) => setLng(target.value)}>
        <option value="en">English</option>
        <option value="pt-BR">Portuguese</option>
        <option value="hi">Hindi</option>
      </select>
      <h2>Currency number formatting with Intl & i18Next</h2>
      <p>The amount {format(lng, amount)} was formatted without i18next</p>
      <p>{t("receivable", { amount })}</p>
    </div>
  );
}
