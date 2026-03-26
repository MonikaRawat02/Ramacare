import { useState, useEffect } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <div className={`fixed top-6 right-6 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-[100] animate-slide-in-right`}>
      <Icon className="w-6 h-6" />
      <span className="font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}>
        {message}
      </span>
      <button onClick={onClose} className="ml-2 hover:opacity-75 transition-opacity">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const ToastComponent = toast ? (
    <Toast message={toast.message} type={toast.type} onClose={closeToast} />
  ) : null;

  return { showToast, ToastComponent };
};

export default Toast;
