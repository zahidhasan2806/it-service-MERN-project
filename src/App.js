import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Reviews from './Pages/Reviews/Reviews/Reviews';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services/Services';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './ProtectedRoute/PrivateRoute/PrivateRoute';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import Payment from './Pages/Dashboard/Payment/Payment/Payment';
import Profile from './Pages/Dashboard/Profile/Profile';
import AddNewService from './Pages/Dashboard/AddNewService/AddNewService';
import ManageAllServices from './Pages/Dashboard/ManageAllServices/ManageAllServices/ManageAllServices';
AOS.init();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/services/:id" element={<PrivateRoute><ServiceDetails /></PrivateRoute>}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/makeadmin" element={<MakeAdmin />}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route exact path="/dashboard" element={<Profile />}>

              </Route>
              <Route path="/dashboard/myorders" element={<MyOrders />}>

              </Route>
              <Route path="/dashboard/reviews" element={<Reviews />}>

              </Route>
              <Route path="/dashboard/payment" element={<Payment />}>
              </Route>
              <Route path="/dashboard/manageallorders" element={<ManageAllOrders />}>
              </Route>
              <Route path="/dashboard/addnewservice" element={<AddNewService />}></Route>
              <Route path="/dashboard/manageservices" element={<ManageAllServices />}></Route>
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />}>
              </Route>

            </Route>
            <Route path="/myorders" element={<MyOrders />}></Route>
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
