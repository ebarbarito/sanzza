import React, { useState } from "react";

export default function VideoWall() {
  const serviciosCurso = [
    { id: "#001", ubicacion: "Pozo 32", estado: "en curso", movil: "Móvil 1001", responsable: "Juan Pérez" },
    { id: "#002", ubicacion: "Pozo 18", estado: "en curso-demorado", movil: "Móvil 1002", responsable: "Lucía Díaz" },
    { id: "#003", ubicacion: "Pozo 22", estado: "en curso", movil: "Móvil 1003", responsable: "Carlos Gómez" },
    { id: "#004", ubicacion: "Pozo 10", estado: "en curso-demorado", movil: "Móvil 1004", responsable: "Mariana Ruiz" }
  ];

  const pendientes = Array.from({ length: 6 }).map((_, i) => ({
    id: `#PEN${100 + i}`,
    ubicacion: `Pozo ${60 + i}`,
    prioridad: i % 2 === 0 ? "Alta" : "Media"
  }));

  const kpis = [
    { label: "Servicios Activos", value: 70, color: "#facc15" }, // amarillo
    { label: "Tiempos de Arribo", value: 78, color: "#22c55e" }, // verde
    { label: "Alarmas Técnicas", value: 90, color: "#facc15" },  // amarillo
    { label: "Productividad Cuadrilla", value: 85, color: "#22c55e" } // verde
  ];

  const resumen = [
    { label: "Móviles operativos", value: 5 },
    { label: "Servicios en curso", value: serviciosCurso.length },
    { label: "Servicios pendientes", value: pendientes.length }
  ];

  const estadoColor = (estado) => {
    if (estado === "en curso") return "bg-green-400";
    if (estado === "en curso-demorado") return "bg-yellow-400";
    return "bg-gray-400";
  };

  const normalize = (val) => 283 - (val / 100) * 283;
  const radius = 45;
  const stroke = 8;

  return (
    <div className="p-6 bg-black text-white min-h-screen flex flex-col gap-8 text-2xl relative">
      {/* Sección de resumen estado */}
      <div className="flex gap-8 text-3xl bg-[#1e1e2f] p-4 rounded-lg justify-around">
        {resumen.map((r, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-gray-400 text-xl">{r.label}</div>
            <div className="font-bold text-green-400 text-4xl">{r.value}</div>
          </div>
        ))}
      </div>

      {/* KPIs tipo gauge */}
      <div className="grid grid-cols-4 gap-6 bg-[#1e1e2f] p-6 rounded-xl">
        {kpis.map((kpi, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-2xl mb-2">{kpi.label}</div>
            <svg width="120" height="120" viewBox="0 0 120 120">
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
                fontSize="26"
                fill="white"
                fontWeight="bold"
              >
                {kpi.value}%
              </text>
            </svg>
          </div>
        ))}
      </div>

      {/* Servicios en curso */}
      <div className="bg-[#1e1e2f] rounded-lg p-6">
        <h2 className="text-4xl font-semibold mb-6 text-gray-200">Servicios en curso</h2>
        <div className="grid grid-cols-4 gap-6">
          {serviciosCurso.map((s) => (
            <div key={s.id} className="bg-[#2a2a3a] p-6 rounded-lg text-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-5 h-5 rounded-full ${estadoColor(s.estado)}`}></div>
                <div className="font-bold">{s.id}</div>
              </div>
              <div className="text-gray-300">{s.ubicacion}</div>
              <div className="text-gray-400 mt-2">Móvil: {s.movil}</div>
              <div className="text-gray-400">Resp: {s.responsable}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Servicios pendientes formato fila única */}
      <div className="bg-[#1e1e2f] rounded-lg p-6">
        <h2 className="text-4xl font-semibold mb-6 text-yellow-400">Servicios pendientes</h2>
        <div className="grid grid-cols-1 gap-4">
          {pendientes.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-6 gap-4 bg-[#2a2a3a] p-4 rounded-lg text-lg items-center"
            >
              <div className="font-bold">{s.id}</div>
              <div>{s.ubicacion}</div>
              <div className="text-sm text-gray-400">Prioridad: {s.prioridad}</div>
              <div className="text-sm text-gray-400">Cliente Sugerido</div>
              <div className="text-sm text-gray-400">Móvil Sugerido</div>
              <div className="text-sm text-gray-400">Tiempo Estimado</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}