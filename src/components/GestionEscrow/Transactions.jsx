import { useState } from 'react'
import { Search, Download, Filter, Eye, CheckCircle, XCircle, Clock } from 'lucide-react'

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [transactions] = useState([
    {
      id: 'TRX-001234',
      buyer: 'Jean Kouassi',
      seller: 'Agrotech SARL',
      amount: 125000,
      fees: 3750,
      provider: 'Orange Money',
      status: 'Complété',
      date: '2024-11-20T14:30:00',
      type: 'Achat'
    },
    {
      id: 'TRX-001235',
      buyer: 'Marie Diabaté',
      seller: 'Bio Ferme',
      amount: 75000,
      fees: 2250,
      provider: 'MTN Money',
      status: 'En attente',
      date: '2024-11-20T12:15:00',
      type: 'Achat'
    },
    {
      id: 'TRX-001236',
      buyer: 'Pierre Traoré',
      seller: 'FarmCo',
      amount: 200000,
      fees: 6000,
      provider: 'Wave',
      status: 'Complété',
      date: '2024-11-20T10:45:00',
      type: 'Achat'
    },
    {
      id: 'TRX-001237',
      buyer: 'Aminata Sow',
      seller: 'Tropical Foods',
      amount: 50000,
      fees: 1500,
      provider: 'Moov Money',
      status: 'Échoué',
      date: '2024-11-20T09:20:00',
      type: 'Achat'
    },
    {
      id: 'TRX-001238',
      buyer: 'Ibrahim Koné',
      seller: 'Agro Plus',
      amount: 180000,
      fees: 5400,
      provider: 'Orange Money',
      status: 'En cours',
      date: '2024-11-20T08:00:00',
      type: 'Achat'
    }
  ])

  const stats = [
    { label: 'Total Transactions', value: '15,847', color: 'text-blue-600' },
    { label: 'Volume Total', value: '1,245,890,000 FCFA', color: 'text-green-600' },
    { label: 'Frais Collectés', value: '37,376,700 FCFA', color: 'text-purple-600' },
    { label: 'Taux de Succès', value: '96.3%', color: 'text-orange-600' }
  ]

  const getStatusBadge = (status) => {
    const badges = {
      'Complété': { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      'En attente': { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
      'En cours': { bg: 'bg-blue-100', text: 'text-blue-800', icon: Clock },
      'Échoué': { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle }
    }
    const badge = badges[status] || badges['En attente']
    const Icon = badge.icon
    return (
      <span className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${badge.bg} ${badge.text}`}>
        <Icon size={14} className="mr-1" />
        {status}
      </span>
    )
  }

  const filteredTransactions = transactions.filter(tx =>
    tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.seller.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Transactions</h2>
        <button className="btn-primary flex items-center">
          <Download size={18} className="mr-2" />
          Exporter
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="card">
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par ID, acheteur, vendeur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous les statuts</option>
            <option value="completed">Complété</option>
            <option value="pending">En attente</option>
            <option value="processing">En cours</option>
            <option value="failed">Échoué</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous les fournisseurs</option>
            <option value="orange">Orange Money</option>
            <option value="mtn">MTN Money</option>
            <option value="moov">Moov Money</option>
            <option value="wave">Wave</option>
          </select>
          <button className="btn-secondary flex items-center">
            <Filter size={18} className="mr-2" />
            Filtres avancés
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acheteur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendeur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frais
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fournisseur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{tx.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tx.buyer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tx.seller}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {tx.amount.toLocaleString()} FCFA
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {tx.fees.toLocaleString()} FCFA
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tx.provider}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(tx.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(tx.date).toLocaleString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transactions
