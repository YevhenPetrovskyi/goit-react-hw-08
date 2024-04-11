export default function normalizeName(contactName) {
  return contactName.replace(/\s{2,}/g, ' ').trim();
}
