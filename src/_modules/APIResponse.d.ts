import type Order from "../../classes/Order";

export declare interface APIResponse {
  status: 'success'|'error',
  message: string,
  data?: Order
}