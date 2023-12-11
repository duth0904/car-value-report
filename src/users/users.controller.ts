import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }
  @Serialize(UserDto)
  @Get('/:id')
  findUserById(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Get('')
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUserById(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUserById(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
