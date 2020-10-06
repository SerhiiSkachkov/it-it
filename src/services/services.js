import { authHeader } from "../helpers/authHeader";

const _baseUrl = "//smktesting.herokuapp.com/api";
const _ingUrl = "//smktesting.herokuapp.com/static/";

const setRegister = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${_baseUrl}/register/`, requestOptions).then((result) =>
    result.json()
  );
};

const setLogin = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${_baseUrl}/login/`, requestOptions).then((result) =>
    result.json()
  );
};

const setLogout = () => {
  localStorage.removeItem("user");
};

const getProducts = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${_baseUrl}/products/`, requestOptions)
    .then((result) => result.json())
    .then((result) => {
      return result.map((product) => _transformProduct(product));
    });
};

const getComments = (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${_baseUrl}/reviews/${id}`, requestOptions).then((result) =>
    result.json()
  );
};

const postComment = (id, comment) => {
  console.log(comment);
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  };

  return fetch(`${_baseUrl}/reviews/${id}`, requestOptions).then((result) =>
    result.json()
  );
};

const _transformProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    img: `${_ingUrl}${product.img}`,
    text: product.text,
  };
};

export const service = {
  setRegister,
  setLogin,
  setLogout,
  getProducts,
  getComments,
  postComment,
};
