export const validateForm = (values) => {
  let error = {};

  if (values.hasOwnProperty("username")) {
    if (!values.username.trim()) {
      error.username = "Username is required";
    } else if (values.username.length < 6) {
      error.username = "Username must contain at least 6 characters";
    }
  }

  if (values.hasOwnProperty("password")) {
    if (!values.password.trim()) {
      error.password = "Password is required";
    } else if (values.password.length < 6) {
      error.password = "Password must contain at least 6 characters";
    }
  }

  if (values.hasOwnProperty("comment")) {
    if (!values.comment.trim()) {
      error.comment = "Comment so slow";
    }
  }

  const isValid = Object.keys(error).length === 0;

  return {
    error,
    isValid,
  };
};
