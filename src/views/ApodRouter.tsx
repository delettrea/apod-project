import ApodList from './ApodList.tsx';
import ApodDetails from './ApodDetails.tsx';
import {createBrowserRouter} from 'react-router-dom';

const ApodRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApodList />,
  },
  {
    path: "/apod/:apodId",
    element: <ApodDetails />,
  },
]);

export default ApodRouter;