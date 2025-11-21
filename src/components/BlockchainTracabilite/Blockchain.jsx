import { useState } from 'react'
import { Activity, Box, Link2, Database, Clock, CheckCircle } from 'lucide-react'

const Blockchain = () => {
  const [blockchainStats] = useState({
    totalBlocks: 45678,
    totalTransactions: 123456,
    averageBlockTime: 12.5,
    networkHashRate: '1.2 TH/s',
    activeNodes: 48,
    pendingTransactions: 23
  })

  const [recentBlocks] = useState([
    {
      height: 45678,
      hash: '0x7a8b...3f9c',
      timestamp: '2024-11-20T16:45:23',
      transactions: 15,
      size: '2.3 KB',
      miner: 'Node-12',
      difficulty: 'High'
    },
    {
      height: 45677,
      hash: '0x9c4d...8a2b',
      timestamp: '2024-11-20T16:45:11',
      transactions: 12,
      size: '1.9 KB',
      miner: 'Node-08',
      difficulty: 'High'
    },
    {
      height: 45676,
      hash: '0x3e7f...6d1c',
      timestamp: '2024-11-20T16:44:58',
      transactions: 18,
      size: '2.7 KB',
      miner: 'Node-05',
      difficulty: 'Medium'
    },
    {
      height: 45675,
      hash: '0x1b2c...4e8a',
      timestamp: '2024-11-20T16:44:45',
      transactions: 10,
      size: '1.5 KB',
      miner: 'Node-12',
      difficulty: 'High'
    }
  ])

  const [nodes] = useState([
    { id: 'Node-01', location: 'Abidjan, CI', status: 'Actif', uptime: '99.9%', blocks: 12345 },
    { id: 'Node-05', location: 'Dakar, SN', status: 'Actif', uptime: '99.7%', blocks: 12340 },
    { id: 'Node-08', location: 'Lagos, NG', status: 'Actif', uptime: '99.8%', blocks: 12338 },
    { id: 'Node-12', location: 'Accra, GH', status: 'Actif', uptime: '99.9%', blocks: 12342 },
    { id: 'Node-15', location: 'Lomé, TG', status: 'En maintenance', uptime: '98.5%', blocks: 12330 }
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Blockchain Agrobloc</h2>
        <div className="flex items-center space-x-2">
          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full flex items-center">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Réseau Actif</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <Box className="text-blue-600" size={24} />
          </div>
          <p className="text-xs text-gray-600 uppercase mb-1">Total Blocs</p>
          <p className="text-2xl font-bold text-gray-900">
            {blockchainStats.totalBlocks.toLocaleString()}
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <Activity className="text-green-600" size={24} />
          </div>
          <p className="text-xs text-gray-600 uppercase mb-1">Transactions</p>
          <p className="text-2xl font-bold text-gray-900">
            {blockchainStats.totalTransactions.toLocaleString()}
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <Clock className="text-purple-600" size={24} />
          </div>
          <p className="text-xs text-gray-600 uppercase mb-1">Temps Moy. Bloc</p>
          <p className="text-2xl font-bold text-gray-900">
            {blockchainStats.averageBlockTime}s
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <Database className="text-orange-600" size={24} />
          </div>
          <p className="text-xs text-gray-600 uppercase mb-1">Hash Rate</p>
          <p className="text-2xl font-bold text-gray-900">
            {blockchainStats.networkHashRate}
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <Link2 className="text-indigo-600" size={24} />
          </div>
          <p className="text-xs text-gray-600 uppercase mb-1">Nœuds Actifs</p>
          <p className="text-2xl font-bold text-gray-900">
            {blockchainStats.activeNodes}
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="text-yellow-600" size={24} />
          </div>
          <p className="text-xs text-gray-600 uppercase mb-1">TX En Attente</p>
          <p className="text-2xl font-bold text-gray-900">
            {blockchainStats.pendingTransactions}
          </p>
        </div>
      </div>

      {/* Recent Blocks */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Blocs Récents</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            Voir tous les blocs →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Hauteur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Hash
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Transactions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Taille
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Mineur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Difficulté
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBlocks.map((block) => (
                <tr key={block.height} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                      #{block.height}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <code className="text-sm text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {block.hash}
                    </code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(block.timestamp).toLocaleString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {block.transactions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {block.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {block.miner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      block.difficulty === 'High' ? 'bg-red-100 text-red-800' :
                      block.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {block.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Network Nodes */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Nœuds du Réseau</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node) => (
            <div key={node.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{node.id}</h4>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  node.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {node.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">📍 Localisation</span>
                  <span className="text-gray-900">{node.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">⏱ Uptime</span>
                  <span className="text-green-600 font-semibold">{node.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">📦 Blocs</span>
                  <span className="text-gray-900">{node.blocks.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blockchain Activity Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Activité de la Blockchain</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Graphique d'activité blockchain (à implémenter)</p>
        </div>
      </div>
    </div>
  )
}

export default Blockchain
