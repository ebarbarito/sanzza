// src/pages/Map2.jsx
import React from "react";
import Mapa from "../components/MapaEstilo";

const kpis = [
  { label: "Servicios Activos", value: 70, color: "#facc15" },
  { label: "Tiempos de Arribo", value: 78, color: "#22c55e" },
  { label: "Alarmas Técnicas", value: 90, color: "#facc15" },
  { label: "Productividad Cuadrilla", value: 85, color: "#22c55e" }
];

const resumen = [
  { label: "Móviles operativos", value: 5, color: "text-green-400", estado: "verde" },
  { label: "Móviles inactivos", value: 1, color: "text-red-400", estado: "rojo" },
  { label: "Servicios en curso", value: 4, color: "text-green-400", estado: "verde" },
  { label: "Servicios pendientes", value: 6, color: "text-yellow-400", estado: "amarillo" }
];

const serviciosCurso = [
  { id: "#001", ubicacion: "Pozo 32", estado: "verde", movil: "Móvil 1001", responsable: "Juan Pérez" },
  { id: "#002", ubicacion: "Pozo 18", estado: "amarillo", movil: "Móvil 1002", responsable: "Lucía Díaz" },
  { id: "#003", ubicacion: "Pozo 22", estado: "verde", movil: "Móvil 1003", responsable: "Carlos Gómez" },
  { id: "#004", ubicacion: "Pozo 10", estado: "verde", movil: "Móvil 1004", responsable: "Mariana Ruiz" },
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

export default function Map2() {
  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white flex flex-col">
      {/* Título superior */}
      <div className="text-4xl text-yellow-400 font-bold text-center py-4 border-b border-white">
        Monitoreo integral - Sanzza
      </div>

      <main className="flex flex-1">
        {/* Columna de Estado y KPI */}
        <div className="w-1/4 bg-black border-r border-white p-4 flex flex-col gap-8">
          {/* Estado */}
          <div>
            <div className="text-3xl text-yellow-400 text-center mb-4 font-semibold">Estado</div>
            <div className="grid grid-cols-2 gap-4">
              {resumen.map((r, i) => (
                <div key={i} className="bg-gray-800 text-white p-3 rounded flex flex-col items-center justify-center border border-white">
                  <div className="text-white text-sm">{r.label}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-3 h-3 rounded-full ${getColorDot(r.estado)}`}></div>
                    <div className={`text-4xl font-bold ${r.color}`}>{r.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KPI */}
          <div>
            <div className="text-3xl text-yellow-400 text-center mb-4 font-semibold">KPI</div>
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((kpi, i) => (
                <div key={i} className="bg-gray-800 text-white p-3 rounded border border-white flex flex-col items-center">
                  <div className="text-center text-white text-sm mb-1">{kpi.label}</div>
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
                      style={{ transition: "stroke-dashoffset 0.6s ease" }}
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
        </div>

        {/* Mapa y servicios pendientes */}
        <div className="flex-1 flex flex-col">
          <div style={{ height: "720px" }} className="overflow-hidden">
            <Mapa />
          </div>
          <div className="border-t border-white p-4">
            <h2 className="text-yellow-400 font-bold text-2xl mb-2">Servicios pendientes</h2>
            <div className="grid grid-cols-1 gap-2">
              {[
                "#PEN101 - Pozo 61 - Prioridad: Alta",
                "#PEN102 - Pozo 62 - Prioridad: Media",
                "#PEN103 - Pozo 63 - Prioridad: Alta",
                "#PEN104 - Pozo 64 - Prioridad: Media",
                "#PEN105 - Pozo 65 - Prioridad: Alta",
                "#PEN106 - Pozo 66 - Prioridad: Media"
              ].map((text, i) => (
                <div key={i} className="bg-gray-800 text-white p-3 rounded border border-white">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios en curso */}
        <div className="w-1/4 bg-black border-l border-white p-4">
          <div className="text-3xl text-yellow-400 text-center mb-4 font-semibold">Servicios en curso</div>
          <div className="flex flex-col gap-4">
            {serviciosCurso.map((s, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded border border-white text-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-3 h-3 rounded-full ${getColorDot(s.estado)}`}></div>
                  <div className="font-bold">{s.id}</div>
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
