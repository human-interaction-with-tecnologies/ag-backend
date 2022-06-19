import { JwtPayload } from '@/auth/interfaces';
import { constants } from '@/common/utils';
import { LoginStatus } from '@/http/interfaces';
import { ProfessionalService } from '@/professional';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, Professional } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly professionalService: ProfessionalService,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    professionalWhereUniqueInput: Prisma.ProfessionalWhereUniqueInput,
  ): Promise<LoginStatus> {
    const user = await this.professionalService.professional(
      professionalWhereUniqueInput,
    );

    const token = this._createToken(user);

    return {
      email: user.email,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<Professional> {
    const user = await this.professionalService.professional(payload);

    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ email }: Professional): any {
    const expiresIn = constants.EXPIRESIN;

    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}
