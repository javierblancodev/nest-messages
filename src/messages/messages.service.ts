import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable() // the injection decorator mark this class for registration in the DI container
export class MessagesService {
    // we also need to add this dependency as a provider in the messagesModule

    constructor(public messagesRepo: MessagesRepository) {
        // DO NOT USE THIS APPROACH IN THE NEXT LINE
        // this.messagesService = new MessagesService(); // Bad practice that break the IoC principle
        // USE DEPENDENCY INJECTION
        // Inversion of control: principle that states that a class can not create an instance of another class
        // Inversion of control: guarantee reusability 
        // Dependency Injection (DI): principle where a ahead of time created instance of other class has been created
        // and is injected in a class to guarantee the inversion of control principal
        // Nest DI container: Object that create the dependencies of a class when a class needs to be instanciate
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}