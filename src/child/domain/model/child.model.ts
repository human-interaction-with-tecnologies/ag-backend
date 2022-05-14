import { randomUUID } from "crypto";

export class Child {
  id: string;

  name: string;

  age: number;

  institution: string;

  note: string;

  constructor(name: string, age: number, institution: string, note: string) {
    this.id = randomUUID();
    this.name = name;
    this.age = age;
    this.institution = institution;
    this.note = note;
  }
}