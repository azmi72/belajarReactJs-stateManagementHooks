import axios from "axios";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getKontakList = (dispatch) => {
    // Loading
    dispatch({
        type: GET_KONTAK_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: "GET",
        url: "http://localhost:3001/kontaks",
        timeout: 120000
    })

        .then((res) => {
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })

        .catch((error) => {
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const addKontak = (dispatch, data) => {
    // Loading
    dispatch({
        type: ADD_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: "POST",
        url: "http://localhost:3001/kontaks",
        timeout: 120000,
        data: data
    })

        .then((res) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })

        .catch((error) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const deleteKontak = (dispatch, id) => {
    // Loading
    dispatch({
        type: DELETE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: "DELETE",
        url: "http://localhost:3001/kontaks/" + id,
        timeout: 120000
    })

        .then((res) => {
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })

        .catch((error) => {
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const detailKontak = (dispatch, data) => {
    dispatch({
        type: DETAIL_KONTAK,
        payload: {
            data: data
        }
    })
}

export const updateKontak = (dispatch, data) => {
    // Loading
    dispatch({
        type: UPDATE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: "PUT",
        url: "http://localhost:3001/kontaks/" + data.id,
        timeout: 120000,
        data: data
    })

        .then((res) => {
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })

        .catch((error) => {
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}