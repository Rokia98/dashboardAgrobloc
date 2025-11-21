import { useState } from 'react'
import { Plus, Edit, Settings, TrendingUp, Activity } from 'lucide-react'

const Fournisseurs = () => {
  const [providers] = useState([
    {
      id: 1,
      name: 'Orange Money',
      logo: '🟠',
      status: 'Actif',
      apiKey: 'OM-API-****-****-****',
      transactionVolume: 8500000,
      transactionCount: 4520,
      successRate: 98.5,
      fees: 3
    },
    {
      id: 2,
      name: 'MTN Money',
      logo: '🟡',
      status: 'Actif',
      apiKey: 'MTN-API-****-****-****',
      transactionVolume: 6200000,
      transactionCount: 3280,
      successRate: 97.2,
      fees: 3
    },
    {
      id: 3,
      name: 'Moov Money',
      logo: '🔵',
      status: 'Actif',
      apiKey: 'MV-API-****-****-****',
      transactionVolume: 4100000,
      transactionCount: 2150,
      successRate: 96.8,
      fees: 3
    },
    {
      id: 4,
      name: 'Wave',
      logo: '💙',
      status: 'Actif',
      apiKey: 'WAVE-API-****-****-****',
      transactionVolume: 3800000,
      transactionCount: 1950,
      successRate: 99.1,
      fees: 1
    }
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Fournisseurs de Paiement</h2>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Ajouter un Fournisseur
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Fournisseurs</p>
          <p className="text-2xl font-bold text-gray-900">{providers.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Volume Total</p>
          <p className="text-2xl font-bold text-green-600">
            {providers.reduce((acc, p) => acc + p.transactionVolume, 0).toLocaleString()} FCFA
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Transactions Totales</p>
          <p className="text-2xl font-bold text-blue-600">
            {providers.reduce((acc, p) => acc + p.transactionCount, 0).toLocaleString()}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Taux Succès Moyen</p>
          <p className="text-2xl font-bold text-purple-600">
            {(providers.reduce((acc, p) => acc + p.successRate, 0) / providers.length).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Providers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {providers.map((provider) => (
          <div key={provider.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="text-4xl mr-4">{provider.logo}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                  <p className="text-sm text-gray-600">{provider.apiKey}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <Settings size={18} />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                  <Edit size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Volume</p>
                <p className="text-lg font-semibold text-gray-900">
                  {provider.transactionVolume.toLocaleString()} FCFA
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Transactions</p>
                <p className="text-lg font-semibold text-gray-900">
                  {provider.transactionCount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Taux de Succès</p>
                <p className="text-lg font-semibold text-green-600 flex items-center">
                  {provider.successRate}%
                  <TrendingUp size={16} className="ml-1" />
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Frais</p>
                <p className="text-lg font-semibold text-purple-600">
                  {provider.fees}%
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                provider.status === 'Actif'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {provider.status}
              </span>
              <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <Activity size={16} className="mr-1" />
                Voir les détails
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance des Fournisseurs</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Graphique comparatif des performances (à implémenter)</p>
        </div>
      </div>

      {/* API Configuration */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuration API Globale</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeout de Transaction (secondes)
            </label>
            <input
              type="number"
              defaultValue={120}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de Tentatives Max
            </label>
            <input
              type="number"
              defaultValue={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Webhook URL
            </label>
            <input
              type="url"
              defaultValue="https://api.agrobloc.com/webhook/payment"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mode Test
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
              <option value="production">Production</option>
              <option value="test">Test/Sandbox</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button className="btn-primary">Sauvegarder la Configuration</button>
        </div>
      </div>
    </div>
  )
}

export default Fournisseurs
