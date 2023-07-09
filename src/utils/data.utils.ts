export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const { ok, status, statusText } = response;
  if (!ok) {
    throw new Error(`${status} ${statusText}`);
  }
  return await response.json();
};
