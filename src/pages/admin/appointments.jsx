import AdminLayout from '../../../components/admin/AdminLayout';
import { useState, useEffect } from 'react';
import { Search, Filter, Calendar, Phone, Mail, User, Clock, CheckCircle, XCircle, Edit3, Eye, Trash2 } from 'lucide-react';

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

const AppointmentDetailsModal = ({ appointment, isOpen, onClose, onUpdateStatus, onSaveNotes }) => {
  if (!isOpen || !appointment) return null;

  const [notes, setNotes] = useState(appointment.notes || '');

  const handleSaveChanges = async () => {
    await onSaveNotes(appointment._id, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white">
        <div className="p-4 sm:p-6 border-b border-gray-200 bg-white">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Appointment Details</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 self-start"
            >
              <XCircle size={24} />
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-white">
          {/* Basic Info */}
          <div className="bg-white">
            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Patient Information</h4>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Full Name</label>
                <p className="font-medium text-sm sm:text-base">{appointment.fullName}</p>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Email</label>
                <p className="font-medium text-sm sm:text-base truncate">{appointment.email}</p>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Phone</label>
                <p className="font-medium text-sm sm:text-base">{appointment.phone}</p>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Submitted</label>
                <p className="font-medium text-sm sm:text-base">
                  {new Date(appointment.createdAt).toLocaleDateString()} at 
                  {new Date(appointment.createdAt).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>

          {/* Concern & Details */}
          <div className="bg-white">
            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Appointment Details</h4>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Concern/Service</label>
                <p className="font-medium text-sm sm:text-base">{appointment.concern || 'Not specified'}</p>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Additional Information</label>
                <p className="font-medium text-sm sm:text-base">{appointment.additionalInfo || 'None provided'}</p>
              </div>
              {appointment.preferredDate && (
                <div>
                  <label className="text-xs sm:text-sm text-gray-600">Preferred Date</label>
                  <p className="font-medium text-sm sm:text-base">{new Date(appointment.preferredDate).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>

          {/* Status & Notes */}
          <div className="bg-white">
            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Status Management</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
              {['new', 'contacted', 'scheduled', 'completed', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => onUpdateStatus(appointment._id, status)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    appointment.status === status
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
            
            <div>
              <label className="text-xs sm:text-sm text-gray-600">Internal Notes</label>
              <textarea
                placeholder="Add notes about this appointment..."
                className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-3 py-2 sm:px-4 sm:py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            className="px-3 py-2 sm:px-4 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
          >
            Save Changes
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

  const saveNotes = async (appointmentId, notes) => {
    try {
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch(`/api/admin/appointments/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ notes: notes })
      });
      
      if (!res.ok) throw new Error('Failed to save notes');
      
      // Update local state
      setAppointments(prev => 
        prev.map(app => 
          app._id === appointmentId 
            ? { ...app, notes: notes }
            : app
        )
      );
      
      // Update modal if it's open for this appointment
      if (selectedAppointment?._id === appointmentId) {
        setSelectedAppointment(prev => ({ ...prev, notes: notes }));
      }
      
    } catch (err) {
      console.error('Save notes error:', err);
      alert('Failed to save appointment notes');
    }
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
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
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
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" size={18} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
            >
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
                          <User size={16} className="text-teal-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 truncate">{appointment.fullName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Mail size={14} className="text-gray-400 flex-shrink-0" />
                          <span className="text-gray-600 truncate max-w-[100px] sm:max-w-[150px]">{appointment.email}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Phone size={14} className="text-gray-400 flex-shrink-0" />
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
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => deleteAppointment(appointment._id)}
                          className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                          title="Delete Appointment"
                        >
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
        onSaveNotes={saveNotes}
      />
    </AdminLayout>
  );
};

export default AdminAppointments;