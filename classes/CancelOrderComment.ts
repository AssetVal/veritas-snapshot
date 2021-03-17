import AnalystOrderComment from './AnalystOrderComment';
import type iAnalystComment from './AnalystOrderComment'

export type tCancellationReason = 'No Agent Available'
                                | 'Order Made in Error'
                                | 'No Property Information'
                                | 'No Access for an Interior Order'
                                | 'Cancellation Requested by Client'
                                | 'Fee Increase Request Denied by Client'
                                | 'Agent Unable to Complete Order - Agent Responsible'
                                | 'Agent Unable to Complete Order - Agent Not Responsible'
                                | 'Other';

interface iCancelOrderComment extends iAnalystComment { reason: tCancellationReason }

export default class CancelOrderComment extends AnalystOrderComment implements iCancelOrderComment {
  reason: tCancellationReason;
}
