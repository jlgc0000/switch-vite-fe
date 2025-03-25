import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import PlanPage, {planLoader} from './pages/PlanPage'
/*import PromosPage from './pages/PromosPage'
import HelpPage from './pages/HelpPage'
import AboutUs from './pages/AboutUs'
import PlansPage from './pages/PlansPage'*/
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
   {/*<Route path='/promos' element={<PromosPage />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/plans' element={<PlansPage />} />
    <Route path='/promos' element={<PromosPage />} />
    <Route path='/help' element={<HelpPage />} />*/}
    <Route path="plan/:id" element={<PlanPage />} loader={planLoader} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
)
)

const App = () => {
  return ( <RouterProvider router={router} /> )
}

export default App;
