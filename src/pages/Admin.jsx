import React from 'react';
import AdminBlogManagement from '../components/AdminBlogManagement';
import AdminMetricsDashboard from '../components/AdminMetricsDashboard';

const Admin = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Panel</h1>
      <AdminBlogManagement />
      <AdminMetricsDashboard />
    </div>
  );
};

export default Admin;