import { readFile, writeFile } from 'fs/promises'; // from the node standard library

export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8'); // returns the content of the file, which is in utf-8 format, as a string
        const messages = JSON.parse(contents); // parse a json-formatted string and transform it into an js object
        
        return messages[id];
    }

    async findAll() {

    }

    async create(message: string) {

    }
}