import {useMap} from 'react-leaflet';

interface IChangeViewProps{
  center: [latitude:number, longitude:number];
  zoom:number;
}

const ChangeView = ({ center, zoom }:IChangeViewProps) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default ChangeView


