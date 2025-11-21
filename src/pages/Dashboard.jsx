import { TrendingUp, Users, Package, DollarSign, Activity, AlertCircle } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Utilisateurs Actifs',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Transactions du Mois',
      value: '15,847',
      change: '+8.2%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Produits Listés',
      value: '1,234',
      change: '+3.1%',
      icon: Package,
      color: 'bg-purple-500'
    },
    {
      title: 'Conflits en Cours',
      value: '23',
      change: '-5.3%',
      icon: AlertCircle,
      color: 'bg-red-500'
    }
  ]

  const recentActivities = [
    { id: 1, action: 'Nouvelle transaction', user: 'Jean Kouassi', amount: '50,000 FCFA', time: 'Il y a 5 min' },
    { id: 2, action: 'Utilisateur inscrit', user: 'Marie Diabaté', amount: '-', time: 'Il y a 12 min' },
    { id: 3, action: 'Paiement validé', user: 'Orange Money', amount: '125,000 FCFA', time: 'Il y a 23 min' },
    { id: 4, action: 'Conflit ouvert', user: 'Pierre Traoré', amount: '75,000 FCFA', time: 'Il y a 1h' },
    { id: 5, action: 'Produit ajouté', user: 'Agrotech SARL', amount: 'Riz Premium', time: 'Il y a 2h' }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} vs mois dernier
                  </p>
                </div>
                <div className={`${stat.color} p-4 rounded-lg`}>
                  <Icon className="text-white" size={28} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transactions Overview */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Aperçu des Transactions</h3>
            <Activity className="text-agrobloc-primary" size={24} />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Graphique des transactions (à implémenter)</p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Revenus Mensuels</h3>
            <TrendingUp className="text-agrobloc-primary" size={24} />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Graphique des revenus (à implémenter)</p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Activités Récentes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Utilisateur/Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant/Détail
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Heure
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {activity.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {activity.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {activity.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.time}
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

export default Dashboard
