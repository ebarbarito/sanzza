
// src/pages/Map5.jsx
import React from "react";
import Mapa from "../components/MapaEstilo";
import logo from "/logo-s.png";

const kpis = [
  { label: "Servicios Activos", value: 70, color: "#facc15" },
  { label: "Tiempos de Arribo", value: 78, color: "#22c55e" },
  { label: "Alarmas Técnicas", value: 90, color: "#facc15" },
  { label: "Productividad Cuadrilla", value: 85, color: "#22c55e" }
];

const resumen = [
  { label: "Móviles operativos", value: 5, color: "text-green-400" },
  { label: "Móviles inactivos", value: 1, color: "text-red-400" },
  { label: "Servicios en curso", value: 4, color: "text-green-400" },
  { label: "Servicios pendientes", value: 6, color: "text-yellow-400" }
];

const serviciosCurso = [
  { id: "#001", ubicacion: "Pozo 32", estado: "verde", movil: "Móvil 1001", responsable: "Juan Pérez" },
  { id: "#002", ubicacion: "Pozo 18", estado: "amarillo", movil: "Móvil 1002", responsable: "Lucía Díaz" },
  { id: "#003", ubicacion: "Pozo 22", estado: "verde", movil: "Móvil 1003", responsable: "Carlos Gómez" },
  { id: "#004", ubicacion: "Pozo 10", estado: "amarillo", movil: "Móvil 1004", responsable: "Mariana Ruiz" },
  { id: "#005", ubicacion: "Pozo 50", estado: "rojo", movil: "Móvil 1005", responsable: "Ana Torres" }
];

const normalize = (val) => 283 - (val / 100) * 283;
const radius = 45;
const stroke = 8;

const getColorDot = (estado) => {
  if (estado === "verde") return "bg-green-400";
  if (estado === "amarillo") return "bg-yellow-400";
  if (estado === "rojo") return "bg-red-500";
  return "bg-gray-500";
};

export default function Map5() {
  return (
    <div className="h-screen w-full overflow-hidden bg-gray-950 text-white flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-16" />
          <span className="text-white text-2xl font-semibold">Sanzza Group</span>
        </div>
        <div className="text-3xl text-white font-bold text-center">
          Monitoreo integral - Sanzza
        </div>
        <div className="w-32"></div>
      </div>

      <main className="flex flex-1 overflow-hidden">
        <div className="w-1/4 p-4 bg-gray-900 border-r border-gray-700 flex flex-col gap-6">
          <div className="text-gray-300 text-xl font-bold text-center border-b border-gray-600 pb-2">
            Estado
          </div>
          <div className="grid grid-cols-2 gap-4">
            {resumen.map((r, i) => (
              <div key={i} className="bg-gray-800 border border-gray-600 p-3 rounded text-center">
                <div className="text-white text-sm">{r.label}</div>
                <div className={`text-3xl font-bold mt-1 ${r.color}`}>{r.value}</div>
              </div>
            ))}
          </div>
          <div className="text-gray-300 text-xl font-bold text-center border-b border-gray-600 mt-6 pb-2">
            KPI
          </div>
          <div className="grid grid-cols-2 gap-4">
            {kpis.map((kpi, i) => (
              <div key={i} className="bg-gray-800 border border-gray-600 p-3 rounded flex flex-col items-center">
                <div className="text-sm mb-2 text-white text-center">{kpi.label}</div>
                <svg width="100" height="100" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#374151"
                    strokeWidth={stroke}
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={kpi.color}
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray="283"
                    strokeDashoffset={normalize(kpi.value)}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                  <text
                    x="60"
                    y="66"
                    textAnchor="middle"
                    fontSize="22"
                    fill="white"
                    fontWeight="bold"
                  >
                    {kpi.value}%
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div style={{ height: "600px" }} className="overflow-hidden">
            <Mapa />
          </div>
          <div className="bg-gray-900 text-white border-t border-gray-700 p-4 text-md">
            <h2 className="text-gray-200 font-bold text-xl mb-2">Servicios pendientes</h2>
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-gray-800 border border-gray-600 p-3 rounded">#PEN101 - Pozo 61 - Prioridad: Alta</div>
              <div className="bg-gray-800 border border-gray-600 p-3 rounded">#PEN102 - Pozo 62 - Prioridad: Media</div>
              <div className="bg-gray-800 border border-gray-600 p-3 rounded">#PEN103 - Pozo 63 - Prioridad: Alta</div>
              <div className="bg-gray-800 border border-gray-600 p-3 rounded">#PEN104 - Pozo 64 - Prioridad: Media</div>
              <div className="bg-gray-800 border border-gray-600 p-3 rounded">#PEN105 - Pozo 65 - Prioridad: Alta</div>
            </div>
          </div>
        </div>

        <div className="w-1/4 p-4 bg-gray-900 border-l border-gray-700">
          <div className="text-gray-300 text-xl font-bold text-center border-b border-gray-600 pb-2">
            Servicios en curso
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {serviciosCurso.map((s, i) => (
              <div key={i} className="bg-gray-800 border border-gray-600 p-3 rounded text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-3 h-3 rounded-full ${getColorDot(s.estado)}`}></div>
                  <div className="font-bold text-white">{s.id}</div>
                </div>
                <div className="text-gray-300">{s.ubicacion}</div>
                <div className="text-gray-400 mt-1">Móvil: {s.movil}</div>
                <div className="text-gray-400">Resp: {s.responsable}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}