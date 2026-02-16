import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutDashboard, Users, Settings, FileText, BookOpen, Calendar } from 'lucide-react';

const AdminSidebar = () => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Appointments', path: '/admin/appointments', icon: Calendar },
    { name: 'Blog Posts', path: '/admin/blogpost', icon: BookOpen },
    // { name: 'Users', path: '/admin/users', icon: Users },
    // { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 text-gray-900 h-screen fixed left-0 top-0 overflow-y-auto hidden md:flex flex-col z-50">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-teal-600">RamaCare Admin</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;