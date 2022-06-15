import { IsNotEmpty } from 'class-validator';

export class ProfessionalDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  position: string;

  @IsNotEmpty()
  institution: string;
}
