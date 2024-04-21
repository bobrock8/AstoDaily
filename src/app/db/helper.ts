export const getDate = () => {
  return new Date().toISOString().split("T")[0];
};
