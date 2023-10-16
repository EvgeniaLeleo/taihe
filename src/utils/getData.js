export const getData = async ({ url, callback }) => {
  try {
    const response = await fetch(url);
    callback(await response.json());
  } catch (error) {
    throw new Error(error);
  }
};
