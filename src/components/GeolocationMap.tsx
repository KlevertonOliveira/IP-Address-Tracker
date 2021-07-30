import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import { Icon } from 'leaflet';
import ChangeView from './ChangeView';
import { useGlobalContext } from '../contexts/Context';

const iconLocation = new Icon({
  iconUrl:'/images/icon-location.svg',
  iconSize:[37.5, 50],
})

const GeolocationMap = () => {

  const {queryGeolocationData} = useGlobalContext();

  const {coordinates:{latitude, longitude}} = queryGeolocationData;
  
  return (
    <div id='mapid'>
      <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true}>
        <ChangeView center={[latitude, longitude]} zoom={13} /> 
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[latitude, longitude]}
          icon={iconLocation}>
        </Marker>
      </MapContainer>
    </div>
  )
};

export default GeolocationMap;