import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Ban, CheckCircle, UserCog } from 'lucide-react'

const Utilisateurs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [users] = useState([
    { id: 1, name: 'Jean Kouassi', email: 'jean.kouassi@example.com', role: 'Vendeur', status: 'Actif', joinDate: '2024-01-15', transactions: 45 },
    { id: 2, name: 'Marie Diabaté', email: 'marie.diabate@example.com', role: 'Acheteur', status: 'Actif', joinDate: '2024-02-20', transactions: 23 },
    { id: 3, name: 'Pierre Traoré', email: 'pierre.traore@example.com', role: 'Vendeur', status: 'Actif', joinDate: '2024-01-10', transactions: 67 },
    { id: 4, name: 'Aminata Sow', email: 'aminata.sow@example.com', role: 'Acheteur', status: 'Suspendu', joinDate: '2024-03-05', transactions: 12 },
    { id: 5, name: 'Ibrahim Koné', email: 'ibrahim.kone@example.com', role: 'Vendeur', status: 'Actif', joinDate: '2023-12-01', transactions: 89 }
  ])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Utilisateurs</h2>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Ajouter un Utilisateur
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="text-sm text-gray-600 mb-1">Total Utilisateurs</div>
          <div className="text-2xl font-bold text-gray-900">2,543</div>
        </div>
        <div className="card">
          <div className="text-sm text-gray-600 mb-1">Vendeurs</div>
          <div className="text-2xl font-bold text-blue-600">1,234</div>
        </div>
        <div className="card">
          <div className="text-sm text-gray-600 mb-1">Acheteurs</div>
          <div className="text-2xl font-bold text-green-600">1,289</div>
        </div>
        <div className="card">
          <div className="text-sm text-gray-600 mb-1">Suspendus</div>
          <div className="text-2xl font-bold text-red-600">20</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous les rôles</option>
            <option value="vendeur">Vendeur</option>
            <option value="acheteur">Acheteur</option>
            <option value="admin">Administrateur</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous statuts</option>
            <option value="actif">Actif</option>
            <option value="suspendu">Suspendu</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date d'inscription
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transactions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-agrobloc-primary flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'Vendeur'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(user.joinDate).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.transactions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Actif'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" title="Gérer">
                        <UserCog size={18} />
                      </button>
                      <button className="text-green-600 hover:text-green-900" title="Modifier">
                        <Edit size={18} />
                      </button>
                      {user.status === 'Actif' ? (
                        <button className="text-orange-600 hover:text-orange-900" title="Suspendre">
                          <Ban size={18} />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900" title="Activer">
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900" title="Supprimer">
                        <Trash2 size={18} />
                      </button>
                    </div>
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

export default Utilisateurs
