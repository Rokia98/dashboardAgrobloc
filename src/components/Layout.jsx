import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  Package, 
  TrendingUp,
  DollarSign,
  CreditCard,
  Receipt,
  Send,
  AlertCircle,
  Ticket,
  Link2,
  FileCheck,
  Menu,
  X
} from 'lucide-react'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const menuSections = [
    {
      title: 'Tableau de Bord',
      items: [
        { name: 'Accueil', icon: LayoutDashboard, path: '/' }
      ]
    },
    {
      title: 'Gestion Générale',
      items: [
        { name: 'Configuration', icon: Settings, path: '/gestion-generale/configuration' },
        { name: 'Produits', icon: Package, path: '/gestion-generale/produits' },
        { name: 'Utilisateurs', icon: Users, path: '/gestion-generale/utilisateurs' },
        { name: 'Indicateurs KPI', icon: TrendingUp, path: '/gestion-generale/kpi' }
      ]
    },
    {
      title: 'Gestion ESCROW',
      items: [
        { name: 'Transactions', icon: DollarSign, path: '/gestion-escrow/transactions' },
        { name: 'Fournisseurs Paiement', icon: CreditCard, path: '/gestion-escrow/fournisseurs' },
        { name: 'Frais Agrobloc', icon: Receipt, path: '/gestion-escrow/frais' },
        { name: 'Paiements Massifs', icon: Send, path: '/gestion-escrow/paiements-massifs' },
        { name: 'Conflits', icon: AlertCircle, path: '/gestion-escrow/conflits' },
        { name: 'Ticketing', icon: Ticket, path: '/gestion-escrow/ticketing' }
      ]
    },
    {
      title: 'Blockchain & Traçabilité',
      items: [
        { name: 'Blockchain Agrobloc', icon: Link2, path: '/blockchain-tracabilite/blockchain' },
        { name: 'Traçabilité', icon: FileCheck, path: '/blockchain-tracabilite/tracabilite' }
      ]
    }
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-agrobloc-dark text-white transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 flex items-center justify-between border-b border-agrobloc-secondary">
          {sidebarOpen ? (
            <>
              <h1 className="text-2xl font-bold text-agrobloc-accent">Agrobloc</h1>
              <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-agrobloc-secondary rounded">
                <X size={20} />
              </button>
            </>
          ) : (
            <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-agrobloc-secondary rounded mx-auto">
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuSections.map((section, idx) => (
            <div key={idx} className="mb-6">
              {sidebarOpen && (
                <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center px-4 py-3 transition-colors ${
                          isActive
                            ? 'bg-agrobloc-primary text-white'
                            : 'text-gray-300 hover:bg-agrobloc-secondary hover:text-white'
                        }`}
                        title={!sidebarOpen ? item.name : ''}
                      >
                        <Icon size={20} className={sidebarOpen ? 'mr-3' : 'mx-auto'} />
                        {sidebarOpen && <span>{item.name}</span>}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-agrobloc-secondary">
          {sidebarOpen ? (
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-agrobloc-accent flex items-center justify-center font-bold">
                A
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Administrateur</p>
                <p className="text-xs text-gray-400">admin@agrobloc.com</p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-agrobloc-accent flex items-center justify-center font-bold mx-auto">
              A
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-8 py-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Tableau de Bord Administrateur
            </h2>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
