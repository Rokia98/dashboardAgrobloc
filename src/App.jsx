import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import GestionGenerale from './pages/GestionGenerale'
import GestionEscrow from './pages/GestionEscrow'
import BlockchainTracabilite from './pages/BlockchainTracabilite'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gestion-generale/*" element={<GestionGenerale />} />
          <Route path="/gestion-escrow/*" element={<GestionEscrow />} />
          <Route path="/blockchain-tracabilite/*" element={<BlockchainTracabilite />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
