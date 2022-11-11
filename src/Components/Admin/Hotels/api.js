import axios from "axios";

export const getHotel = ({ page, limit, sort, order }) => {
  return axios.get(`http://localhost:3003/hotels`, {
    params: {
      _page: page,
      _limit: limit,
      _sort: sort,
      _order: order,
    },
  });
};
// export const getCities = ({ page, limit, sort, order }) => {
//   return axios({
//     method: "get",
//     url: "http://localhost:3000/cities",
//     params: {
//       _page: page,
//       _limit: limit,
//       _sort: sort,
//       _order: order
//     }
//   });
// };
export const AddCityPost = (data) => {
  return axios.post(`http://localhost:3003/hotels`, {
    ...data,
  });
};
export const DeleteCity = (id) => {
  return axios({
    method: "delete",
    url: `/hotels/${id}`,
    baseURL: "http://localhost:3003",
  });
};
