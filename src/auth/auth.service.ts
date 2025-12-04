import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async registerUser(registerUserDto: RegisterDto) {
    const result = await this.userService.createUser(registerUserDto);
    const payload = { userId: result._id };
    const token = await this.jwtService.signAsync(payload);
    return { access_token: token };
  }
  async profile(userId: string) {
    const result = await this.userService.user(userId);
    return result;
  }
  users(): { message: string } {
    return {
      message: 'users',
    };
  }
}
