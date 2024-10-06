import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Layout, HomePage, NotFound } from './components

const App = () => {

  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<HomePage />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
