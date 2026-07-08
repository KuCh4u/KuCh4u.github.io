/** Estimación simple de tiempo de lectura (~200 palabras por minuto). */
export function readingTime(text: string, wordsPerMinute = 200): number {
  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
