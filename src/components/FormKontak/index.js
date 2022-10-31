import React, { useEffect, useState } from 'react'
import { useAppState } from '../../context/appState'
import { addKontak, getKontakList, updateKontak } from '../../actions/kontakAction'

function FormKontak() {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState("");

    const [state, dispatch] = useAppState();
    const { addKontakResult, detailKontakResult, updateKontakResult } = state;

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id) {
            // Update
            updateKontak(dispatch, { id: id, nama: nama, nohp: nohp })
        } else {
            // Add
            addKontak(dispatch, { nama: nama, nohp: nohp })
        }
    }

    useEffect(() => {
        if (addKontakResult) {
            getKontakList(dispatch)
            setNama("")
            setNohp("")
            setId("")
        }
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
            setId(detailKontakResult.id)
        }
    }, [detailKontakResult])

    useEffect(() => {
        if (updateKontakResult) {
            getKontakList(dispatch)
            setNama("")
            setNohp("")
            setId("")
        }
    }, [updateKontakResult, dispatch])

    return (
        <div>
            <h4>{id ? "Edit Kontak" : "Tambah Kontak"}</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="nama"
                    placeholder="Nama..."
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
                <input
                    type="text"
                    name="nohp"
                    placeholder="No HP..."
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <br />
        </div>
    )
}

export default FormKontak