import type Vendor from './Vendor';

export type StatusEvent = 'Added to Auto Assign'
                        | 'Appraisal Checked'
                        | 'Assigned'
                        | 'Canceled'
                        | 'Declined'
                        | 'Email Blast Failed'
                        | 'Email Blast Sent'
                        | 'Follow Up'
                        | 'Moved to Address Verification'
                        | 'Moved to Manual Assign'
                        | 'Order Created'
                        | 'Put on hold'

export type AnalystCommentCategory = 'Analyst Comment'
                                    | 'Canceled'
                                    | 'Client Status Comment'
                                    | 'Critical Comment'
                                    | 'Put on Hold'
                                    | 'Sent to Address Verification'
                                    | 'Taken off Hold'

export interface iAnalystComment {
  author: Vendor,
  authorName: string,
  category: AnalystCommentCategory,
  comment: string,
  critical: boolean,
  status: StatusEvent,
  timestamp: Date,
}

export default class AnalystOrderComment implements iAnalystComment {
  author: Vendor;
  authorName: string;
  category: AnalystCommentCategory;
  comment: string;
  critical: boolean;
  status: StatusEvent;
  timestamp: Date;
}
