import Header from '../components/Header.tsx';
import ApodFooter from '../components/apod/ApodFooter.tsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
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
          <Outlet />
        </div>
        <ApodFooter />
      </div>
    </div>
  )
}
export default Layout
