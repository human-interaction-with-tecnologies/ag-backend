import { IsNotEmpty } from 'class-validator';

export class ChildDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  institution: string;

  @IsNotEmpty()
  note: string;
}