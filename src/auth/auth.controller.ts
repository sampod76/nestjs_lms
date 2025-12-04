import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // This decorator sets the route prefix for the controller. When applied, the prefix becomes ‘auth’ for all controller routes, while the global default prefix remains ‘api’
export class AuthController {
  /*  
 authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  } 
*/
  // shorthand
  constructor(private readonly authService: AuthService) {}
  @Post('signup') // /auth/signup
  signup(): string {
    return 'signup';
  }
  @Post('register') // /auth/register
  register(@Body() registerUserDto: RegisterDto) {
    const result = this.authService.registerUser(registerUserDto);
    return result;
  }
  @Get('users') // /auth/login
  users(): { message: string } {
    const result = this.authService.users();
    return result;
  }
}
