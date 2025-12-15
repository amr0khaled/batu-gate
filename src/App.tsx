import { BrowserRouter, Route, Routes } from 'react-router'
import IndexPage from './pages'
import OverviewPage from './pages/overview'
import DashboardLayout from './components/dashboard-layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
