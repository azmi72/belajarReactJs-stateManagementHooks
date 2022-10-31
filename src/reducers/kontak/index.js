import {
    GET_KONTAK_LIST,
    ADD_KONTAK,
    DELETE_KONTAK,
    DETAIL_KONTAK,
    UPDATE_KONTAK
} from '../../actions/kontakAction';

const kontak = (state, action) => {
    const { type } = action
    switch (type) {
        case GET_KONTAK_LIST:
            return {
                ...state,
                getKontakLoading: action.payload.loading,
                getKontakResult: action.payload.data,
                getKontakError: action.payload.errorMessage
            }

        case ADD_KONTAK:
            return {
                ...state,
                addKontakLoading: action.payload.loading,
                addKontakResult: action.payload.data,
                addKontakError: action.payload.errorMessage
            }

        case DELETE_KONTAK:
            return {
                ...state,
                deleteKontakLoading: action.payload.loading,
                deleteKontakResult: action.payload.data,
                deleteKontakError: action.payload.errorMessage
            }

        case DETAIL_KONTAK:
            return {
                ...state,
                detailKontakResult: action.payload.data
            }

        case UPDATE_KONTAK:
            return {
                ...state,
                updateKontakLoading: action.payload.loading,
                updateKontakResult: action.payload.data,
                updateKontakError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default kontak;