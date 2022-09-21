// Route the request to a particular function

import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    messagesService: MessagesService;

    constructor() {
        // DO NOT USE THIS IN REAL APP
        // USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
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
