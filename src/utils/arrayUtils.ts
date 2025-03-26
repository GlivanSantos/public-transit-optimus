
/**
 * Safely maps over an array or converts a string to an array with a single element
 * @param data Array or string to map over
 * @param callback Function to call for each element
 * @returns Array of mapped elements
 */
export function safeMap<T, U>(
  data: T[] | T | null | undefined,
  callback: (item: T, index: number, array: T[]) => U
): U[] {
  if (data === null || data === undefined) {
    return [];
  }
  
  if (Array.isArray(data)) {
    return data.map(callback);
  }
  
  // Treat single item as an array with one element
  return [callback(data as T, 0, [data as T])];
}
