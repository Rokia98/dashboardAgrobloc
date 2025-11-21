import { useState } from 'react'
import { Search, MapPin, Package, TrendingUp, Eye, QrCode, FileText } from 'lucide-react'

const Tracabilite = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [products] = useState([
    {
      id: 'PROD-2024-001',
      name: 'Riz Premium Bio',
      category: 'Céréales',
      origin: 'Korhogo, Côte d\'Ivoire',
      producer: 'Coopérative Rizicole du Nord',
      certifications: ['Bio', 'Commerce Équitable'],
      blockchain: '0x8a9b...3c4d',
      steps: 8,
      currentStatus: 'En transit',
      lastUpdate: '2024-11-20T14:30:00'
    },
    {
      id: 'PROD-2024-002',
      name: 'Cacao Premium',
      category: 'Cacao',
      origin: 'San Pedro, Côte d\'Ivoire',
      producer: 'SCOOP Cacao Excellence',
      certifications: ['Bio', 'Rainforest Alliance'],
      blockchain: '0x1f2e...7g8h',
      steps: 12,
      currentStatus: 'En stockage',
      lastUpdate: '2024-11-20T10:15:00'
    },
    {
      id: 'PROD-2024-003',
      name: 'Anacarde Brut',
      category: 'Fruits à coque',
      origin: 'Bondoukou, Côte d\'Ivoire',
      producer: 'Union des Producteurs d\'Anacarde',
      certifications: ['Commerce Équitable'],
      blockchain: '0x9k3l...2m1n',
      steps: 6,
      currentStatus: 'Livré',
      lastUpdate: '2024-11-19T16:45:00'
    }
  ])

  const [traceHistory] = useState([
    {
      step: 1,
      title: 'Production',
      location: 'Korhogo, CI',
      date: '2024-11-10T08:00:00',
      actor: 'Coopérative Rizicole du Nord',
      details: 'Récolte du riz bio certifié',
      verified: true,
      blockchainHash: '0x1a2b...3c4d'
    },
    {
      step: 2,
      title: 'Contrôle Qualité',
      location: 'Korhogo, CI',
      date: '2024-11-11T10:30:00',
      actor: 'Bureau Veritas',
      details: 'Certification bio et tests de qualité',
      verified: true,
      blockchainHash: '0x5e6f...7g8h'
    },
    {
      step: 3,
      title: 'Transformation',
      location: 'Bouaké, CI',
      date: '2024-11-13T14:00:00',
      actor: 'Usine de Transformation AgriPlus',
      details: 'Nettoyage, séchage et conditionnement',
      verified: true,
      blockchainHash: '0x9i0j...1k2l'
    },
    {
      step: 4,
      title: 'Stockage',
      location: 'Abidjan, CI',
      date: '2024-11-15T09:00:00',
      actor: 'Entrepôt AgroStock',
      details: 'Stockage en conditions optimales',
      verified: true,
      blockchainHash: '0x3m4n...5o6p'
    },
    {
      step: 5,
      title: 'Transport',
      location: 'En route vers Dakar',
      date: '2024-11-18T07:00:00',
      actor: 'TransAfrica Logistics',
      details: 'Transport par camion réfrigéré',
      verified: true,
      blockchainHash: '0x7q8r...9s0t'
    },
    {
      step: 6,
      title: 'Contrôle Douanier',
      location: 'Frontière CI-SN',
      date: '2024-11-19T15:30:00',
      actor: 'Douanes CEDEAO',
      details: 'Vérification documents et produit',
      verified: true,
      blockchainHash: '0x1u2v...3w4x'
    }
  ])

  const getStatusBadge = (status) => {
    const badges = {
      'En transit': { bg: 'bg-blue-100', text: 'text-blue-800' },
      'En stockage': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'Livré': { bg: 'bg-green-100', text: 'text-green-800' },
      'En production': { bg: 'bg-purple-100', text: 'text-purple-800' }
    }
    return badges[status] || badges['En transit']
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Système de Traçabilité</h2>
        <button className="btn-primary flex items-center">
          <QrCode size={18} className="mr-2" />
          Scanner un QR Code
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <Package className="text-blue-600" size={24} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Produits Tracés</p>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
        </div>
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <MapPin className="text-green-600" size={24} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Points de Traçabilité</p>
          <p className="text-2xl font-bold text-gray-900">156</p>
        </div>
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <FileText className="text-purple-600" size={24} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Certifications Actives</p>
          <p className="text-2xl font-bold text-gray-900">89</p>
        </div>
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="text-orange-600" size={24} />
          </div>
          <p className="text-sm text-gray-600 mb-1">Taux de Traçabilité</p>
          <p className="text-2xl font-bold text-gray-900">98.5%</p>
        </div>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher par ID produit, blockchain hash, producteur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => {
          const statusBadge = getStatusBadge(product.currentStatus)
          return (
            <div key={product.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">ID: {product.id}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusBadge.bg} ${statusBadge.text}`}>
                  {product.currentStatus}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Package className="text-gray-400 mr-2 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-gray-500">Catégorie</p>
                    <p className="text-sm font-medium text-gray-900">{product.category}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-gray-400 mr-2 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-gray-500">Origine</p>
                    <p className="text-sm font-medium text-gray-900">{product.origin}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-gray-400 mr-2 mt-0.5">👨‍🌾</div>
                  <div>
                    <p className="text-xs text-gray-500">Producteur</p>
                    <p className="text-sm font-medium text-gray-900">{product.producer}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Blockchain Hash</p>
                  <code className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {product.blockchain}
                  </code>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  {product.steps} étapes • Mis à jour {new Date(product.lastUpdate).toLocaleDateString('fr-FR')}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm">
                  <Eye size={16} className="mr-1" />
                  Voir traçabilité
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Trace Timeline */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Historique de Traçabilité - {products[0].name}
        </h3>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {traceHistory.map((item) => (
              <div key={item.step} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  item.verified ? 'bg-green-600' : 'bg-gray-400'
                } border-4 border-white z-10`}></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="card bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-base font-semibold text-gray-900">
                            {item.step}. {item.title}
                          </h4>
                          {item.verified && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded flex items-center">
                              ✓ Vérifié
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {item.location}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleString('fr-FR')}
                      </p>
                    </div>

                    <p className="text-sm text-gray-800 mb-2">{item.details}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Acteur:</strong> {item.actor}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <code className="text-xs text-blue-600 bg-white px-2 py-1 rounded border border-blue-200">
                        {item.blockchainHash}
                      </code>
                      <button className="text-xs text-blue-600 hover:text-blue-800">
                        Voir sur blockchain →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracabilite
