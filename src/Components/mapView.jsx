import React from 'react';
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = (props) => {
  return (
    <>        
      <div className='text-blue-color dark:text-gray-50'>
        <h4 className="text-xl font-medium py-3">Direction</h4>
        <div className="w-full h-80 rounded-xl">
          <MapContainer
            center={props.mapLocation}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.mapLocation}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
          
        </div>
      </div>
      
    </>
  )
}

export default MapView