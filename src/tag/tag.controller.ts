import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {

   @Get()
   getAll() {
    return ['ai', 'typescript', 'javascript'];
   }
}