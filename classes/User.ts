import type Name from './Name';

type secondLanguages = 'Spanish'|'Portuguese'|'Mandarin'|'Cantonese'|'Filipino'|'German'|'French'|'Russian'|'Hindi'|'Yiddish';

export interface iUser {
  _id: string,
  name: Name,
  password: string,
  email: string,
  phone: string,
  phoneExt: string,
  phoneNumber: string,
  phoneType: string,
  profileStatus: string,
  securityID: string,
  msgToken: string,
  twoFactorAuth: boolean,
  jsonAuth: string,
  availabilityStatus: boolean,
  imgDef: boolean,
  desc: string,
  birthday: string,
  gender: 'male'|'female'|'other'|'undisclosed',
  secondLanguage: 'No'|secondLanguages,
  groups: string,
  logoChoice: string,
  quickSwitcher: boolean,
  hasMessages: boolean,
  emailConfirmed: boolean,
  smsEnabled: boolean,
  accessLevel: string,
  created: Date,
  updated: Date,
  lastLogin: Date,
  activityQueue: Array<Record<string, unknown>>,
  role: string,
}

export class User implements iUser {
  _id: string;
  accessLevel: string;
  activityQueue: Array<Record<string, unknown>>;
  availabilityStatus: boolean;
  birthday: string;
  created: Date;
  desc: string;
  email: string;
  emailConfirmed: boolean;
  gender: 'male'|'female'|'other'|'undisclosed';
  groups: string;
  hasMessages: boolean;
  imgDef: boolean;
  jsonAuth: string;
  lastLogin: Date;
  logoChoice: string;
  msgToken: string;
  name: Name;
  password: string;
  phone: string;
  phoneExt: string;
  phoneNumber: string;
  phoneType: string;
  profileStatus: string;
  quickSwitcher: boolean;
  secondLanguage: 'No' | secondLanguages;
  securityID: string;
  smsEnabled: boolean;
  twoFactorAuth: boolean;
  updated: Date;
  role: string;
}
export default User;
