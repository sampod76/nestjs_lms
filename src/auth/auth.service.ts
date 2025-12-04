import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerUser(registerUserDto: RegisterDto) {
    console.log('🚀 ~ AuthService ~ registerUser ~ userDto:', registerUserDto);
    const result = this.userService.createUser(registerUserDto);
    return result;
  }
  users(): { message: string } {
    return {
      message: 'users',
    };
  }
}
