import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Layout, NotFound, Loader } from './components'
import HomePage from './pages/Homepage'
import { useLoader } from './context/LoaderContext';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const { loading } = useLoader();

  return (
    <>
      <main className="">
        <AnimatePresence>
          { loading && <Loader text="Welcome to RafCart" /> }
        </AnimatePresence>

        {!loading && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='/*' element={<NotFound />} />
            </Route>
          </Routes>
        )}
      </main>
    </>
  )
}

export default App
