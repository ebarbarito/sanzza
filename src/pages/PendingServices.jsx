import React from "react";
import { Card, CardContent } from "../components/ui/card";

export default function PendingServices() {
  return (
    <Card>
      <CardContent>
        <h1 className="text-xl font-bold mb-4">Servicios pendientes</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Ubicación</th>
                <th className="text-left p-2">Tipo</th>
                <th className="text-left p-2">Urgencia</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">#002</td>
                <td className="p-2">Pozo 18</td>
                <td className="p-2">Revisión</td>
                <td className="p-2">Alta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}