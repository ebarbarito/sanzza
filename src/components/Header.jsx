import React, { useState } from "react";
import { Bell, Plus, Settings, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-gray-100">
      {menuVisible && (
        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <Link to="/" className="hover:text-blue-600">Principal</Link>
          <Link to="/tableros" className="hover:text-blue-600">Tableros</Link>
          <Link to="/servicios" className="hover:text-blue-600">Servicios</Link>
          <Link to="/cuadrilla" className="hover:text-blue-600">Cuadrilla</Link>
          <Link to="/reportes" className="hover:text-blue-600">Reportes</Link>
          <Link to="/mapa" className="hover:text-blue-600">Mapa</Link>
        </nav>
      )}

      <div className="flex items-center gap-4">
        {menuVisible && (
          <>
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded flex items-center gap-1">
              <Plus className="w-4 h-4" /> Nuevo Servicio
            </button>
            <Settings className="w-5 h-5 text-gray-700" />
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              E
            </div>
          </>
        )}
        <img src="/logo.png" alt="Logo" className="h-20" />
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="text-gray-700 hover:text-blue-600"
          title="Mostrar/Ocultar menú"
        >
          {menuVisible ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
    </header>
  );
}