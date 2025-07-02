import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";

export default function Dashboard() {
  const servicios = [
    { id: "#001", ubicacion: "Pozo 32", cliente: "YPF", contacto: { nombre: "Laura", telefono: "11-4567-8901" }, responsable: "Juan Pérez", estado: "en curso", arribo: "11:30", fin: "13:00" },
    { id: "#002", ubicacion: "Pozo 18", cliente: "Pampa Energía", contacto: { nombre: "Carlos", telefono: "11-7890-1234" }, responsable: "Lucía Díaz", estado: "en curso-demorado", arribo: "09:45", fin: "12:15", demora: "25 min" },
    { id: "#003", ubicacion: "Pozo 22", cliente: "Vista Oil", contacto: { nombre: "Sofía", telefono: "11-9876-5432" }, responsable: "Carlos Gómez", estado: "en curso", arribo: "10:00", fin: "11:45" },
    { id: "#004", ubicacion: "Pozo 10", cliente: "Shell Argentina", contacto: { nombre: "Pedro", telefono: "11-2222-3333" }, responsable: "Mariana Ruiz", estado: "en curso-demorado", arribo: "08:20", fin: "10:30", demora: "45 min" }
  ];

  const programados = Array.from({ length: 10 }).map((_, i) => ({
    id: `#P${100 + i}`,
    hora: `${7 + i}:00`,
    ubicacion: `Pozo ${50 + i}`,
    cliente: `Cliente ${i + 1}`,
    contacto: `Contacto ${i + 1}`,
    movil: `Móvil ${1000 + i}`,
    tiempo: `${60 + i * 5} min`,
    tipo: "Mantenimiento preventivo"
  }));

  const [seleccionado, setSeleccionado] = useState(null);

  const estadoClase = (estado) => {
    if (estado === "en curso") return "text-green-600 font-semibold";
    if (estado === "en curso-demorado") return "text-yellow-600 font-semibold";
    return "text-gray-600";
  };

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <Card>
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Servicios en curso</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Ubicación</th>
                  <th className="text-left p-2">Cliente</th>
                  <th className="text-left p-2">Contacto</th>
                  <th className="text-left p-2">Responsable</th>
                  <th className="text-center p-2">Estado</th>
                  <th className="text-center p-2">Arribo</th>
                  <th className="text-center p-2">Fin estimado</th>
                  <th className="text-center p-2">Demora</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((s) => (
                  <tr key={s.id} className="border-t hover:bg-gray-100 cursor-pointer" onClick={() => setSeleccionado(s)}>
                    <td className="p-2">{s.id}</td>
                    <td className="p-2">{s.ubicacion}</td>
                    <td className="p-2">{s.cliente}</td>
                    <td className="p-2">{s.contacto.nombre}</td>
                    <td className="p-2">{s.responsable}</td>
                    <td className={`p-2 text-center ${estadoClase(s.estado)}`}>{s.estado}</td>
                    <td className="p-2 text-center">{s.arribo}</td>
                    <td className="p-2 text-center">{s.fin}</td>
                    <td className="p-2 text-center">{s.estado === "en curso-demorado" ? s.demora : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {seleccionado && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Detalle del servicio {seleccionado.id}</h2>
            <ul className="text-sm space-y-1">
              <li><strong>Cliente:</strong> {seleccionado.cliente}</li>
              <li><strong>Ubicación:</strong> {seleccionado.ubicacion}</li>
              <li><strong>Contacto:</strong> {seleccionado.contacto.nombre} ({seleccionado.contacto.telefono})</li>
              <li><strong>Responsable:</strong> {seleccionado.responsable}</li>
              <li><strong>Estado:</strong> {seleccionado.estado}</li>
              <li><strong>Hora de arribo:</strong> {seleccionado.arribo}</li>
              <li><strong>Fin estimado:</strong> {seleccionado.fin}</li>
              {seleccionado.demora && <li><strong>Demora:</strong> {seleccionado.demora}</li>}
              <li><strong>Tipo de tarea:</strong> Inspección rutinaria</li>
              <li><strong>Observaciones:</strong> Tarea sin novedades</li>
              <li><strong>Cuadrilla:</strong> Juan, Ana, Pedro</li>
              <li><strong>Equipamiento:</strong> Camión + bomba hidráulica</li>
            </ul>
          </CardContent>
        </Card>
      )}

      <Card className="mt-6">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Servicios programados</h1>
          <div className="overflow-y-auto max-h-64 border rounded">
            <table className="w-full text-sm">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Hora</th>
                  <th className="text-left p-2">Ubicación</th>
                  <th className="text-left p-2">Cliente</th>
                  <th className="text-left p-2">Contacto</th>
                  <th className="text-left p-2">Móvil sugerido</th>
                  <th className="text-left p-2">Tiempo estimado</th>
                  <th className="text-left p-2">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {programados.map((s) => (
                  <tr key={s.id} className="border-t">
                    <td className="p-2">{s.id}</td>
                    <td className="p-2">{s.hora}</td>
                    <td className="p-2">{s.ubicacion}</td>
                    <td className="p-2">{s.cliente}</td>
                    <td className="p-2">{s.contacto}</td>
                    <td className="p-2">{s.movil}</td>
                    <td className="p-2">{s.tiempo}</td>
                    <td className="p-2">{s.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}