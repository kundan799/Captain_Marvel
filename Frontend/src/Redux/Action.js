import {
  GET_DATA_ERRORS,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./ActionType";
import axios from "axios";

//GET
export const getDataApi = () => (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
  return axios
    .get("https://stempedia.onrender.com/data")
    .then((res) => {
      //console.log(res)
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_ERRORS });
    });
};

//post
export const addDataApi = (add) => (dispatch) => {
  return axios
    .post("https://stempedia.onrender.com/data/", add)
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
    .delete(`https://stempedia.onrender.com/data/${id}`)
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
    .put(`https://stempedia.onrender.com/data/${id}`, newdata)
    .then((res) => {
      console.log("data updated on json server");
      dispatch(getDataApi());
    })
    .catch((err) => {
      console.log("getting error while update data on server");
    });
};
