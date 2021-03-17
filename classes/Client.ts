import type Address from './Address';
import type ProductType from './ProductType';
import type ClientUser from './ClientUser';

interface iClient {
  address: Address,
  admin: ClientUser,
  alias: string,
  billingPreferences: {
    billingContact: {
      email: string,
      name: string,
      phone: string,
    },
    billingEmailCCList: Array< string >,
  },
  displayName: string,
  emailSubjectLine: string,
  fileNameFormat: string,
  idCode: string,
  invoicePreferences: {
    format: string,
    frequency: string,
    recipient: string,
  },
  jsonToken: string,
  log: Array< any >,
  name: string,
  orderDefaults: {
    checkForDuplicatesFor: number,
    enhancedReview: boolean,
    formType: string,
    linkReportFrequency: number,
    linkReportType: string,
    preventAutoAssignPeriod: number,
    preventAutoSubmission: boolean,
    productName: string,
    requireMls: boolean,
    requirePhotos: boolean,
  },
  orderFulfilmentPrimary: ClientUser,
  orderFulfilmentSecondary: ClientUser,
  orderInstructions: {
    exteriorInstruction: string,
    interiorInstruction: string,
    productType: string,
  },
  productPrices: Array<{
    exterior: {
      rush: number,
      standard: number,
    },
    interior: {
      rush: number,
      standard: number,
    },
    product: ProductType,
  }>,
  qualityAssurancePrimary: ClientUser,
  qualityAssuranceSecondary: ClientUser,
  reworkNotifications: {
    attachReport: boolean,
    recipients: Array< string >,
    send: boolean,
  },
  updated: Date,
  camelName: () => string,
}

export default class Client implements iClient {
  address: Address;
  admin: ClientUser;
  alias: string;
  billingPreferences: {billingContact: {email: string; name: string; phone: string}; billingEmailCCList: Array<string>};
  displayName: string;
  emailSubjectLine: string;
  fileNameFormat: string;
  idCode: string;
  invoicePreferences: {format: string; frequency: string; recipient: string};
  jsonToken: string;
  log: Array<any>;
  name: string;
  orderDefaults: {checkForDuplicatesFor: number; enhancedReview: boolean; formType: string; linkReportFrequency: number; linkReportType: string; preventAutoAssignPeriod: number; preventAutoSubmission: boolean; productName: string; requireMls: boolean; requirePhotos: boolean};
  orderFulfilmentPrimary: ClientUser;
  orderFulfilmentSecondary: ClientUser;
  orderInstructions: {exteriorInstruction: string; interiorInstruction: string; productType: string};
  productPrices: Array<{exterior: {rush: number; standard: number}; interior: {rush: number; standard: number}; product: ProductType}>;
  qualityAssurancePrimary: ClientUser;
  qualityAssuranceSecondary: ClientUser;
  reworkNotifications: {attachReport: boolean; recipients: Array<string>; send: boolean};
  updated: Date;

  camelName(): string {
    return '';
  }
}
