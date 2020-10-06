export const authHeader = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return { Authorization: `Token ${user}` };
  } else {
    return {};
  }
};
