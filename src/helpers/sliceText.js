export default function sliceText(text, length) {
  if (text.length > length) {
    return text.slice(0, length).trim() + '...';
  }
  return text;
}
