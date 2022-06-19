import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from '@/auth';
import { Prisma } from '@prisma/client';
import { LoginStatus } from '@/http/interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(
    @Body() professionalWhereUniqueInput: Prisma.ProfessionalWhereUniqueInput,
  ): Promise<LoginStatus> {
    return await this.authService.login(professionalWhereUniqueInput);
  }
}
