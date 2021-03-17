import type Project from './Project';
import type Vendor from './Vendor';

export interface iSystemComment {
  author: Vendor,
  authorName: string,
  category: any,
  comment: string,
  project: Project,
  projectName: string,
  timestamp: Date,
}

export default class SystemOrderComment implements iSystemComment {
  author: Vendor;
  authorName: string;
  category: any;
  comment: string;
  project: Project;
  projectName: string;
  timestamp: Date;
}
