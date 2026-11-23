export function safeGetItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`[LocalStorage] Failed to parse key "${key}":`, err);
    return fallback;
  }
}

export function safeSetItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`[LocalStorage] Failed to save key "${key}":`, err);
  }
}

export function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.warn(`[LocalStorage] Failed to remove key "${key}":`, err);
  }
}
