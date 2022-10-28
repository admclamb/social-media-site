import { Route, Routes } from 'react-router-dom';
import Create from './Create/Create';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import Profile from './Profile/Profile';
const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile/:user_id" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
