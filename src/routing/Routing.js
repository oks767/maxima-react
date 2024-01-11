import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import App from '../components/App/App';
import Calculator from '../components/Calculator/Calculator';
import Slider from '../components/Slider/Slider';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
  },
  {
    path: '/sale',
    element: <Slider />,
  },
]);
export default router;
