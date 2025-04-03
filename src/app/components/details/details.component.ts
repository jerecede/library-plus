import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  bookService: BookService = inject(BookService);

  book: Book | undefined;

  constructor(){
    const bookId = Number(this.route.snapshot.params['id']);
    this.book = this.bookService.getBookById(bookId);
  }
}
