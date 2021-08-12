import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/api/",
});

export const getData = (page = 1) => {
  return instance.get(`users?page=${page}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

export const changeData = (data, id) => {
  return instance.put(`users/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};
