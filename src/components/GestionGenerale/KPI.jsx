import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Activity } from 'lucide-react'

const KPI = () => {
  const kpiData = [
    {
      title: 'Taux de Conversion',
      value: '3.24%',
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Utilisateurs Actifs Mensuels',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Taux d\'Abandon Panier',
      value: '45.2%',
      change: '-3.1%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Revenu Moyen par Utilisateur',
      value: '45,650 FCFA',
      change: '+5.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Temps Moyen de Transaction',
      value: '4.2 min',
      change: '-1.2 min',
      trend: 'down',
      icon: Activity,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      title: 'Taux de Satisfaction',
      value: '92.5%',
      change: '+2.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ]

  const detailedMetrics = [
    {
      category: 'Engagement Utilisateur',
      metrics: [
        { name: 'Taux de rétention (30j)', value: '68%', status: 'good' },
        { name: 'Sessions par utilisateur', value: '4.8', status: 'good' },
        { name: 'Durée moyenne session', value: '12.5 min', status: 'normal' },
        { name: 'Taux de rebond', value: '32%', status: 'warning' }
      ]
    },
    {
      category: 'Performance Transactions',
      metrics: [
        { name: 'Taux de réussite', value: '96.3%', status: 'good' },
        { name: 'Délai moyen de paiement', value: '2.1 min', status: 'good' },
        { name: 'Taux d\'erreur', value: '1.2%', status: 'good' },
        { name: 'Montant moyen transaction', value: '65,450 FCFA', status: 'normal' }
      ]
    },
    {
      category: 'Qualité de Service',
      metrics: [
        { name: 'Temps de réponse support', value: '< 2h', status: 'good' },
        { name: 'Taux de résolution 1er contact', value: '78%', status: 'normal' },
        { name: 'Note satisfaction client', value: '4.6/5', status: 'good' },
        { name: 'NPS (Net Promoter Score)', value: '62', status: 'good' }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Indicateurs de Performance (KPI)</h2>
        <div className="flex space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option>7 derniers jours</option>
            <option>30 derniers jours</option>
            <option>3 derniers mois</option>
            <option>12 derniers mois</option>
          </select>
          <button className="btn-primary">Exporter</button>
        </div>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map((kpi, idx) => {
          const Icon = kpi.icon
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown
          return (
            <div key={idx} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className={`${kpi.bgColor} p-2 rounded-lg mr-3`}>
                      <Icon className={kpi.color} size={24} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{kpi.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
                  <div className={`flex items-center mt-2 text-sm ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendIcon size={16} className="mr-1" />
                    <span>{kpi.change} vs période précédente</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {detailedMetrics.map((section, idx) => (
          <div key={idx} className="card">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.category}</h3>
            <div className="space-y-4">
              {section.metrics.map((metric, metricIdx) => (
                <div key={metricIdx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{metric.name}</p>
                    <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    metric.status === 'good' ? 'bg-green-100 text-green-800' :
                    metric.status === 'warning' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {metric.status === 'good' ? 'Bon' : metric.status === 'warning' ? 'Attention' : 'Normal'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Évolution des Indicateurs Clés</h3>
        <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Graphique d'évolution des KPI (à implémenter avec Chart.js ou Recharts)</p>
        </div>
      </div>
    </div>
  )
}

export default KPI
