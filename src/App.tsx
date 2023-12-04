import './App.css'
import {RouterProvider} from 'react-router-dom';
import ApodRouter from './views/ApodRouter.tsx';

function App() {
  const apodRouter = ApodRouter;

  return (
    <RouterProvider router={apodRouter} />
  )
}

export default App
