
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  useEffect(() => {
    const map = L.map("map").setView([-38.7, -69.25], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet & OpenStreetMap",
    }).addTo(map);

    const iconoVerde = new L.Icon({
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
      iconSize: [32, 32],
    });

    const iconoAmarillo = new L.Icon({
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      iconSize: [32, 32],
    });

    const camionetaIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/743/743920.png",
      iconSize: [32, 32],
    });

    const puntos = [
      { coord: [-38.70, -69.25], movil: 1, servicio: 101, estado: "verde" },
      { coord: [-38.72, -69.26], movil: 2, servicio: 102, estado: "amarillo" },
      { coord: [-38.74, -69.24], movil: 3, servicio: 103, estado: "verde" },
      { coord: [-38.76, -69.27], movil: 4, servicio: 104, estado: "amarillo" },
    ];

    const etiquetaStyle = "background: black; color: white; padding: 8px 12px; font-size: 1.4rem; border-radius: 6px; white-space: nowrap;";

    puntos.forEach((punto) => {
      const icono = punto.estado === "verde" ? iconoVerde : iconoAmarillo;

      const marker = L.marker(punto.coord, { icon: icono }).addTo(map);

      const etiquetaIcon = L.divIcon({
        className: "etiqueta-movil",
        html: `<div style="${etiquetaStyle}">Móvil ${punto.movil} - Serv ${punto.servicio}</div>`,
        iconSize: null,
      });

      L.marker([punto.coord[0] + 0.005, punto.coord[1]], {
        icon: etiquetaIcon,
      }).addTo(map);
    });

    // Móvil en movimiento
    const ruta = [
      [-38.623, -69.133],
      [-38.65, -69.18],
      [-38.68, -69.23],
      [-38.71, -69.27],
      [-38.75, -69.3],
    ];

    const destino = [-38.75, -69.3];

    const markerMovil = L.marker(ruta[0], { icon: camionetaIcon }).addTo(map).bindPopup("En camino");
    L.marker(destino, { icon: iconoVerde }).addTo(map).bindPopup("Destino");

    L.polyline(ruta, { color: "blue" }).addTo(map);
    map.fitBounds(L.polyline(ruta).getBounds());

    let i = 0;
    const interval = setInterval(() => {
      if (i < ruta.length) {
        markerMovil.setLatLng(ruta[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 3000); // más lento

    const labelMovil = L.divIcon({
      className: "etiqueta-movil",
      html: `<div style="${etiquetaStyle}">Móvil 5 - Serv 105</div>`,
      iconSize: null,
    });

    L.marker([ruta[0][0] + 0.005, ruta[0][1]], { icon: labelMovil }).addTo(map);

    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: "100vh" }} />;
};

export default Mapa;
