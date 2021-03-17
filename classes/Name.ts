export interface iName {
  first?: string,
  middle?: string,
  last?: string,
  nickname?: string,
  firstLastInitials?: string,
  fullNamePreferred?: string,
  fullNameLegal?: string,
}

/**
 * ```typescript
 * {
  first?: string,
  middle?: string,
  last?: string,
  nickname?: string,
  firstLastInitials?: string,
  fullNamePreferred?: string,
  fullNameLegal?: string,
}
 ```
 */
export default class Name implements iName {
  first?: string
  middle?: string
  last?: string
  nickname?: string
  firstLastInitials?: string
  fullNamePreferred?: string
  fullNameLegal?: string

  constructor(names: Array<string>, nickname?: string) {
    if (names.length === 1) this.first = names[0];
    if (names.length === 2){
      this.first = names[0];
      this.last = names[1];
    }
    if (names.length === 3){
      this.first = names[0];
      this.middle = names[1];
      this.last = names[2];
    }
    if (nickname) this.nickname = nickname;

    if (this.first && this.last) this.firstLastInitials = `${this.first[0]}. ${this.last[0]}.`;
  }
}
