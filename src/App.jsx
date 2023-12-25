import React from 'react'
import Routers from "./routes/AppRouter";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <Toaster position='right top'/>
    <Routers />
    </>
  )
}

export default App