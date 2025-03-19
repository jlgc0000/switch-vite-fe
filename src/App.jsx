import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import PromosPage from './pages/PromosPage'
import HelpPage from './pages/HelpPage'
import CoveragePage from './pages/CoveragePage'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import PlansPage from './pages/PlansPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/promos' element={<PromosPage />} />
    <Route path='/coverage' element={<CoveragePage />} />
    <Route path='/plans' element={<PlansPage />} />
    <Route path='/help' element={<HelpPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
)
)

const App = () => {
  return ( <RouterProvider router={router} /> )
}

export default App;
