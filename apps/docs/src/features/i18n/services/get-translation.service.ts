export async function getTranslation() {
  return (await import("../translations/en.json")).default;
}
