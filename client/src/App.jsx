import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
      
        <Sidebar />

        
        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="flex-1 p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/analytics" element={<Analytics />} />

           
              <Route path="/" element={<Navigate to="/dashboard" replace />} />

  
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
