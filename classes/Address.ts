type Longitude = number;
type Latitude = number;
type Location = [Longitude, Latitude];

interface iAddress {
  street: string,
  unitNumber?: string,
  city: string,
  state: string,
  zip: string,
  location?: {
    coordinates: Location
  }
  CBSA?: string,
  county?: string,
  phone?: string,
  phoneExt?: string,
}

export default class Address implements iAddress {
  street: string;
  unitNumber?: string;
  city: string;
  state: string;
  zip: string;
  location?: {
    coordinates: Location
  }
  CBSA?: string;
  county?: string;
  phone?: string;
  phoneExt?: string;

  constructor({street, unitNumber, city, state, zip}: iAddress) {
    this.street = street;
    this.unitNumber = unitNumber;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
