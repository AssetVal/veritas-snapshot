import type User from './User';
import BaseVendor from './BaseVendor';
import type IBaseVendor from './BaseVendor'
import type LicenseStack from './LicenseStack';
import type Order from './Order';

export type iPaymentPreferenceChanges = 'remittanceEntityType'|'verified'|'remittanceEntityName'|'paymentMethod'|'taxIDNumber'|'last3OfTaxID'
export type iCheckChanges = 'mailCheckTo'|'payToName'|'payToCareOf'|'checkAddressType'
export type iDirectDepositChanges = 'bankName'|'bankAccountName'|'bankAccountType'|'bankRoutingNum'|'bankAccountNum'
export type iExperienceChanges = 'Real Estate Experience'|'Commercial Real Estate Experience'

export interface iUnverifiedChanges {
  change: iExperienceChanges|iDirectDepositChanges|iCheckChanges|iPaymentPreferenceChanges|'W9'|'License',
  was?: any,
}

export interface iComment {
  content: string,
  visibleToUser: boolean,
  createdOn: Date,
  author: string,
  editedByName: string,
  editedOn: Date,
  writtenBy: User;
  editedBy: User
}

export interface iAddress {
  street?: string,
  unitNumber?: string,
  city?: string,
  state?: string,
  zip?: string,
  location?: {coordinates: Array<number>}
  CBSA?: string,
  county?: string,
  phone?: string,
  phoneExt?: string,
}

export interface iVendor extends IBaseVendor {
  _id: any;
  user: User,
  realtorCode: number,
  snapshotPreferences: {
    preferredMapApp: 'Google Maps'|'Waze',
    pushNotifications: boolean,
  }
  paymentPreferences: {
    paymentMethod: string,
    remittanceEntityName: string,
    remittanceEntityType: string,
    taxIDNumber: string,
    last3OfTaxID: string,
    checkPreferences?: {
      checkAddressType: string,
      mailCheckTo: {
        street: string,
        unit?: string,
        city: string,
        state: string,
        zip: string,
      },
      payToName: string,
      payToCareOf: string,
    },
    directDepositPreferences?: {
      bankName: string,
      bankAccountName: string,
      bankRoutingNum: string,
      bankAccountNum: string,
      bankAccountType: string,
    },
    verified: boolean,
  },
  paymentMethod: string,
  comments: Array<iComment>,
  unverifiedChanges: Array<iUnverifiedChanges>,
  unverifiedChangesLength: number,
  unverifiedPaymentChanges: Array<iUnverifiedChanges>,
  unverifiedPaymentChangesLength: number,
  metrics: {
    responseToEmail: Array<{
      timeToRespond: number,
      response: 'nonResponse' | 'accepted' | 'declined'
    }>,
    responseToSMS: Array<{
      timeToRespond: number,
      response: 'nonResponse' | 'accepted' | 'declined'
    }>,
    analystRatings: Array<{
      score: number,
      comment: string,
      author: User,
    }>,
    ordersCompleted: number,
    extensionsRequested: number,
    orderEarlyMinutes: number,
    orderLateMinutes: number,
    clarificationsRequested: number,
    reworkRequested: number,
    clarificationTimeToComplete: number,
    reworkTimeToComplete: number,
    clientAcceptanceRate: number,
  },
  orders: {
    pending: Array<Order>,
    declined: [{
      order: Order['_id'],
      declinedOn: Date,
    }]
    inProgress: Array<Order>,
    completed: Array<Order>,
  }
  licenses: LicenseStack;
}

export class Vendor extends BaseVendor {
  _id: any
  snapshotPreferences: {
    preferredMapApp: 'Google Maps'|'Waze',
    pushNotifications: boolean,
  };
  user: User;
  realtorCode: number;
  paymentPreferences: {
    paymentMethod: string,
    remittanceEntityName: string,
    remittanceEntityType: string,
    taxIDNumber: string,
    last3OfTaxID: string,
    checkPreferences?: {
      checkAddressType: string,
      mailCheckTo: {
        street: string,
        unit?: string,
        city: string,
        state: string,
        zip: string,
      },
      payToName: string,
      payToCareOf: string,
    },
    directDepositPreferences?: {
      bankName: string,
      bankAccountName: string,
      bankRoutingNum: string,
      bankAccountNum: string,
      bankAccountType: string,
    },
    verified: boolean,
  };
  paymentMethod: string;
  comments: Array<iComment>;
  unverifiedChanges: Array<iUnverifiedChanges>;
  unverifiedChangesLength: number;
  unverifiedPaymentChanges: Array<iUnverifiedChanges>;
  unverifiedPaymentChangesLength: number;
  metrics: {
    responseToEmail: Array<{
      timeToRespond: number,
      response: 'nonResponse' | 'accepted' | 'declined'
    }>,
    responseToSMS: Array<{
      timeToRespond: number,
      response: 'nonResponse' | 'accepted' | 'declined'
    }>,
    analystRatings: Array<{
      score: number,
      comment: string,
      author: User,
    }>,
    ordersCompleted: number,
    extensionsRequested: number,
    orderEarlyMinutes: number,
    orderLateMinutes: number,
    clarificationsRequested: number,
    reworkRequested: number,
    clarificationTimeToComplete: number,
    reworkTimeToComplete: number,
    clientAcceptanceRate: number,
  };
  orders: {
    pending: Array<Order>,
    declined: [{
      order: Order['_id'],
      declinedOn: Date,
    }]
    inProgress: Array<Order>,
    completed: Array<Order>,
  };
  licenses: LicenseStack;
  constructor(id: string = 'noUser') { // Default to noUser if initialized without assignment
    super()
    this._id = id;
  }
}
export default Vendor;
