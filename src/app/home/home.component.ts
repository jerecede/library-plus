import { Component, inject } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  imports: [BookCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books: Book[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.books = this.bookService.getAllBooks();
  }
}
