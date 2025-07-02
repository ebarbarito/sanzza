import React from "react";
import Mapa from "../components/MapaOscuro";

export default function VideoWallMapView() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      <header className="flex items-center justify-between px-6 py-2 border-b border-gray-700">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <h1 className="text-2xl font-bold">Sanzza</h1>
        <div />
      </header>
      <main className="flex flex-1">
        <div className="w-1/5 p-4 bg-gray-900 flex flex-col gap-4">
          <div className="bg-gray-800 p-4 rounded">Servicios Activos</div>
          <div className="bg-gray-800 p-4 rounded">Tiempo de Arribo</div>
          <div className="bg-gray-800 p-4 rounded">Alarmas Técnicas</div>
        </div>
        <div className="flex-1 relative">
          <Mapa />
        </div>
        <div className="w-1/4 p-4 bg-gray-900 flex flex-col gap-4">
          <div className="bg-gray-800 p-4 rounded">Servicios en curso</div>
          <div className="bg-gray-800 p-4 rounded">Cámara Vehículo</div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white text-center py-2">Estado general y otros datos</footer>
    </div>
  );
}
