import { randomUUID } from "crypto";

export class Professional {
  id: string;

  username: string;

  name: string;

  email: string;

  password: string;

  position: string;

  institution: string;


  constructor(
    username: string,
    name: string,
    email: string,
    password: string,
    position: string,
    institution: string,
  ) {
    this.id = randomUUID();
    this.username = username;
    this.name = name;
    this.position = position;
    this.email = email;
    this.password = password;
    this.institution = institution;
  }
}