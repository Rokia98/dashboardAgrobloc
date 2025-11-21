import { useState } from 'react'
import { AlertCircle, Eye, CheckCircle, XCircle, MessageSquare } from 'lucide-react'

const Conflits = () => {
  const [conflicts] = useState([
    {
      id: 'CONF-001',
      transactionId: 'TRX-001234',
      buyer: 'Jean Kouassi',
      seller: 'Agrotech SARL',
      amount: 125000,
      reason: 'Produit non conforme',
      status: 'En cours',
      priority: 'Haute',
      openDate: '2024-11-18',
      messages: 8
    },
    {
      id: 'CONF-002',
      transactionId: 'TRX-001198',
      buyer: 'Marie Diabaté',
      seller: 'Bio Ferme',
      amount: 75000,
      reason: 'Livraison incomplète',
      status: 'En attente',
      priority: 'Moyenne',
      openDate: '2024-11-19',
      messages: 3
    },
    {
      id: 'CONF-003',
      transactionId: 'TRX-001167',
      buyer: 'Pierre Traoré',
      seller: 'FarmCo',
      amount: 200000,
      reason: 'Retard de livraison',
      status: 'Résolu',
      priority: 'Basse',
      openDate: '2024-11-10',
      messages: 15,
      resolution: 'Remboursement partiel'
    }
  ])

  const getStatusBadge = (status) => {
    const badges = {
      'En cours': { bg: 'bg-blue-100', text: 'text-blue-800' },
      'En attente': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'Résolu': { bg: 'bg-green-100', text: 'text-green-800' },
      'Fermé': { bg: 'bg-gray-100', text: 'text-gray-800' }
    }
    return badges[status] || badges['En attente']
  }

  const getPriorityBadge = (priority) => {
    const badges = {
      'Haute': { bg: 'bg-red-100', text: 'text-red-800' },
      'Moyenne': { bg: 'bg-orange-100', text: 'text-orange-800' },
      'Basse': { bg: 'bg-blue-100', text: 'text-blue-800' }
    }
    return badges[priority] || badges['Moyenne']
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Conflits</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Conflits Actifs</p>
          <p className="text-2xl font-bold text-red-600">23</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">En Cours de Traitement</p>
          <p className="text-2xl font-bold text-blue-600">15</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Résolus (Mois)</p>
          <p className="text-2xl font-bold text-green-600">87</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Temps Moyen Résolution</p>
          <p className="text-2xl font-bold text-purple-600">4.2 jours</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="processing">En cours</option>
            <option value="resolved">Résolu</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Toutes les priorités</option>
            <option value="high">Haute</option>
            <option value="medium">Moyenne</option>
            <option value="low">Basse</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous les types</option>
            <option value="product">Produit non conforme</option>
            <option value="delivery">Problème de livraison</option>
            <option value="payment">Problème de paiement</option>
            <option value="other">Autre</option>
          </select>
        </div>
      </div>

      {/* Conflicts List */}
      <div className="space-y-4">
        {conflicts.map((conflict) => {
          const statusBadge = getStatusBadge(conflict.status)
          const priorityBadge = getPriorityBadge(conflict.priority)
          
          return (
            <div key={conflict.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <AlertCircle className="text-red-600" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{conflict.id}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${priorityBadge.bg} ${priorityBadge.text}`}>
                        {conflict.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Transaction: {conflict.transactionId}</p>
                    <p className="text-sm text-gray-600">Raison: {conflict.reason}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusBadge.bg} ${statusBadge.text}`}>
                  {conflict.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Acheteur</p>
                  <p className="text-sm font-medium text-gray-900">{conflict.buyer}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Vendeur</p>
                  <p className="text-sm font-medium text-gray-900">{conflict.seller}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Montant</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {conflict.amount.toLocaleString()} FCFA
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Date d'ouverture</p>
                  <p className="text-sm text-gray-900">
                    {new Date(conflict.openDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>

              {conflict.resolution && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm text-green-800">
                    <strong>Résolution:</strong> {conflict.resolution}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <MessageSquare size={16} className="mr-1" />
                  {conflict.messages} messages
                </div>
                <div className="flex space-x-2">
                  {conflict.status !== 'Résolu' && (
                    <>
                      <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
                        <CheckCircle size={16} className="mr-1" />
                        Résoudre
                      </button>
                      <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center">
                        <XCircle size={16} className="mr-1" />
                        Rejeter
                      </button>
                    </>
                  )}
                  <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                    <Eye size={16} className="mr-1" />
                    Détails
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Conflits
