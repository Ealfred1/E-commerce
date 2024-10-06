import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Layout, NotFound } from './components'
import HomePage from './pages/Homepage'

const App = () => {

  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
