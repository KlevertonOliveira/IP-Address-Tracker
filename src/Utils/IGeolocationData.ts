export type GeolocationDataType = {
  ip: string;
  location:{
    city: string;
    country: string;
  }
  coordinates:{
    latitude: number;
    longitude: number;
  }
  postalCode: string;
  timezone: string;
  isp: string;
}