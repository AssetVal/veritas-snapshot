import type Client from './Client';
import type iUser from './User';
import User from './User';

interface iClientUser extends iUser {
  clients: Array<Client>,
  user: User,
}

export default class ClientUser extends User implements iClientUser {
  clients: Array<Client>;
  user: User;
}
