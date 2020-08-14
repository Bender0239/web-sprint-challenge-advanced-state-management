import axios from 'axios'

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"

export const fetchData = () => (dispatch) => {
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
}