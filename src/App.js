import React from 'react'
import { ListKontak, FormKontak } from './components'

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Kontak App - State Management Hooks</h1>
      <hr />
      <FormKontak />
      <hr />
      <ListKontak />
    </div>
  )
}

export default App