export default function normalizeName(name) {
  return name.replace(/\s{2,}/g, ' ').trim();
}
