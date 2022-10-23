import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
