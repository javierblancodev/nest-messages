import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  // providers -> other things that can be used as dependencies for other classes
  // Two steps to use DI container:
    // 1. add the injectable decorator at the top of the dependency class to be included
    // 2. add the dependency class to the providers list
    // Nest will take care of everything else behind the scences
  providers: [MessagesService, MessagesRepository]
})

// Important note: 
export class MessagesModule {}
