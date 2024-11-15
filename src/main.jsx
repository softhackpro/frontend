import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Component/Router/App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Component/stores/Auth.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Login from './Component/Login.jsx';
import StartPage from './Component/StartPage.jsx';
import UserPage from './Component/UserPage.jsx';
import EventsGrid from './Component/Events/EventsGrid.jsx';
import AdminPage from './Component/AdminBoard/AdminPage.jsx';
import Register from './Component/Register.jsx';
import Reset from './Component/Reset.jsx';
import EventPage from './Component/Events/EventPage.jsx';
import ImportantMsg from './Component/LoginFolder/ImportantMsg.jsx';
import DonationForm from './Component/DonationForm.jsx';
import Logout from './Component/Logout.jsx';
const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children:[
      {path: "/", element: <StartPage/>},
      {path: "/Login", element: <Login/>},
      {path: "/LoginPage", element: <UserPage/>},
      {path: "/Events", element: <EventsGrid value={'events'}/>},
      {path: "/Gallery", element: <EventsGrid value={'gallery'}/>},
      {path: "/Members", element: <EventsGrid value={'user'}/>},
      {path: "/register", element: <Register/>},
      {path: "/reset", element: <Reset/>},
      {path: "/Page/:id", element: <EventPage/>},
      {path: "/FAQ", element: <ImportantMsg/>},
      {path: "/instiution/login/admin", element: <AdminPage/>},
      {path: "/Donation", element: <DonationForm/>},
      {path: "/Logout", element: <Logout/>}
    ]},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
     <RouterProvider router={router}/>
     </AuthProvider>
  // </StrictMode>,
)
