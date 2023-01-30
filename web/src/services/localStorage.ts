function saveOnLocalStorage(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}
function getItemFromLocalStorage(key: string): object | undefined {
  const json = localStorage.getItem(key);
  if (json) return JSON.parse(json);
}

function deleteItemFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export { saveOnLocalStorage, getItemFromLocalStorage, deleteItemFromLocalStorage };
