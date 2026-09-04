const API_URL = 'http://localhost:5000/api';

// Helper for getting headers with the Bearer token
export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
    };
};