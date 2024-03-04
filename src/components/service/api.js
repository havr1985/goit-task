import axios from "axios";

const instance = axios.create({
  baseURL: "https://65db17143ea883a152911e99.mockapi.io/cars",
});

export const requiredAllCars = async (page) => {
    const { data }  = await instance.get(`/cars?page=${page}&limit=12`);
    return data;
};