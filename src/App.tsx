import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AdminDashboard from './layouts/AdminDashboard'
import Dashboard from './pages/Dashboard/Dashboard'
import Teams from './pages/Teams/Teams'
import Contacts from './pages/Contacts/Contacts'
import FAQ from './pages/FAQ/FAQ'
import Invoices from './pages/Invoices/Invoices'
import Calendar from './pages/Calendar/Calendar'
import BarChart from './pages/BarChart/BarChart'
import PieChart from './pages/PieChart/PieChart'
import LineChart from './pages/LineChart/LineChart'
import GeoChart from './pages/Geography/GeoChart'
import Form from './pages/Form/Form'

function App() {
const router = createBrowserRouter([
  {
    path:"/",element: <AdminDashboard/>, children:[
      {path:"/",element: <Dashboard/>},
      {path:"/team",element: <Teams/>},
      {path:"/contacts",element: <Contacts/>},
      {path:"/faq",element: <FAQ/>},
      {path:"/invoices",element: <Invoices/>},
      {path:"/form",element: <Form/>},
      {path:"/calendar",element: <Calendar/>},
      {path:"/bar",element: <BarChart/>},
      {path:"/pie",element: <PieChart/>},
      {path:"/line",element: <LineChart/>},
      {path:"/geography",element: <GeoChart/>},
      {path:'*', element: <Dashboard/>}
    ]
  }
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
