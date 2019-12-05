import axios from "axios";
import Swal from "sweetalert2";

export const loginValidation = async values => {
  const API = process.env.REACT_APP_API;

  let errors = {};

  try {
    const { data: result } = await axios.post(`${API}/validate/signin`, values);

    return { ...errors, ...result };
  } catch (err) {
    throw Swal.fire({
      icon: "success",
      title: "Your new post is successfully added",
      text: err
    });
  }
};
