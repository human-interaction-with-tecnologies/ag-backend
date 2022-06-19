import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { constants } from '@/common/utils';
import { ProfessionalModule } from '@/professional';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ProfessionalModule,
    PassportModule,
    JwtModule.register({
      secret: constants.SECRET,
      signOptions: { expiresIn: constants.EXPIRESIN },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
