import { readFile, writeFile } from 'fs/promises'; // from the node standard library

export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8'); // returns the content of the file, which is in utf-8 format, as a string
        const messages = JSON.parse(contents); // parse a json-formatted string and transform it into an js object
        
        return messages[id];
    }

    async findAll() {
        // Retrieve the collection of messages
        const contents = await readFile('messages.json', 'utf8');
        // Covert the collection of messages in json (string) format to js object
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(content: string) {
        // Retrieve the collection of messages
        const contents = await readFile('messages.json', 'utf8');
        
        // Covert the collection of messages in json (string) format to js object
        const messages = JSON.parse(contents);

        // Generate random id
        const id = Math.floor(Math.random() * 999);
        // Add message to the collection of messages
        messages[id] = {id, content};

        // Write messages down back to the in-memory database
        await writeFile('messages.json', JSON.stringify(messages));
    }
}