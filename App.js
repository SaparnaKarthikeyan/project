import Login from './Login/Login';
import HomePage from './HomePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './SignUp/signup';
import Forgot from './Forgot/forgot';
import MedicineReport from './Pages/MedicalReport';
import PatientInfo from './Pages/PatientInfo';

function App() {
  const route=createBrowserRouter(
    [
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/home',
        element:<HomePage/>
      },
      {
        path:"forgotPassword",
        element:<Forgot/>
      },
      {
        path:"/medicalreports",
        element:<MedicineReport/>
      },
      {
        path:"/patientinfo",
        element:<PatientInfo/>
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;