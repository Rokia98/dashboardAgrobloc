import { useState } from 'react'
import { Save, DollarSign, TrendingUp } from 'lucide-react'

const Frais = () => {
  const [fees, setFees] = useState({
    transactionFeePercent: 3.0,
    minimumFee: 100,
    maximumFee: 10000,
    withdrawalFee: 2.5,
    escrowFee: 1.5,
    conflictResolutionFee: 5000,
    urgentProcessingFee: 2000
  })

  const [thirdPartyPayments, setThirdPartyPayments] = useState([
    { id: 1, service: 'Services Cloud (AWS)', amount: 125000, frequency: 'Mensuel', status: 'Payé', nextPayment: '2024-12-01' },
    { id: 2, service: 'API Gateway', amount: 45000, frequency: 'Mensuel', status: 'Payé', nextPayment: '2024-12-01' },
    { id: 3, service: 'SMS Provider', amount: 80000, frequency: 'Mensuel', status: 'En attente', nextPayment: '2024-11-25' },
    { id: 4, service: 'Email Service', amount: 25000, frequency: 'Mensuel', status: 'Payé', nextPayment: '2024-12-01' }
  ])

  const revenueStats = [
    { label: 'Frais Transactions (Mois)', value: '3,756,000 FCFA', change: '+12.5%' },
    { label: 'Frais Escrow (Mois)', value: '1,234,500 FCFA', change: '+8.3%' },
    { label: 'Frais Résolution Conflits', value: '125,000 FCFA', change: '-5.2%' },
    { label: 'Total Revenus (Mois)', value: '5,115,500 FCFA', change: '+10.8%' }
  ]

  const handleSaveFees = () => {
    alert('Configuration des frais sauvegardée!')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Frais Agrobloc</h2>
        <button onClick={handleSaveFees} className="btn-primary flex items-center">
          <Save size={18} className="mr-2" />
          Sauvegarder
        </button>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {revenueStats.map((stat, idx) => (
          <div key={idx} className="card">
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Fee Configuration */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <DollarSign size={20} className="mr-2 text-agrobloc-primary" />
          Configuration des Frais
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais de Transaction (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={fees.transactionFeePercent}
              onChange={(e) => setFees({...fees, transactionFeePercent: parseFloat(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Pourcentage appliqué sur chaque transaction</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais Minimum (FCFA)
            </label>
            <input
              type="number"
              value={fees.minimumFee}
              onChange={(e) => setFees({...fees, minimumFee: parseInt(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Frais minimum par transaction</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais Maximum (FCFA)
            </label>
            <input
              type="number"
              value={fees.maximumFee}
              onChange={(e) => setFees({...fees, maximumFee: parseInt(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Frais maximum par transaction</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais de Retrait (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={fees.withdrawalFee}
              onChange={(e) => setFees({...fees, withdrawalFee: parseFloat(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Frais sur les retraits de fonds</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais Escrow (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={fees.escrowFee}
              onChange={(e) => setFees({...fees, escrowFee: parseFloat(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Frais de gestion escrow</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais Résolution Conflit (FCFA)
            </label>
            <input
              type="number"
              value={fees.conflictResolutionFee}
              onChange={(e) => setFees({...fees, conflictResolutionFee: parseInt(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Frais fixe par résolution de conflit</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais Traitement Urgent (FCFA)
            </label>
            <input
              type="number"
              value={fees.urgentProcessingFee}
              onChange={(e) => setFees({...fees, urgentProcessingFee: parseInt(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Frais pour traitement prioritaire</p>
          </div>
        </div>
      </div>

      {/* Third Party Payments */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Paiements Services Tiers</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fréquence</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prochain Paiement</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {thirdPartyPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.amount.toLocaleString()} FCFA</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.frequency}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      payment.status === 'Payé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(payment.nextPayment).toLocaleDateString('fr-FR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUp size={20} className="mr-2 text-agrobloc-primary" />
          Évolution des Revenus
        </h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Graphique d'évolution des revenus (à implémenter)</p>
        </div>
      </div>
    </div>
  )
}

export default Frais
