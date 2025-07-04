import React, { useEffect, useState } from "react";
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
  { id: "#001", ubicacion: "Pozo: AMO-1001 - Cliente: Capex", estado: "verde", movil: "SANZZA 03", responsable: "Lizama Marcelo" },
  { id: "#002", ubicacion: "Pozo: FP-1475  - Cliente: Tecpetrol", estado: "amarillo", movil: "SANZZA 01", responsable: "Cerda Facundo" },
  { id: "#003", ubicacion: "Pozo: FP-1326  - Cliente: Tecpetrol", estado: "verde", movil: "SANZZA 02", responsable: "Gomez Tomas" }
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
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
      setDateTime({ date, time });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white flex flex-col">
      {/* Encabezado con logo, título y fecha/hora */}
      <div className="relative border-b border-white py-6 px-6 flex items-center justify-center">
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <img src="/logo-s.png" alt="Logo Sanzza" className="h-20" />
        </div>
        <div className="text-4xl text-yellow-400 font-bold text-center">
          Monitoreo integral - Sanzza
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-2xl text-right leading-tight font-bold tracking-wide">
          <div>{dateTime.date}</div>
          <div>{dateTime.time}</div>
        </div>
      </div>

      <main className="flex flex-1">
        {/* Columna izquierda: Estado, KPIs y Chat */}
        <div className="w-1/4 bg-black border-r border-white p-4 flex flex-col gap-8">
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

          <div>
            <div className="text-3xl text-yellow-400 text-center mb-4 font-semibold">KPIs</div>
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((kpi, i) => (
                <div key={i} className="bg-gray-800 text-white p-3 rounded border border-white flex flex-col items-center">
                  <div className="text-center text-white text-sm mb-1">{kpi.label}</div>
                  <svg width="100" height="100" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r={radius} stroke="#374151" strokeWidth={stroke} fill="none" />
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
                    <text x="60" y="66" textAnchor="middle" fontSize="22" fill="white" fontWeight="bold">
                      {kpi.value}%
                    </text>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 text-white p-3 rounded border border-white">
            <div className="text-yellow-400 text-lg font-bold mb-4">Chat con Móvil: SANZZA 03</div>
            <div className="space-y-3 text-sm">

              {/* Mensaje del coordinador */}
              <div className="flex flex-col items-start">
                <div className="bg-blue-600 px-3 py-2 rounded-lg max-w-[90%]">
                  <div className="font-semibold">Coordinador</div>
                  <div>¿Podrías sacar una foto para sumar al reporte?</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">04/07/2025 10:14</div>
              </div>

              {/* Mensaje de Lizama */}
              <div className="flex flex-col items-end">
                <div className="bg-green-600 px-3 py-2 rounded-lg max-w-[90%] text-right">
                  <div className="font-semibold">Lizama Marcelo</div>
                  <div>Ok, lo sumo en el reporte en la actividad 4 y lo menciono en las observaciones.</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">04/07/2025 10:15</div>
              </div>

              {/* Respuesta del coordinador */}
              <div className="flex flex-col items-start">
                <div className="bg-blue-600 px-3 py-2 rounded-lg max-w-[90%]">
                  <div className="font-semibold">Coordinador</div>
                  <div>Perfecto, gracias!</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">04/07/2025 10:16</div>
              </div>
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
              {["#1 FP-1501 TECPETROL - Prioridad: Alta", "#2 ADC -1060 CAPEX   - Prioridad: Media", "#3 PPa- 21 TECPETROL - Prioridad: Alta"].map((text, i) => (
                <div key={i} className="bg-gray-800 text-white p-3 rounded border border-white">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios en curso y video */}
        <div className="w-1/4 bg-black border-l border-white p-4 flex flex-col gap-4">
          <div>
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

          <div className="bg-gray-800 rounded border border-white p-2">
            <div className="text-yellow-400 text-center font-semibold mb-2">Video directo - SANZZA 03</div>
            <img src="/video.jpeg" alt="Stream SANZZA 03" className="w-full h-64 object-cover rounded" />
          </div>
        </div>
      </main>
    </div>
  );
}