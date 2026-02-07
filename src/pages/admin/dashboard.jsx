import AdminLayout from '../../../components/admin/AdminLayout';
import { Users, Calendar, FileText, BookOpen, TrendingUp, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const DashboardCard = ({ title, value, icon: Icon, color, growth }) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{title}</p>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2">{value}</h3>
      </div>
      <div className={`p-2 sm:p-3 rounded-lg ${color} flex-shrink-0 ml-2`}>
        <Icon size={20} className="text-white sm:w-6 sm:h-6" />
      </div>
    </div>
    <div className={`mt-3 sm:mt-4 flex items-center text-xs sm:text-sm ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
      <span className="font-medium">{growth >= 0 ? '+' : ''}{growth}%</span>
      <span className="text-gray-600 ml-2">from last month</span>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Force light theme for admin panel
  useEffect(() => {
    document.body.classList.add('force-light');
    return () => {
      document.body.classList.remove('force-light');
    };
  }, []);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('adminToken');
        
        // Fetch dashboard statistics
        const statsRes = await fetch('/api/admin/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!statsRes.ok) throw new Error('Failed to fetch dashboard data');
        
        const statsData = await statsRes.json();
        setStats(statsData.stats);

        // Fetch appointments
        const appointmentsRes = await fetch('/api/admin/appointments', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!appointmentsRes.ok) throw new Error('Failed to fetch appointments');
        
        const appointmentsData = await appointmentsRes.json();
        setAppointments(appointmentsData);

      } catch (err) {
        console.error('Dashboard fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64 bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
          <h3 className="text-red-800 font-medium">Error loading dashboard</h3>
          <p className="text-red-600 mt-1 text-sm">{error}</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Welcome back, Admin!</p>
      </div>

      {/* Stats Cards - Optimized grid for all screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <DashboardCard 
          title="Total Users" 
          value={stats?.totalUsers || 0} 
          icon={Users} 
          color="bg-blue-500" 
          growth={stats?.usersGrowth || 0}
        />
        <DashboardCard 
          title="Total Blog Posts" 
          value={stats?.totalBlogPosts || 0} 
          icon={FileText} 
          color="bg-purple-500" 
          growth={stats?.blogsGrowth || 0}
        />
        <DashboardCard 
          title="Published Blogs" 
          value={stats?.publishedBlogs || 0} 
          icon={BookOpen} 
          color="bg-green-500" 
          growth={stats?.publishedGrowth || 0}
        />
        <DashboardCard 
          title="Draft Blogs" 
          value={stats?.draftBlogs || 0} 
          icon={Clock} 
          color="bg-amber-500" 
          growth={stats?.draftGrowth || 0}
        />
      </div>

      {/* Bottom Section - Stacks on tablet, side-by-side on large screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Appointments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">Recent Appointments</h2>
            <span className="text-xs sm:text-sm text-gray-500">
              {appointments?.stats?.total || 0} total
            </span>
          </div>
          
          <div className="space-y-3 sm:space-y-4 max-h-[400px] overflow-y-auto">
            {appointments?.appointments && appointments.appointments.length > 0 ? (
              appointments.appointments.map((appointment) => (
                <div key={appointment._id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-0 gap-3 sm:gap-4">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{appointment.fullName}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs sm:text-sm text-gray-600 truncate">{appointment.concern || 'General Inquiry'}</span>
                        <span className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          appointment.status === 'new' ? 'bg-blue-100 text-blue-800' :
                          appointment.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                          appointment.status === 'scheduled' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right flex-shrink-0 pl-13 sm:pl-0">
                    <span className="text-xs sm:text-sm text-gray-500">
                      {new Date(appointment.createdAt).toLocaleDateString()}
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5 sm:mt-1 truncate max-w-[200px] sm:max-w-none">{appointment.email}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users size={32} className="mx-auto mb-3 text-gray-300" />
                <p className="text-sm">No appointments yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Quick Overview</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center p-3 sm:p-4 bg-blue-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-blue-800">New Appointments</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900 mt-1">
                  {appointments?.stats?.new || 0}
                </p>
              </div>
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg flex-shrink-0 ml-2">
                <Clock size={20} className="text-blue-600 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 sm:p-4 bg-green-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-green-800">Scheduled</p>
                <p className="text-xl sm:text-2xl font-bold text-green-900 mt-1">
                  {appointments?.stats?.scheduled || 0}
                </p>
              </div>
              <div className="p-2 sm:p-3 bg-green-100 rounded-lg flex-shrink-0 ml-2">
                <Calendar size={20} className="text-green-600 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 sm:p-4 bg-purple-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-purple-800">Published Blogs</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-900 mt-1">
                  {stats?.publishedBlogs || 0}
                </p>
              </div>
              <div className="p-2 sm:p-3 bg-purple-100 rounded-lg flex-shrink-0 ml-2">
                <BookOpen size={20} className="text-purple-600 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 sm:p-4 bg-amber-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-amber-800">Draft Posts</p>
                <p className="text-xl sm:text-2xl font-bold text-amber-900 mt-1">
                  {stats?.draftBlogs || 0}
                </p>
              </div>
              <div className="p-2 sm:p-3 bg-amber-100 rounded-lg flex-shrink-0 ml-2">
                <Clock size={20} className="text-amber-600 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;