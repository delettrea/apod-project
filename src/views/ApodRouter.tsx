import ApodList from './ApodList.tsx';
import ApodDetails from './ApodDetails.tsx';
import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layout.tsx';

const ApodRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ApodList />,
      },
      {
        path: "/apod/:apodId",
        element: <ApodDetails />,
      },
    ],
  }
]);

export default ApodRouter;