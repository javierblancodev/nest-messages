// Route the request to a particular function

import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    // we do not have to add this class to the DI container since this class is not a dependency but consume dependencies
    constructor(public messagesService: MessagesService) {
        // DO NOT USE THIS APPROACH IN THE NEXT LINE
        // this.messagesService = new MessagesService(); // Bad practice that break the IoC principle
        // USE DEPENDENCY INJECTION
        // Inversion of control: principle that states that a class can not create an instance of another class
        // Inversion of control: guarantee reusability 
        // Dependency Injection (DI): principle where a ahead of time created instance of other class has been created
        // and is injected in a class to guarantee the inversion of control principal
        // Nest DI container: Object that create the dependencies of a class when a class needs to be instanciate
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        // console.log(body);
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getMessages(@Param('id') id: string) {
        // console.log(id);
        const message = await this.messagesService.findOne(id);
    
        if(message == undefined) { 
            throw new NotFoundException('Message not found!');
        }
        
        return message;
    }
}
