import { useState } from 'react'
import { Save, Globe, Mail, Phone, MapPin } from 'lucide-react'

const Configuration = () => {
  const [config, setConfig] = useState({
    siteName: 'Agrobloc',
    siteUrl: 'https://agrobloc.com',
    email: 'contact@agrobloc.com',
    phone: '+225 01 02 03 04 05',
    address: 'Abidjan, Côte d\'Ivoire',
    currency: 'FCFA',
    language: 'fr',
    timezone: 'Africa/Abidjan',
    maintenanceMode: false,
    userRegistration: true,
    emailVerification: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Configuration sauvegardée avec succès!')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Configuration Générale</h2>
        <button onClick={handleSubmit} className="btn-primary flex items-center">
          <Save size={18} className="mr-2" />
          Sauvegarder
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations Générales */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Globe size={20} className="mr-2 text-agrobloc-primary" />
            Informations Générales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom du Site
              </label>
              <input
                type="text"
                value={config.siteName}
                onChange={(e) => setConfig({...config, siteName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL du Site
              </label>
              <input
                type="url"
                value={config.siteUrl}
                onChange={(e) => setConfig({...config, siteUrl: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Coordonnées */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Mail size={20} className="mr-2 text-agrobloc-primary" />
            Coordonnées
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={config.email}
                onChange={(e) => setConfig({...config, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={config.phone}
                onChange={(e) => setConfig({...config, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <input
                type="text"
                value={config.address}
                onChange={(e) => setConfig({...config, address: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Paramètres Régionaux */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Paramètres Régionaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Devise
              </label>
              <select
                value={config.currency}
                onChange={(e) => setConfig({...config, currency: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              >
                <option value="FCFA">FCFA</option>
                <option value="EUR">Euro (€)</option>
                <option value="USD">Dollar ($)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Langue
              </label>
              <select
                value={config.language}
                onChange={(e) => setConfig({...config, language: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fuseau Horaire
              </label>
              <select
                value={config.timezone}
                onChange={(e) => setConfig({...config, timezone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
              >
                <option value="Africa/Abidjan">Africa/Abidjan</option>
                <option value="Africa/Dakar">Africa/Dakar</option>
                <option value="Europe/Paris">Europe/Paris</option>
              </select>
            </div>
          </div>
        </div>

        {/* Options Système */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Options Système</h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.maintenanceMode}
                onChange={(e) => setConfig({...config, maintenanceMode: e.target.checked})}
                className="w-4 h-4 text-agrobloc-primary focus:ring-agrobloc-primary border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">Mode Maintenance</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.userRegistration}
                onChange={(e) => setConfig({...config, userRegistration: e.target.checked})}
                className="w-4 h-4 text-agrobloc-primary focus:ring-agrobloc-primary border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">Autoriser l'inscription des utilisateurs</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.emailVerification}
                onChange={(e) => setConfig({...config, emailVerification: e.target.checked})}
                className="w-4 h-4 text-agrobloc-primary focus:ring-agrobloc-primary border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">Vérification par email obligatoire</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Configuration
