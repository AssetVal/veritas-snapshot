export interface iLicense {
  number: string,
  expiration: Date,
  typeOf: string,
  state: string,
  isExpired: boolean,
  uploaded: Date,
}

export default class License implements iLicense {
  expiration: Date;
  isExpired: boolean;
  number: string;
  state: string;
  typeOf: string;
  uploaded: Date;

  constructor(license: iLicense = null) {
    this.expiration = license?.expiration;
    this.isExpired = license?.isExpired;
    this.number = license?.number;
    this.state = license?.state;
    this.typeOf = license?.typeOf;
    this.uploaded = license?.uploaded;
  }
}
