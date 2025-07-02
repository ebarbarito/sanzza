import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Plus, Settings, ChevronUp, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gray-200 border-b border-gray-400">
      {/* Menú lateral izquierdo */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-black font-bold hover:text-blue-600">Inicio</Link>
        <Link to="/map" className="text-black font-bold hover:text-blue-600">Tableros</Link>
        <Link to="/map2" className="text-black font-bold hover:text-blue-600">Servicios</Link>
        <Link to="/map3" className="text-black font-bold hover:text-blue-600">Escuadrilla</Link>
        <Link to="/map4" className="text-black font-bold hover:text-blue-600">Reportes</Link>
      </div>

      {/* Acciones lado derecho */}
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
        <img src="/logo.png" alt="Logo" className="h-16" />
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
