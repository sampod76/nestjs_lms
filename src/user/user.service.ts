import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';

@Injectable()
export class UserService {
  createUser(registerUserDto: RegisterDto) {
    return {
      ...registerUserDto,
      id: 1,
      //   name: 'John Doe',
    };
  }
}
