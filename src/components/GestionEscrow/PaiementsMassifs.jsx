import { useState } from 'react'
import { Upload, Send, CheckCircle, Download, AlertCircle } from 'lucide-react'

const PaiementsMassifs = () => {
  const [batchPayments] = useState([
    {
      id: 'BATCH-001',
      name: 'Paiement Vendeurs - Novembre 2024',
      totalAmount: 12500000,
      recipientCount: 156,
      status: 'Complété',
      date: '2024-11-15',
      successCount: 154,
      failedCount: 2
    },
    {
      id: 'BATCH-002',
      name: 'Remboursements Clients',
      totalAmount: 3450000,
      recipientCount: 45,
      status: 'En cours',
      date: '2024-11-20',
      successCount: 38,
      failedCount: 0
    },
    {
      id: 'BATCH-003',
      name: 'Commissions Agents',
      totalAmount: 2800000,
      recipientCount: 28,
      status: 'En attente',
      date: '2024-11-21',
      successCount: 0,
      failedCount: 0
    }
  ])

  const [showUploadModal, setShowUploadModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Paiements Massifs</h2>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="btn-primary flex items-center"
        >
          <Upload size={18} className="mr-2" />
          Nouveau Paiement Massif
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Paiements (Mois)</p>
          <p className="text-2xl font-bold text-gray-900">18,750,000 FCFA</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Bénéficiaires (Mois)</p>
          <p className="text-2xl font-bold text-blue-600">229</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Taux de Succès</p>
          <p className="text-2xl font-bold text-green-600">98.7%</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Paiements Échoués</p>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
      </div>

      {/* Upload Instructions */}
      <div className="card bg-blue-50 border border-blue-200">
        <div className="flex items-start">
          <AlertCircle className="text-blue-600 mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Instructions pour le fichier CSV</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Format: CSV avec colonnes: Nom, Numéro, Montant, Fournisseur</li>
              <li>• Exemple: Jean Kouassi,+2250102030405,50000,Orange Money</li>
              <li>• Limite: 1000 bénéficiaires par batch</li>
              <li>• Fournisseurs acceptés: Orange Money, MTN Money, Moov Money, Wave</li>
            </ul>
            <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <Download size={16} className="mr-1" />
              Télécharger le modèle CSV
            </button>
          </div>
        </div>
      </div>

      {/* Batch Payments List */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Historique des Paiements Massifs</h3>
        <div className="space-y-4">
          {batchPayments.map((batch) => (
            <div key={batch.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{batch.name}</h4>
                  <p className="text-sm text-gray-600">ID: {batch.id}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  batch.status === 'Complété' ? 'bg-green-100 text-green-800' :
                  batch.status === 'En cours' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {batch.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Montant Total</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {batch.totalAmount.toLocaleString()} FCFA
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Bénéficiaires</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {batch.recipientCount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Réussis</p>
                  <p className="text-lg font-semibold text-green-600">
                    {batch.successCount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Échecs</p>
                  <p className="text-lg font-semibold text-red-600">
                    {batch.failedCount}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              {batch.status === 'En cours' && (
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Progression</span>
                    <span className="text-xs text-gray-600">
                      {Math.round((batch.successCount / batch.recipientCount) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(batch.successCount / batch.recipientCount) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  {new Date(batch.date).toLocaleDateString('fr-FR')}
                </span>
                <div className="flex space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Voir détails
                  </button>
                  {batch.status === 'Complété' && (
                    <button className="text-sm text-green-600 hover:text-green-800 flex items-center">
                      <Download size={16} className="mr-1" />
                      Rapport
                    </button>
                  )}
                  {batch.status === 'En attente' && (
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                      <Send size={16} className="mr-1" />
                      Lancer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nouveau Paiement Massif</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du Batch
                </label>
                <input
                  type="text"
                  placeholder="Ex: Paiement Vendeurs Décembre 2024"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fichier CSV
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto text-gray-400 mb-2" size={48} />
                  <p className="text-sm text-gray-600 mb-2">
                    Glissez-déposez votre fichier CSV ou cliquez pour parcourir
                  </p>
                  <button className="btn-secondary">
                    Sélectionner un fichier
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date d'exécution
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="btn-secondary"
              >
                Annuler
              </button>
              <button className="btn-primary flex items-center">
                <CheckCircle size={18} className="mr-2" />
                Créer le Batch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaiementsMassifs
