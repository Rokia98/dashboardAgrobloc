import { useState } from 'react'
import { Plus, Search, MessageSquare, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

const Ticketing = () => {
  const [tickets] = useState([
    {
      id: 'TICK-1234',
      subject: 'Erreur de paiement Orange Money',
      category: 'Paiement',
      priority: 'Haute',
      status: 'Ouvert',
      user: 'Jean Kouassi',
      assignedTo: 'Support L2',
      createdAt: '2024-11-20T14:30:00',
      lastUpdate: '2024-11-20T15:45:00',
      messages: 5
    },
    {
      id: 'TICK-1235',
      subject: 'Transaction bloquée depuis 24h',
      category: 'Transaction',
      priority: 'Urgente',
      status: 'En cours',
      user: 'Marie Diabaté',
      assignedTo: 'Support L3',
      createdAt: '2024-11-20T10:15:00',
      lastUpdate: '2024-11-20T16:20:00',
      messages: 12
    },
    {
      id: 'TICK-1236',
      subject: 'Double facturation MTN',
      category: 'Facturation',
      priority: 'Moyenne',
      status: 'En attente',
      user: 'Pierre Traoré',
      assignedTo: 'Support L1',
      createdAt: '2024-11-19T16:45:00',
      lastUpdate: '2024-11-20T09:30:00',
      messages: 3
    },
    {
      id: 'TICK-1237',
      subject: 'Remboursement non reçu',
      category: 'Remboursement',
      priority: 'Haute',
      status: 'Résolu',
      user: 'Aminata Sow',
      assignedTo: 'Support L2',
      createdAt: '2024-11-18T11:20:00',
      lastUpdate: '2024-11-19T14:50:00',
      messages: 8,
      resolution: 'Remboursement effectué manuellement'
    }
  ])

  const getStatusBadge = (status) => {
    const badges = {
      'Ouvert': { bg: 'bg-blue-100', text: 'text-blue-800', icon: Clock },
      'En cours': { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: AlertTriangle },
      'En attente': { bg: 'bg-orange-100', text: 'text-orange-800', icon: Clock },
      'Résolu': { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      'Fermé': { bg: 'bg-gray-100', text: 'text-gray-800', icon: CheckCircle }
    }
    return badges[status] || badges['Ouvert']
  }

  const getPriorityColor = (priority) => {
    const colors = {
      'Urgente': 'text-red-600',
      'Haute': 'text-orange-600',
      'Moyenne': 'text-yellow-600',
      'Basse': 'text-blue-600'
    }
    return colors[priority] || colors['Moyenne']
  }

  const getTimeSince = (date) => {
    const now = new Date()
    const past = new Date(date)
    const diffMs = now - past
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffDays > 0) return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`
    if (diffHours > 0) return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`
    return `Il y a ${diffMins} min`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Système de Ticketing</h2>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Nouveau Ticket
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Tickets</p>
          <p className="text-2xl font-bold text-gray-900">156</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Ouverts</p>
          <p className="text-2xl font-bold text-blue-600">23</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">En cours</p>
          <p className="text-2xl font-bold text-yellow-600">15</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Résolus (7j)</p>
          <p className="text-2xl font-bold text-green-600">42</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Temps Moy. Résolution</p>
          <p className="text-2xl font-bold text-purple-600">3.5h</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un ticket..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous les statuts</option>
            <option value="open">Ouvert</option>
            <option value="processing">En cours</option>
            <option value="pending">En attente</option>
            <option value="resolved">Résolu</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Toutes les catégories</option>
            <option value="payment">Paiement</option>
            <option value="transaction">Transaction</option>
            <option value="billing">Facturation</option>
            <option value="refund">Remboursement</option>
            <option value="technical">Technique</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Toutes priorités</option>
            <option value="urgent">Urgente</option>
            <option value="high">Haute</option>
            <option value="medium">Moyenne</option>
            <option value="low">Basse</option>
          </select>
        </div>
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {tickets.map((ticket) => {
          const statusBadge = getStatusBadge(ticket.status)
          const StatusIcon = statusBadge.icon
          const priorityColor = getPriorityColor(ticket.priority)

          return (
            <div key={ticket.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{ticket.id}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusBadge.bg} ${statusBadge.text} flex items-center`}>
                      <StatusIcon size={14} className="mr-1" />
                      {ticket.status}
                    </span>
                    <span className={`text-xs font-semibold uppercase ${priorityColor}`}>
                      ⚠ {ticket.priority}
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-gray-800 mb-2">{ticket.subject}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>👤 {ticket.user}</span>
                    <span>•</span>
                    <span>📋 {ticket.category}</span>
                    <span>•</span>
                    <span>👨‍💼 Assigné à: {ticket.assignedTo}</span>
                  </div>
                </div>
              </div>

              {ticket.resolution && (
                <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm text-green-800">
                    <strong>✓ Résolution:</strong> {ticket.resolution}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MessageSquare size={16} className="mr-1" />
                    {ticket.messages} messages
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    Créé {getTimeSince(ticket.createdAt)}
                  </div>
                  <div>
                    Mis à jour {getTimeSince(ticket.lastUpdate)}
                  </div>
                </div>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Ouvrir
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-blue-50 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Tickets Urgents</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">8</p>
          <button className="text-sm text-blue-700 hover:text-blue-900">
            Voir tous →
          </button>
        </div>
        <div className="card bg-orange-50 border border-orange-200">
          <h3 className="font-semibold text-orange-900 mb-2">En Attente {'>'} 24h</h3>
          <p className="text-3xl font-bold text-orange-600 mb-2">5</p>
          <button className="text-sm text-orange-700 hover:text-orange-900">
            Voir tous →
          </button>
        </div>
        <div className="card bg-green-50 border border-green-200">
          <h3 className="font-semibold text-green-900 mb-2">Mes Tickets Assignés</h3>
          <p className="text-3xl font-bold text-green-600 mb-2">12</p>
          <button className="text-sm text-green-700 hover:text-green-900">
            Voir tous →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ticketing
