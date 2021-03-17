import type Client from './Client';
import type ClientUser from './ClientUser';
import type Order from './Order';

export interface iProject {
  client: Client,
  clientUser: ClientUser,
  completed: Date,
  created: Date,
  name: string,
  orders: Array<Order>,
}

export default class Project implements iProject {
  client: Client;
  clientUser: ClientUser;
  completed: Date;
  created: Date;
  name: string;
  orders: Array<Order>;
}
