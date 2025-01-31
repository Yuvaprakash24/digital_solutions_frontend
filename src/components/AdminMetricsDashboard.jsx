import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminMetricsDashboard = () => {
  const [metrics, setMetrics] = useState({
    websiteVisits: 0,
    blogEngagement: 0,
    formSubmissions: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/metrics');
        setMetrics(response.data[0]);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Metrics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h3 className="text-xl font-bold">Website Visits</h3>
          <p>{metrics.websiteVisits}</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="text-xl font-bold">Blog Engagement</h3>
          <p>{metrics.blogEngagement}</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="text-xl font-bold">Form Submissions</h3>
          <p>{metrics.formSubmissions}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminMetricsDashboard;