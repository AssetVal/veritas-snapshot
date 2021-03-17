import type Address from './Address';

export interface iMLS {
  description: string,
  membershipNumber: string,
  MLSId?: string,
  state: string,
}

export interface IBaseVendor {
  eSigGeneratorFont: 'satisfy'|'dancingScript'|'greatVibes'|'homemadeApple'|'marckScript'|'sacramento',
  secondaryEmail: string,
  phoneNumber: string,
  phoneType: string,
  website: string,
  hasREOExperience: boolean,
  realEstateExperience: string,
  reoExperience: string,
  yearBecameActiveInCommerc: number,
  residentialSalesClosedLastYear: number,
  reoSalesLastYear: number,
  commercialSalesLastYear: number,
  yearBecameRealEstateAgent: number
  brokerFullName: string
  brokerageName: string,
  homeAddress: Address,
  brokerageAddress: Address,
  proximityAddress: Address,
  useWhichAddress: 'useHomeOfficeAddress'|'useBrokerageAddress',
  CBSA: string,
  orderCapacity: number,
  willPerform: Array<'residential'|'commercial'|'inspections'|'interiors'>,
  unavailableTime: Array<{
    to: Date,
    from: Date,
    _id?: string,
  }>,
  commercialRealEstateExperience: string,
  selfDesignation: Array<string>,
  commercialOtherDescript: string,
  informationSources: Array<string>,
  commercialInfoOtherDescript: string,
  liabilityPolicy: boolean,
  liabilityPolicyProvider: string,
  liabilityPolicyExpiration: Date,
  liabilityPolicyLimit: string,
  social: string,
  last3OfSocial: string,
  licensedInMultipleStates: boolean,
  statesLicensedIn: Array<string>,
  licensedAppraiser: boolean,
  dateCreated: Date,
  updated: Date,
  profileCreated: boolean,
  indemnified: boolean,
  howManyStatesLicensedIn: number,
  interiorExclusionRealtor: boolean,
  eSigStatus: boolean,
  noMLSinArea: boolean,
  mlsDataSources: Array<iMLS>,
  primaryPhone: string,
  smsEnabled: boolean,
  smsAgreementSigned: boolean,
  receive2FA: boolean,
  smsNotification: Array<'order'|'message'|'reminder'|'twoFactor'>,
  emailNotification: Array<'order'|'message'|'reminder'>,
  verified: boolean,
  log: Array<Record<string, any>>,
  proximityLocation: Array<string>,
  contactNumber: string,
  primaryPhoneType: string,
  brokeragePlusExt: string,
  homeUnitBool: boolean,
  brokerageUnitBool: boolean,
  female: boolean,
  male: boolean,
  plainPhone: string,
}

export default abstract class BaseVendor implements IBaseVendor {
  eSigGeneratorFont: 'satisfy'|'dancingScript'|'greatVibes'|'homemadeApple'|'marckScript'|'sacramento';
  secondaryEmail: string;
  phoneNumber: string;
  phoneType: string;
  website: string;
  hasREOExperience: boolean;
  realEstateExperience: string;
  reoExperience: string;
  yearBecameActiveInCommerc: number;
  residentialSalesClosedLastYear: number;
  reoSalesLastYear: number;
  commercialSalesLastYear: number;
  yearBecameRealEstateAgent: number
  brokerFullName: string
  brokerageName: string;
  homeAddress: Address;
  brokerageAddress: Address;
  proximityAddress: Address;
  useWhichAddress: 'useHomeOfficeAddress'|'useBrokerageAddress';
  CBSA: string;
  orderCapacity: number;
  willPerform: Array<'residential'|'commercial'|'inspections'|'interiors'>;
  unavailableTime: Array<{
    to: Date,
    from: Date,
    _id?: string,
  }>;
  commercialRealEstateExperience: string;
  selfDesignation: Array<string>;
  commercialOtherDescript: string;
  informationSources: Array<string>;
  commercialInfoOtherDescript: string;
  liabilityPolicy: boolean;
  liabilityPolicyProvider: string;
  liabilityPolicyExpiration: Date;
  liabilityPolicyLimit: string;
  social: string;
  last3OfSocial: string;
  licensedInMultipleStates: boolean;
  statesLicensedIn: Array<string>;
  licensedAppraiser: boolean;
  dateCreated: Date;
  updated: Date;
  profileCreated: boolean;
  indemnified: boolean;
  howManyStatesLicensedIn: number;
  interiorExclusionRealtor: boolean;
  eSigStatus: boolean;
  noMLSinArea: boolean;
  mlsDataSources: Array<iMLS>;
  primaryPhone: string;
  smsEnabled: boolean;
  smsAgreementSigned: boolean;
  receive2FA: boolean;
  smsNotification: Array<'order'|'message'|'reminder'|'twoFactor'>;
  emailNotification: Array<'order'|'message'|'reminder'>;
  verified: boolean;
  log: Array<Record<string, any>>;
  proximityLocation: Array<string>;
  contactNumber: string;
  primaryPhoneType: string;
  brokeragePlusExt: string;
  homeUnitBool: boolean;
  brokerageUnitBool: boolean;
  female: boolean;
  male: boolean;
  plainPhone: string;
  protected constructor(vendor: IBaseVendor) {
    Object.assign(this, vendor);
  }
}
