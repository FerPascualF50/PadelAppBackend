import { Controller, Get, Redirect, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  async googleAuth(@Request() req) {}

  @Get('google-redirect')
  @Redirect()
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Request() req: Request) {
    const user: any = this.authService.signInWithGoogle(req);
    if (user) {
      return { url: 'http://localhost:3000/dashboard' };
    }
    return { url: 'http://localhost:3000/login' };
  }

  // TODO: Create Facebook Guard
  @Get('facebook')
  //@UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  async facebookAuth(@Request() req) {}

  @Get('facebook-redirect')
  //@UseGuards(GoogleAuthGuard)
  facebookAuthRedirect(@Request() req) {
    return this.authService.signInWithFacebook(req);
  }
}
