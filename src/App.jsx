import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Components/Private/PrivateRoute';
import PropertyPage from './Pages/PropertyPage/PropertyPage';
import Sidebar from './Components/Sidebar/Sidebar';
import TourPage from './Pages/TourPage/TourPage';
import RequestPage from './Pages/RequestPage/RequestPage';
import Notifications from './Pages/Notifications/Notifications';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import SettingPage from './Pages/SettingPage/SettingPage';


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
         <Route path='/profile' element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path='/property' element={
          <PrivateRoute>
            <PropertyPage />
          </PrivateRoute>
        } />
        <Route path='/tour' element={
          <PrivateRoute>
            <TourPage />
          </PrivateRoute>
        } />
        <Route path='/request' element={
          <PrivateRoute>
            <RequestPage />
          </PrivateRoute>
        } />
         <Route path='/notification' element={
          <PrivateRoute>
            <Notifications />
          </PrivateRoute>
        } />
        <Route path='/settings' element={
          <PrivateRoute>
            <SettingPage />
          </PrivateRoute>
        } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
