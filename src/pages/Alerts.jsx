import React from "react";
import { Card, CardContent } from "../components/ui/card";

export default function Alerts() {
  return (
    <Card>
      <CardContent>
        <h1 className="text-xl font-bold mb-4">Alertas reportadas</h1>
        <ul className="list-disc ml-6 text-sm">
          <li className="mb-1">Fuga detectada en Pozo 18</li>
          <li className="mb-1">Retraso en arribo de cuadrilla a Pozo 21</li>
          <li className="mb-1">Error en sensor de presión – Pozo 07</li>
        </ul>
      </CardContent>
    </Card>
  );
}