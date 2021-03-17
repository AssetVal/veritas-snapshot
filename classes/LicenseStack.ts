import type License from './License';

export interface iLicenseStack {
  license: Array<License>
}

export default class LicenseStack implements iLicenseStack {
  license: Array<License>;

  constructor() {
    this.license = [];
  }
}
