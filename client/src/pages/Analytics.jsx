import React, { useEffect, useState } from "react";
import { getLeads } from "../api/leadApi";
import { exportToExcel } from "../utils/reportUtils";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  FiGlobe,
  FiCheckCircle,
  FiTarget,
  FiRadio,
} from "react-icons/fi";

const Analytics = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await getLeads();
      setLeads(data || []);
    };
    fetchLeads();
  }, []);

  const totalLeads = leads.length;
  const website = leads.filter(l => l.source === "Website").length;
  const meta = leads.filter(l => l.source === "Meta").length;
  const google = leads.filter(l => l.source === "Google").length;

  const converted = Math.floor(totalLeads * 0.35);
  const conversionRate = totalLeads
    ? ((converted / totalLeads) * 100).toFixed(1)
    : 0;

  const chartData = [
    { name: "Website", count: website },
    { name: "Meta Ads", count: meta },
    { name: "Google Ads", count: google },
  ];

  const cards = [
    {
      title: "Total Leads",
      value: totalLeads,
      bg: "bg-indigo-500",
      icon: <FiGlobe size={26} />,
    },
    {
      title: "Converted",
      value: converted,
      bg: "bg-green-500",
      icon: <FiCheckCircle size={26} />,
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      bg: "bg-yellow-400",
      icon: <FiTarget size={26} />,
    },
    {
      title: "Active Sources",
      value: 3,
      bg: "bg-pink-500",
      icon: <FiRadio size={26} />,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* TITLE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Analytics
        </h1>

        <button
          onClick={() => exportToExcel(leads)}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl shadow font-semibold transition w-full sm:w-auto"
        >
          Download Excel
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} text-white p-6 rounded-2xl shadow-xl
            hover:scale-105 transition-transform flex items-center gap-5`}
          >
            <div className="p-4 bg-white/20 rounded-full flex items-center justify-center">
              {card.icon}
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-semibold">
                {card.title}
              </h2>
              <p className="text-3xl font-bold mt-1">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Leads Growth Trend
          </h2>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="analyticsArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#3B82F6"
                fill="url(#analyticsArea)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

     
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Source-wise Performance
          </h2>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#8B5CF6"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
