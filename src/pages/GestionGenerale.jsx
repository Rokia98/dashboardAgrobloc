import { Routes, Route, Navigate } from 'react-router-dom'
import Configuration from '../components/GestionGenerale/Configuration'
import Produits from '../components/GestionGenerale/Produits'
import Utilisateurs from '../components/GestionGenerale/Utilisateurs'
import KPI from '../components/GestionGenerale/KPI'

const GestionGenerale = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gestion-generale/configuration" replace />} />
      <Route path="/configuration" element={<Configuration />} />
      <Route path="/produits" element={<Produits />} />
      <Route path="/utilisateurs" element={<Utilisateurs />} />
      <Route path="/kpi" element={<KPI />} />
    </Routes>
  )
}

export default GestionGenerale
