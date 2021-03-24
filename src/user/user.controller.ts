import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query  } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService){}

	
}
