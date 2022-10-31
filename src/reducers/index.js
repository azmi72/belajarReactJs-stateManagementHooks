import kontakReducer from "./kontak";

const initialState = {
    getKontakLoading: false,
    getKontakResult: false,
    getKontakError: false,

    addKontakLoading: false,
    addKontakResult: false,
    addKontakError: false,

    deleteKontakLoading: false,
    deleteKontakResult: false,
    deleteKontakError: false,

    detailKontakResult: false,

    updateKontakLoading: false,
    updateKontakResult: false,
    updateKontakError: false
};

const combineReducers = (reducers) => {
    return (state, action) => {
        return Object.keys(reducers).reduce((acc, prop) => {
            return {
                ...acc,
                ...reducers[prop]({ [prop]: acc[prop] }, action),
            };
        }, state)
    };
};

const appReducers = combineReducers({
    // Nama fungsi reducer
    kontakReducer,
});

export { initialState, combineReducers, appReducers };

