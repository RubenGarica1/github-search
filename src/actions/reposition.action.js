import axios from 'axios'
import { RELOAD_REPOSITION, ADD_REPOSITION } from '../types/reposition.types'
export const reloadReposition = (items) => async (dispatch) => {
  const arr = [];
  items.map(async (i, index) => {
    let response = await axios.get(i.url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      auth: {
        username: process.env.NEXT_PUBLIC_USER,
        password: process.env.NEXT_PUBLIC_PASS
      }
    });
    arr.push(response.data);
    // console.log(response)
  });
  dispatch({
    type: RELOAD_REPOSITION,
    payload: arr
  })
}
export const searchReposition = (search) => async (dispatch) => {
  dispatch({
    type: RELOAD_REPOSITION,
    payload: arr
  })
  const getUsers = await axios.get(`https://api.github.com/search/repositories?q=${search}&per_page=10&page=1`,{
    auth: {
      username: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASS
    }
  })
  const arr = [];
  getUsers.data.items.map(async (i, index) => {
    let response = await axios.get(i.url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      auth: {
        username: process.env.NEXT_PUBLIC_USER,
        password: process.env.NEXT_PUBLIC_PASS
      }
    });
    arr.push(response.data);
  });
  dispatch({
    type: RELOAD_REPOSITION,
    payload: arr
  })
}
export const addusers = (users) => (dispatch) => {
  dispatch({
    type: ADD_USERS,
    payload: users
  })
}