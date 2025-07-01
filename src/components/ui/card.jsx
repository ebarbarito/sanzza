import React from "react";
export function Card({ children }) {
  return <div className="bg-white shadow rounded-xl p-4 mb-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}