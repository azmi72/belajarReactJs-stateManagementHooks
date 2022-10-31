import React, { useEffect } from 'react'
import { useAppState } from '../../context/appState'
import { getKontakList, deleteKontak, detailKontak } from '../../actions/kontakAction'


function ListKontak() {
    const [state, dispatch] = useAppState();
    const { getKontakLoading, 
            getKontakResult, 
            getKontakError,
            deleteKontakResult
        } = state

    useEffect(() => {
        getKontakList(dispatch);
    }, [dispatch])

    useEffect(() => {
        if(deleteKontakResult) {
            getKontakList(dispatch);
        };
    }, [dispatch, deleteKontakResult])

    return (
        <div>
            <h3>List Kontak</h3>
            {getKontakResult ? (
                getKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} - 
                            {kontak.nohp} - 
                            <button onClick={() => deleteKontak(dispatch, kontak.id)} style={{marginLeft: "5px"}}>
                                Hapus
                            </button>
                            <button onClick={() => detailKontak(dispatch, kontak)} style={{marginLeft: "5px"}}>
                                Edit
                            </button>
                        </p>
                    )
                })
            ) : getKontakLoading ? (
                <p>Loading...</p>
            ) : (
                <p>{getKontakError ? getKontakError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListKontak