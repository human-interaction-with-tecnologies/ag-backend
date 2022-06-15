import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '@/adapters/api/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private professional) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.professional);
  }
}
