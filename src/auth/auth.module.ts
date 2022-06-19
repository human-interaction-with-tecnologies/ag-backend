import { constants } from '@/common/utils';
import { ProfessionalModule } from '@/professional';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController, AuthService, JwtStrategy } from '@/auth';

@Module({
  imports: [
    ProfessionalModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: constants.SECRET,
      signOptions: {
        expiresIn: constants.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
