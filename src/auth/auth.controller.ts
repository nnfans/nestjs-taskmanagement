import {
  Controller,
  Body,
  Post,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  registerUser(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.registerUser(authCredentialsDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  loginUser(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.loginUser(authCredentialsDto);
  }
}
