import { isEmptyOrSpace } from "../functions/validation_Functions";

export class User {
  constructor(
    public name: string,
    public email: string,
  ) { }

  public get isValid(): boolean {
    if (re.test(String(this.email).toLowerCase()) && !isEmptyOrSpace(this.name)) return true;
    return false
  }
  //#endregion
}

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;