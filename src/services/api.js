import axios from "axios";

// =========================
// BASE URL CONFIG
// =========================
export const BASE_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://fixitnow-backend-u4fv.onrender.com";

export const WS_URL =
  import.meta.env.VITE_WS_URL?.trim() ||
  `${BASE_URL.replace("https", "wss")}/ws`;
// Axios instance for protected APIs
const API = axios.create({
  baseURL: `${BASE_URL}/api`,
});

// Attach token for all protected routes
API.interceptors.request.use(
  (config) => {
    if (!config.url.includes("/auth/")) {
      const token = localStorage.getItem("token");
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// =============================
// AUTH APIs (NO TOKEN REQUIRED)
// =============================
export const register = (userData) =>
  axios.post(`${BASE_URL}/api/auth/register`, userData);

export const login = (credentials) =>
  axios.post(`${BASE_URL}/api/auth/login`, credentials);

export const uploadProviderDocument = (providerId, file) => {
  const formData = new FormData();
  formData.append("file", file);



  return axios.post(
    `${BASE_URL}/api/auth/upload-documents/${providerId}`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};

const fetchAdmin = async () => {
  const res = await API.get("/users/admin");
  setAdminId(res.data.id);
};


// =============================
// SERVICE APIs
// =============================
export const createService = (data) => API.post("/services", data);
export const getAllServices = () => API.get("/services");
export const getServicesByProvider = (providerId) =>
  API.get(`/services/provider/${providerId}`);
export const updateService = (id, data) => API.put(`/services/${id}`, data);
export const deleteService = (id) => API.delete(`/services/${id}`);

// =============================
// USER APIs
// =============================
export const getAllUsers = () => API.get("/users/all");
export const getProviders = () => API.get("/users/providers");
export const getMyProfile = () => API.get("/users/me");
export const getUserById = (id) => API.get(`/users/id/${id}`);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const getUserByEmail = (email) => API.get(`/users/email/${email}`);
export const getCustomers = () => API.get("/users/customers");
export const getProviderById = (providerId) =>
  API.get(`/users/id/${providerId}`);
export const verifyProvider = (providerId) =>
  API.put(`/users/${providerId}/verify`);

// =============================
// BOOKING APIs
// =============================
export const createBooking = (data) => API.post("/bookings/create", data);
export const getBookingsByCustomer = (customerId) =>
  API.get(`/bookings/customer/${customerId}`);
export const getBookingsByProvider = (providerId) =>
  API.get(`/bookings/provider/${providerId}`);
export const updateBookingStatus = (bookingId, status) =>
  API.put(`/bookings/updateStatus/${bookingId}?status=${status}`);
export const getAllBookings = () => API.get("/bookings/all");
export const markBookingCompleteByProvider = (bookingId) =>
  API.post(`/bookings/${bookingId}/markComplete`);
export const verifyBookingByCustomer = (bookingId) =>
  API.post(`/bookings/${bookingId}/verify`);

// =============================
// REVIEW APIs
// =============================
export const addReview = (data) => API.post("/reviews/add", data);
export const getReviewsByProvider = (providerId) =>
  API.get(`/reviews/provider/${providerId}`);
export const getProviderAverageRating = (providerId) =>
  API.get(`/reviews/provider/${providerId}/average`);
export const getReviewsByCustomer = (customerId) =>
  API.get(`/reviews/customer/${customerId}`);
export const updateReview = (reviewId, reviewData) =>
  API.put(`/reviews/update/${reviewId}`, reviewData);
export const deleteReview = (reviewId) =>
  API.delete(`/reviews/${reviewId}`);
export const getReviewByBookingId = (bookingId) =>
  API.get(`/reviews/booking/${bookingId}`);

// =============================
// CHAT APIs
// =============================
export const sendMessageAPI = (messageData) =>
  API.post("/messages", messageData);

export const getMessagesWithUser = (userId) =>
  API.get(`/messages/between/${userId}`);

// =============================
// DOCUMENT APIs
// =============================
export const getAllDocuments = () => API.get("/documents/all");
export const approveDocument = (id) => API.put(`/documents/approve/${id}`);
export const deleteDocument = (id) => API.delete(`/documents/${id}`);
export const rejectDocument = (id, reason) =>
  API.put(`/documents/reject/${id}`, null, { params: { reason } });
export const getProviderDocuments = (providerId) =>
  API.get(`/documents/provider/${providerId}`);

// =============================
// REPORT / DISPUTE APIs
// =============================
export const createReport = (userId, targetType, targetId, reason) =>
  API.post("/reports/create", null, {
    params: { userId, targetType, targetId, reason },
  });

export const getAllReports = () => API.get("/reports/all");
export const getReportsByType = (type) => API.get(`/reports/type/${type}`);
export const getReportsByStatus = (status) =>
  API.get(`/reports/status/${status}`);
export const getReportsByUser = (userId) =>
  API.get(`/reports/user/${userId}`);
export const updateReportStatus = (reportId, status) =>
  API.put(`/reports/update-status/${reportId}`, null, { params: { status } });
export const deleteReport = (reportId) =>
  API.delete(`/reports/${reportId}`);

// =============================
// ADMIN ANALYTICS APIs
// =============================
export const getAnalyticsSummary = () =>
  API.get("/admin/analytics/summary");
export const getBookingsPerMonth = () =>
  API.get("/admin/analytics/bookings/monthly");
export const getTopProviders = () =>
  API.get("/admin/analytics/top-providers");
export const getTopServices = () =>
  API.get("/admin/analytics/top-services");
export const getLocationTrends = () =>
  API.get("/admin/analytics/locations");
