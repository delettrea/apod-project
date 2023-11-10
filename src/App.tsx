import './App.css'
import Header from './components/Header.tsx';
import {RouterProvider} from 'react-router-dom';
import ApodRouter from './views/ApodRouter.tsx';
import ApodFooter from './components/ApodFooter.tsx';

function App() {
  const apodRouter = ApodRouter;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-dark-violet to-purple-200 max-h-full font-jost tracking-wide">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="min-h-screen flex flex-col items-center justify-between">
        <Header/>
        <div
          className="bg-white mb-16 border-none container rounded-sm shadow-2xl w-11/12 md:w-9/12 p-6 md:p-12">
          <RouterProvider router={apodRouter}/>
        </div>
        <ApodFooter />
      </div>
    </div>
  )
}

export default App
