import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { Menu, X, LayoutDashboard, Users, Settings, Calendar, BookOpen, LogOut } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    
    // Optional: Decode token to check role if needed, or verify with API
    // For now, we assume existence of token means access (basic protection)
    // You could add a fetch to /api/admin/verify-token here

    setIsLoading(false);
  }, [router]);

  // Force light theme for admin panel
  useEffect(() => {
    document.body.classList.add('force-light');
    return () => {
      document.body.classList.remove('force-light');
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 bg-white">
      {/* Desktop Sidebar */}
      <AdminSidebar />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 md:hidden ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-200 bg-white">
          <h1 className="text-lg font-bold text-teal-600">RamaCare Admin</h1>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="text-gray-700 hover:text-gray-900 p-1 rounded hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 space-y-1 pt-2">
          {[
            { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
            { name: 'Appointments', path: '/admin/appointments', icon: Calendar },
            { name: 'Blog Posts', path: '/admin/blogpost', icon: BookOpen },
            // { name: 'Users', path: '/admin/users', icon: Users },
            // { name: 'Settings', path: '/admin/settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  router.pathname === item.path
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

      </div>

      {/* Main Content */}
      <div className="md:ml-64 min-h-screen flex flex-col bg-white">
        <AdminHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 p-6 mt-16 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
