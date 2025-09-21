import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

interface StateData {
  pacientes?: number;
  medicos?: number;
  hospitais?: number;
  [key: string]: number | undefined; 
}

interface ChoroplethMapProps {
  geoJsonData: GeoJSON.FeatureCollection;
  data: {
    [key: string]: StateData;
  };
  valueKey: string; 
}

function getColor(d: number, maxVal: number) {
  const normalizedVal = d / maxVal;
  return normalizedVal > 0.9 ? '#800026' :
         normalizedVal > 0.75 ? '#BD0026' :
         normalizedVal > 0.6 ? '#E31A1C' :
         normalizedVal > 0.45 ? '#FC4E2A' :
         normalizedVal > 0.3 ? '#FD8D3C' :
         normalizedVal > 0.15 ? '#FEB24C' :
         normalizedVal > 0.05 ? '#FED976' :
         '#FFEDA0';
}

const ChoroplethMap: React.FC<ChoroplethMapProps> = ({ geoJsonData, data, valueKey }) => {
  
  const maxVal = Math.max(...Object.values(data).map(d => d[valueKey] || 0));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onEachFeature = (feature, layer: L.Layer) => {

    const name = feature.properties.name || feature.properties.NOMEMUNIC;
    

    const stateValues = data[name] || {};
    const pacientes = stateValues.pacientes || 0;
    const medicos = stateValues.medicos || 0;
    const hospitais = stateValues.hospitais || 0;


    (layer as L.Polyline).setStyle({
      fillColor: getColor(stateValues[valueKey] || 0, maxVal),
      weight: 2,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7,
    });

    layer.bindPopup(`
      <b>${name}</b><br/>
      Pacientes: ${pacientes}<br/>
      Médicos: ${medicos}<br/>
      Hospitais: ${hospitais}
    `);

    layer.on({
      mouseover: (e) => {
        const target = e.target as L.Polyline;
        target.setStyle({
          weight: 5,
          color: '#666',
          fillOpacity: 0.9,
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          target.bringToFront();
        }
      },
      mouseout: (e) => {
        (e.target as L.Polyline).setStyle({
          weight: 2,
          color: 'white',
          fillOpacity: 0.7,
        });
      },
    });
  };

  return (
    <Box sx={{ height: '500px', width: '100%' }}>
      <MapContainer 
        center={[-14.235, -51.9253]} 
        zoom={4} 
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />
      </MapContainer>
    </Box>
  );
};

export default ChoroplethMap;