import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapaEstilo() {
  useEffect(() => {
    // Crear el mapa centrado en Vaca Muerta
    const mapa = L.map("mapa", {
      center: [-38.7, -69.25],
      zoom: 9,
      zoomControl: true,
    });

    // Capas base
    const lightGrayTiles = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    );

    const darkTiles = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    );

    const satelliteTiles = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "© Esri",
        maxZoom: 19,
      }
    );

    // Agregar capa gris clara por defecto
    lightGrayTiles.addTo(mapa);

    // Control de capas
    const baseMaps = {
      "Gris Claro": lightGrayTiles,
      "Gris Oscuro": darkTiles,
      "Satelital": satelliteTiles,
    };
    L.control.layers(baseMaps).addTo(mapa);

    // Iconos
    const iconoVerde = new L.Icon({
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
      iconSize: [32, 32],
    });

    const iconoAmarillo = new L.Icon({
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      iconSize: [32, 32],
    });

    const moviles = [
      { coord: [-38.7, -69.25], nombre: "Móvil 1 - #001", icono: iconoVerde },
      { coord: [-38.72, -69.27], nombre: "Móvil 2 - #002", icono: iconoAmarillo },
      { coord: [-38.74, -69.23], nombre: "Móvil 3 - #003", icono: iconoVerde },
      { coord: [-38.76, -69.29], nombre: "Móvil 4 - #004", icono: iconoAmarillo },
    ];

    // Crear marcadores con etiquetas permanentes
    moviles.forEach((m) => {
      L.marker(m.coord, { icon: m.icono })
        .addTo(mapa)
        .bindTooltip(m.nombre, {
          permanent: true,
          direction: "bottom",
          className: "leaflet-tooltip-own",
          offset: [0, 16],
        });
    });

    return () => {
      mapa.remove();
    };
  }, []);

  return <div id="mapa" className="w-full h-full z-0" />;
}