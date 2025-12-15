import React, { useEffect, useState } from "react";
import { getLeads } from "../api/leadApi";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend
} from "chart.js";
import { FiFacebook, FiGlobe } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { animated, useSpring } from "react-spring";

ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const Dashboard = ({ triggerUpdate }) => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await getLeads();
      setLeads(data);
    };
    fetchLeads();
  }, [triggerUpdate]);

  const websiteLeads = leads.filter(l => l.source === "Website").length;
  const metaLeads = leads.filter(l => l.source === "Meta").length;
  const googleLeads = leads.filter(l => l.source === "Google").length;

  const chartData = [
    { name: "Website", count: websiteLeads },
    { name: "Meta Ads", count: metaLeads },
    { name: "Google Ads", count: googleLeads },
  ];

  const doughnutData = {
    labels: ["Website", "Meta Ads", "Google Ads"],
    datasets: [
      {
        data: [websiteLeads, metaLeads, googleLeads],
        backgroundColor: ["#3B82F6", "#8B5CF6", "#FACC15"],
        borderWidth: 2,
      },
    ],
  };

  const AnimatedNumber = ({ value }) => {
    const props = useSpring({ number: value, from: { number: 0 }, config: { duration: 800 } });
    return <animated.span>{props.number.to(n => Math.floor(n))}</animated.span>;
  };

  const cards = [
    { title: "Website Leads", value: websiteLeads, bg: "bg-blue-500", icon: <FiGlobe size={28} /> },
    { title: "Meta Ads Leads", value: metaLeads, bg: "bg-purple-500", icon: <FiFacebook size={28} /> },
    { title: "Google Ads Leads", value: googleLeads, bg: "bg-yellow-400", icon: <FaGoogle size={28} /> },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-5`}
          >
            <div className="p-4 bg-white/20 rounded-full flex items-center justify-center">
              {card.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-3xl font-bold mt-1">
                <AnimatedNumber value={card.value} />
              </p>
            </div>
          </div>
        ))}
      </div>

   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Leads Trend</h2>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
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
                fill="url(#colorLeads)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Leads Comparison</h2>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                dataKey="count"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

     
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-center">Lead Distribution</h2>
        <div className="relative h-60">
          <Doughnut
            data={doughnutData}
            options={{
              cutout: "65%",
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
