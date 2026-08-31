/**
 * Formata a data de publicação vinda do Sanity no padrão do site: "12 MAI 2026".
 * Usa `formatToParts` para montar o formato manualmente, já que o `pt-BR` devolve
 * "12 de mai. de 2026" quando pedimos o mês abreviado.
 */
export function formatPostDate(value) {
  if (!value) return "";
  const parts = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).formatToParts(new Date(value));
  const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("day")} ${get("month").replace(".", "").toUpperCase()} ${get("year")}`;
}
