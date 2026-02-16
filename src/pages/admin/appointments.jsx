import AdminLayout from '../../../components/admin/AdminLayout';
import { useState, useEffect } from 'react';
import { Search, Filter, Calendar, Phone, Mail, User, Clock, CheckCircle, XCircle, Edit3, Eye, Trash2, Info } from 'lucide-react';

const AppointmentStatusBadge = ({ status }) => {
  const statusConfig = {
    new: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'New' },
    contacted: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Contacted' },
    scheduled: { bg: 'bg-green-100', text: 'text-green-800', label: 'Scheduled' },
    completed: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Completed' },
    cancelled: { bg: 'bg-red-100', text: 'text-red-800', label: 'Cancelled' }
  };

  const config = statusConfig[status] || statusConfig.new;
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};

const AppointmentDetailsModal = ({ appointment, isOpen, onClose, onUpdateStatus }) => {
  if (!isOpen || !appointment) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6 sm:p-8 relative">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Appointment Details</h2>
                  <p className="text-teal-100 text-sm sm:text-base mt-1">Patient Information & Status</p>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200 self-start">
              <XCircle size={28} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(95vh-180px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Patient Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="text-teal-600" size={20} />
                  Patient Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={20} className="text-teal-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</p>
                      <p className="text-lg font-semibold text-gray-900">{appointment.fullName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail size={20} className="text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
                      <p className="text-base text-gray-900 break-all">{appointment.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone size={20} className="text-green-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</p>
                      <p className="text-base text-gray-900">{appointment.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock size={20} className="text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Submitted On</p>
                      <p className="text-base text-gray-900">
                        {new Date(appointment.createdAt).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(appointment.createdAt).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Appointment Details & Status */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="text-emerald-600" size={20} />
                  Appointment Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Concern/Service</p>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-base font-medium text-gray-900">{appointment.concern || 'General Inquiry'}</p>
                    </div>
                  </div>
                  
                  {appointment.additionalInfo && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Additional Information</p>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-base text-gray-700 whitespace-pre-wrap">{appointment.additionalInfo}</p>
                      </div>
                    </div>
                  )}
  
                  {appointment.preferredDate && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</p>
                      <div className="bg-white rounded-lg p-3 border border-gray-200 flex items-center gap-2">
                        <Calendar size={18} className="text-emerald-600" />
                        <p className="text-base font-medium text-gray-900">
                          {new Date(appointment.preferredDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Management */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="text-amber-600" size={20} />
                  Status Management
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['new', 'contacted', 'scheduled', 'completed', 'cancelled'].map((status) => (
                    <button
                      key={status}
                      onClick={() => onUpdateStatus(appointment._id, status)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${
                        appointment.status === status
                          ? status === 'new' ? 'bg-blue-500 text-white shadow-md' :
                            status === 'contacted' ? 'bg-amber-500 text-white shadow-md' :
                            status === 'scheduled' ? 'bg-emerald-500 text-white shadow-md' :
                            status === 'completed' ? 'bg-purple-500 text-white shadow-md' :
                            'bg-red-500 text-white shadow-md'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-xs text-amber-700 font-medium flex items-center gap-1">
                    <Info size={14} />
                    Click on a status to update this appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-sm sm:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Force light theme for admin panel
  useEffect(() => {
    document.body.classList.add('force-light');
    return () => {
      document.body.classList.remove('force-light');
    };
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch('/api/admin/appointments', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!res.ok) throw new Error('Failed to fetch appointments');
      
      const data = await res.json();
      setAppointments(data.appointments || []);
      
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (appointmentId, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch(`/api/admin/appointments/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!res.ok) throw new Error('Failed to update status');
      
      // Update local state
      setAppointments(prev => 
        prev.map(app => 
          app._id === appointmentId 
            ? { ...app, status: newStatus }
            : app
        )
      );
      
      // Update modal if it's open for this appointment
      if (selectedAppointment?._id === appointmentId) {
        setSelectedAppointment(prev => ({ ...prev, status: newStatus }));
      }
      
    } catch (err) {
      console.error('Update error:', err);
      alert('Failed to update appointment status');
    }
  };

  const openAppointmentDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const closeAppointmentDetails = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const deleteAppointment = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to delete this appointment? This action cannot be undone.')) {
      return;
    }
    
    try {
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch(`/api/admin/appointments/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!res.ok) throw new Error('Failed to delete appointment');
      
      // Remove from local state
      setAppointments(prev => prev.filter(app => app._id !== appointmentId));
      
      // Close modal if it's the deleted appointment
      if (selectedAppointment?._id === appointmentId) {
        closeAppointmentDetails();
      }
      
      alert('Appointment deleted successfully');
      
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete appointment');
    }
  };

  // Filter appointments
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

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
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 bg-white">
          <h3 className="text-red-800 font-medium">Error loading appointments</h3>
          <p className="text-red-600 mt-1">{error}</p>
          <button 
            onClick={fetchAppointments}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Retry
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
   
   <AdminLayout>
      <div className="mb-8 bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900">Appointments Management</h1>
        <p className="text-gray-600 mt-1">Manage all appointment requests and patient inquiries</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 text-center bg-white">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">{appointments.length}</div>
          <div className="text-xs sm:text-sm text-gray-600">Total</div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">
            {appointments.filter(a => a.status === 'new').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">New</div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-xl sm:text-2xl font-bold text-yellow-600">
            {appointments.filter(a => a.status === 'contacted').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Contacted</div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-xl sm:text-2xl font-bold text-green-600">
            {appointments.filter(a => a.status === 'scheduled').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Scheduled</div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-xl sm:text-2xl font-bold text-purple-600">
            {appointments.filter(a => a.status === 'completed').length}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Completed</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 bg-white">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"/>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" size={18}/>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm">
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 bg-white">
              <tr>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Patient</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Contact</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Concern</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Status</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Date</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <tr key={appointment._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-teal-600"/>
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 truncate">{appointment.fullName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Mail size={14} className="text-gray-400 flex-shrink-0"/>
                          <span className="text-gray-600 truncate max-w-[100px] sm:max-w-[150px]">{appointment.email}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Phone size={14} className="text-gray-400 flex-shrink-0"/>
                          <span className="text-gray-600 truncate max-w-[100px] sm:max-w-[150px]">{appointment.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate max-w-[120px] sm:max-w-[200px]">{appointment.concern || 'General Inquiry'}</p>
                        {appointment.preferredDate && (
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate max-w-[120px] sm:max-w-[200px]">
                            <Calendar size={12} className="inline mr-1" />
                            {new Date(appointment.preferredDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <AppointmentStatusBadge status={appointment.status} />
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div className="text-xs sm:text-sm text-gray-600">
                        <div className="truncate">{new Date(appointment.createdAt).toLocaleDateString()}</div>
                        <div className="text-gray-400 truncate">
                          {new Date(appointment.createdAt).toLocaleTimeString()}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div className="flex gap-1 sm:gap-2">
                        <button
                          onClick={() => openAppointmentDetails(appointment)}
                          className="p-1.5 sm:p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors flex-shrink-0"
                          title="View Details">
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => deleteAppointment(appointment._id)}
                          className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                          title="Delete Appointment">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-gray-500">
                    <User size={48} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-base sm:text-lg font-medium">No appointments found</p>
                    <p className="text-sm sm:text-gray-400">
                      {searchTerm || statusFilter !== 'all' 
                        ? 'Try adjusting your search or filter criteria' 
                        : 'Appointment submissions will appear here'}
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Details Modal */}
      <AppointmentDetailsModal
        appointment={selectedAppointment}
        isOpen={isModalOpen}
        onClose={closeAppointmentDetails}
        onUpdateStatus={updateAppointmentStatus}
      />
    </AdminLayout>
  );
};

export default AdminAppointments;