import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

interface HospitalData {
    nome: string;
    pacientes: number;
    medicos: number;
    hospitais: number;
    coordenadas: [number, number];
}

interface AccessibleHospitalMapProps {
    hospitalsData: HospitalData[];
    initialCoordinates?: [number, number];
}

const AccessibleHospitalMap: React.FC<AccessibleHospitalMapProps> = ({ hospitalsData, initialCoordinates }) => {
    const center = initialCoordinates || hospitalsData[0]?.coordenadas || [-14.235, -51.9253];

    return (
        <Box sx={{ height: '500px', width: '100%' }}>
            <MapContainer
                center={center}
                zoom={12}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {hospitalsData.map((hospital, index) => (
                    <Marker key={index} position={hospital.coordenadas}>
                        <Popup>
                            <b>{hospital.nome}</b><br/>
                            Pacientes: {hospital.pacientes}<br/>
                            Médicos: {hospital.medicos}<br/>
                            Hospitais: {hospital.hospitais}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
};

export default AccessibleHospitalMap;