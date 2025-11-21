import { Routes, Route, Navigate } from 'react-router-dom'
import Transactions from '../components/GestionEscrow/Transactions'
import Fournisseurs from '../components/GestionEscrow/Fournisseurs'
import Frais from '../components/GestionEscrow/Frais'
import PaiementsMassifs from '../components/GestionEscrow/PaiementsMassifs'
import Conflits from '../components/GestionEscrow/Conflits'
import Ticketing from '../components/GestionEscrow/Ticketing'

const GestionEscrow = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gestion-escrow/transactions" replace />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/fournisseurs" element={<Fournisseurs />} />
      <Route path="/frais" element={<Frais />} />
      <Route path="/paiements-massifs" element={<PaiementsMassifs />} />
      <Route path="/conflits" element={<Conflits />} />
      <Route path="/ticketing" element={<Ticketing />} />
    </Routes>
  )
}

export default GestionEscrow
