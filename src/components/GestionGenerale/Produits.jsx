import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react'

const Produits = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [products] = useState([
    { id: 1, name: 'Riz Premium', category: 'Céréales', price: 25000, stock: 150, status: 'Actif', supplier: 'Agrotech SARL' },
    { id: 2, name: 'Maïs Blanc', category: 'Céréales', price: 15000, stock: 200, status: 'Actif', supplier: 'FarmCo' },
    { id: 3, name: 'Tomates Bio', category: 'Légumes', price: 8000, stock: 50, status: 'Actif', supplier: 'Bio Ferme' },
    { id: 4, name: 'Igname', category: 'Tubercules', price: 12000, stock: 80, status: 'Actif', supplier: 'Agro Plus' },
    { id: 5, name: 'Banane Plantain', category: 'Fruits', price: 5000, stock: 120, status: 'Inactif', supplier: 'Tropical Foods' }
  ])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Produits</h2>
        <button className="btn-primary flex items-center">
          <Plus size={18} className="mr-2" />
          Ajouter un Produit
        </button>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Toutes catégories</option>
            <option value="cereales">Céréales</option>
            <option value="legumes">Légumes</option>
            <option value="fruits">Fruits</option>
            <option value="tubercules">Tubercules</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrobloc-primary">
            <option value="">Tous statuts</option>
            <option value="actif">Actif</option>
            <option value="inactif">Inactif</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix (FCFA)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fournisseur
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
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.price.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{product.supplier}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.status === 'Actif'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye size={18} />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
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

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Affichage de <span className="font-medium">1</span> à <span className="font-medium">{filteredProducts.length}</span> sur <span className="font-medium">{products.length}</span> produits
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Précédent
          </button>
          <button className="px-4 py-2 bg-agrobloc-primary text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Produits
