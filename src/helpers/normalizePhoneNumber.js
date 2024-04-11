export default function normalizePhoneNumber(value) {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length === 12) {
    return `+${cleaned.slice(0, 2)}-${cleaned.slice(2, 5)}-${cleaned.slice(
      5,
      8
    )}-${cleaned.slice(8)}`;
  } else {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
}
