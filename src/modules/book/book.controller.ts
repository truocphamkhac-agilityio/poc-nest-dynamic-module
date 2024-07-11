import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { BookService, Book } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBook(@Query('id', ParseIntPipe) id: number): Book {
    console.log('BookController.getBook()');
    return this.bookService.findById(id);
  }
}
