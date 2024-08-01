import ProtectedRoute from '../components/Routes/ProtectedRoute'
import PublicRoute from '../components/Routes/PublicRoute'
import AdminHome from '../pages/Admin/AdminHome'
import DonarList from '../pages/Admin/DonarList'
import HospitalList from '../pages/Admin/HospitalList'
import OrgList from '../pages/Admin/OrgList'
import Analytics from '../pages/Dashboard/Analytics'
import Consumer from '../pages/Dashboard/Consumer'
import Donar from '../pages/Dashboard/Donar'
import Hospitals from '../pages/Dashboard/Hospitals'
import OrganisationPage from '../pages/Dashboard/OrganisationPage'
import Donation from '../pages/Donation'
import HomePage from '../pages/HomePage'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import './App.css'
import {Routes,Route, Outlet} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
       <Route path='organisation' element={
        <ProtectedRoute>
          <OrganisationPage/>
        </ProtectedRoute>
       }/>

      <Route path='/hospitals' element={
        <ProtectedRoute>
        <Hospitals/>
        </ProtectedRoute>
      }/>

      <Route path='/admin' element={
        <ProtectedRoute>
        <AdminHome/>
        </ProtectedRoute>
      }/>

      <Route path='/donar-list' element={
        <ProtectedRoute>
        <DonarList/>
        </ProtectedRoute>
      }/>

      <Route path='/hospital-list' element={
        <ProtectedRoute>
        <HospitalList/>
        </ProtectedRoute>
      }/>

      <Route path='/org-list' element={
        <ProtectedRoute>
        <OrgList/>
        </ProtectedRoute>
      }/>

      <Route path='/analytics' element={
        <ProtectedRoute>
        <Analytics/>
        </ProtectedRoute>
      }/>

      <Route path='/consumer' element={
        <ProtectedRoute>
        <Consumer/>
        </ProtectedRoute>
      }/>

      <Route path='/donar' element={
        <ProtectedRoute>
        <Donar/>
        </ProtectedRoute>
      }/>

      <Route path='/donation' element={
        <ProtectedRoute>
        <Donation/>
        </ProtectedRoute>
      }/>

      <Route path='/' element={
      <ProtectedRoute>
      <HomePage/>
      </ProtectedRoute>
      }/>

      <Route path='/login' element={
        <PublicRoute>
        <Login/>
        </PublicRoute>
      }/>

      <Route path='/signup' element={
        <PublicRoute>
        <Signup/>
        </PublicRoute>
      }/>
      
    </Routes>
    </>
  )
}

export default App
