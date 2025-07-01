import React, { useEffect } from "react";
import useLoadGoogleMaps from "../hooks/useLoadGoogleMaps";

const API_KEY = "AIzaSyAG6CEIgGwgYltMnBuH1FLK6mVQ9jhovmk";

const movilData = [
  {
    id: 1,
    nombre: "Móvil 1",
    lat: -38.592,
    lng: -69.167,
    estado: "en curso",
    cliente: "YPF",
    responsable: "Juan Pérez",
    movil: "Movil 12",
    tiempoEstimado: "2h",
    contacto: "Juan - 11 2345 6789",
    color: "green",
  },
  {
    id: 2,
    nombre: "Móvil 2",
    lat: -38.540,
    lng: -69.310,
    estado: "en curso-demorado",
    cliente: "Vista Oil",
    responsable: "María Gómez",
    movil: "Movil 7",
    tiempoEstimado: "3h",
    contacto: "María - 11 9876 5432",
    color: "yellow",
  },
  {
    id: 3,
    nombre: "Móvil 3",
    lat: -38.490,
    lng: -69.211,
    estado: "en curso",
    cliente: "Pan American Energy",
    responsable: "Carlos Ruiz",
    movil: "Movil 3",
    tiempoEstimado: "1h",
    contacto: "Carlos - 11 1111 2222",
    color: "green",
  },
  {
    id: 4,
    nombre: "Móvil 4",
    lat: -38.450,
    lng: -69.140,
    estado: "en curso-demorado",
    cliente: "Shell",
    responsable: "Laura Díaz",
    movil: "Movil 22",
    tiempoEstimado: "4h",
    contacto: "Laura - 11 3333 4444",
    color: "yellow",
  },
];

const Mapa = () => {
  const loaded = useLoadGoogleMaps(API_KEY);

  useEffect(() => {
    if (!loaded || !window.google) return;

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -38.55, lng: -69.25 },
      zoom: 9,
      mapTypeId: "roadmap",
    });

    movilData.forEach((movil) => {
      const iconUrl =
        movil.color === "green"
          ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          : "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";

      const marker = new window.google.maps.Marker({
        position: { lat: movil.lat, lng: movil.lng },
        map,
        icon: iconUrl,
        title: movil.nombre,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="font-family:sans-serif;font-size:14px">
            <strong>${movil.nombre}</strong><br/>
            Cliente: ${movil.cliente}<br/>
            Responsable: ${movil.responsable}<br/>
            Móvil: ${movil.movil}<br/>
            Estado: ${movil.estado}<br/>
            Tiempo Estimado: ${movil.tiempoEstimado}<br/>
            Contacto: ${movil.contacto}
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }, [loaded]);

  if (!loaded) return <div>Cargando mapa...</div>;

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default Mapa;
