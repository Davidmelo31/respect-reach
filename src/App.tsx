import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import WhatIs from "./pages/WhatIs";
import Prevention from "./pages/Prevention";
import Help from "./pages/Help";
import Respect from "./pages/Respect";
import AI from "./pages/AI";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/que-es" element={<ProtectedRoute><WhatIs /></ProtectedRoute>} />
          <Route path="/prevencion" element={<ProtectedRoute><Prevention /></ProtectedRoute>} />
          <Route path="/ayuda" element={<ProtectedRoute><Help /></ProtectedRoute>} />
          <Route path="/respeto" element={<ProtectedRoute><Respect /></ProtectedRoute>} />
          <Route path="/ia" element={<ProtectedRoute><AI /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
