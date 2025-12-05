import { useState, useEffect } from 'react'
import { Plus, Search, Edit, Trash2, Ban, CheckCircle, UserCog } from 'lucide-react'
import { getUserInfo, getUsersList } from '../../services/userService'
import { deleteUser } from '../../services/userService'

const Utilisateurs = () => {
    const [deletingId, setDeletingId] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageSize] = useState(10)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [hasMore, setHasMore] = useState(false)
    const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const token = localStorage.getItem('token')
        let data = await getUsersList(token, page, pageSize)
        let usersList = data.users || []
        const totalCount = data.total || usersList.length
        if (search) {
          usersList = usersList.filter(u =>
            (u.nom && u.nom.toLowerCase().includes(search.toLowerCase())) ||
            (u.email && u.email.toLowerCase().includes(search.toLowerCase()))
          )
        }
        setUsers(usersList)
        setTotal(totalCount)
        setHasMore(page * pageSize < totalCount)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [page, pageSize, search])

  if (loading) return <div className="p-8 text-center">Chargement des utilisateurs...</div>
  if (error) return <div className="p-8 text-center text-red-600">Erreur : {error}</div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Utilisateurs</h2>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Ajouter un Utilisateur
        </button>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher par nom ou email..."
            value={search}
            onChange={e => { setSearch(e.target.value); setOffset(0); }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'inscription</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-agrobloc-primary flex items-center justify-center text-white font-bold">
                        {(user.nom || user.email || '').charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.nom}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.numero_tel}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.adresse}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.profil_id === 1
                        ? 'bg-blue-100 text-blue-800'
                        : user.profil_id === 2
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {user.profil_id === 1 ? 'Vendeur' : user.profil_id === 2 ? 'Acheteur' : 'Admin'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR') : ''}
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
                      <button
                        className="text-red-600 hover:text-red-900"
                        title="Supprimer"
                        disabled={deletingId === user.id}
                        onClick={async () => {
                          if (window.confirm('Confirmer la suppression de cet utilisateur ?')) {
                            setDeletingId(user.id)
                            try {
                              const token = localStorage.getItem('token')
                              await deleteUser(user.id, token)
                              // Rafraîchir la liste
                              setUsers(users.filter(u => u.id !== user.id))
                            } catch (err) {
                              setError(err.message)
                            } finally {
                              setDeletingId(null)
                            }
                          }
                        }}
                      >
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

      <div className="flex justify-between items-center mt-4">
        <button
          className="btn-secondary"
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          Précédent
        </button>
        <span className="text-gray-600">Page {page} / {Math.ceil(total / pageSize)}</span>
        <button
          className="btn-secondary"
          onClick={() => setPage(page + 1)}
          disabled={!hasMore}
        >
          Suivant
        </button>
      </div>
    </div>
  )
}

export default Utilisateurs
