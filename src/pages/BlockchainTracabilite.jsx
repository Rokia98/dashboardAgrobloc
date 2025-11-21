import { Routes, Route, Navigate } from 'react-router-dom'
import Blockchain from '../components/BlockchainTracabilite/Blockchain'
import Tracabilite from '../components/BlockchainTracabilite/Tracabilite'

const BlockchainTracabilite = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blockchain-tracabilite/blockchain" replace />} />
      <Route path="/blockchain" element={<Blockchain />} />
      <Route path="/tracabilite" element={<Tracabilite />} />
    </Routes>
  )
}

export default BlockchainTracabilite
