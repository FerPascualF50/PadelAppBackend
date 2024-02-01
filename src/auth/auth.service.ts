import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // TODO: Add logic to create or update logged user
  signInWithGoogle(req) {
    if (!req.user) {
      return null;
    }

    return {
      user: req.user,
    };
  }

  signInWithFacebook(req) {
    if (!req.user) {
      throw new BadRequestException('Unauthenticated');
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
