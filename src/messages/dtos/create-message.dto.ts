import { IsString } from 'class-validator';

// Class that describes all different properties we expect our post request handler to receive
export class CreateMessageDto {

    @IsString()
    content: string;
}