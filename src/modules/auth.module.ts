import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@/adapters/api/auth.service';
import { constants } from '@/common/utils/constants';
import { JwtStrategy } from '@/common/utils/jwt.strategy';
import { ProfessionalModule } from '@/modules/professional.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ProfessionalModule,
    PassportModule,
    JwtModule.register({
      secret: constants.SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}