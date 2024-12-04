"use client";

import { LatLngExpression, LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type MapProps = {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
};

const defaults = {
  zoom: 19,
};

const Maps = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map;

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      className="z-0 bg-white min-h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posix}>
        <Popup>Maps</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
