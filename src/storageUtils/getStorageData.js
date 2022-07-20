export const getStorageData = key => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};
