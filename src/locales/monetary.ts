// Relation of BCP47 to ISO4217 codes
const currencyFromLang: Record<string, string> = {
  en: "USD",
  "pt-BR": "BRL",
  hi: "INR"
};

export const format = (lng: string, amount: number) => {
  const currency = currencyFromLang[lng] || "USD";

  return new Intl.NumberFormat(lng, {
    style: "currency",
    currency
  }).format(amount);
};
