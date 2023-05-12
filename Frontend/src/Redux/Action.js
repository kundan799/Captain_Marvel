import {
  GET_DATA_ERRORS,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./ActionType";
import axios from "axios";
const BASE_URL="https://todo-backend-khhc.onrender.com/api/todo"
//GET
export const getDataApi = () => (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
  return axios
    .get(`${BASE_URL}`)
    .then((res) => {
      console.log(res)
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_ERRORS });
    });
};

//post
export const addDataApi = (add) => (dispatch) => {
  return axios
    .post(`${BASE_URL}`, add)
    .then((res) => {
      console.log("data posted to server");
      dispatch(getDataApi());
    })
    .catch((err) => {
      console.log("getting error while send data to server");
    });
};

//delete
export const DeleteApi = (id) => (dispatch) => {
  return axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => {
      console.log("data deleted from server");
      dispatch(getDataApi());
    })
    .catch((err) => {
      console.log("getting error while delete from server");
    });
};

//update
export const UpdateApi = (newdata, id) => (dispatch) => {
  return axios
    .patch(`${BASE_URL}/${id}`, newdata)
    .then((res) => {
      console.log("data updated on json server");
      dispatch(getDataApi());
    })
    .catch((err) => {
      console.log("getting error while update data on server");
    });
};
