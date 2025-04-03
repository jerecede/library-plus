import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-addbook',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.scss'
})
export class AddbookComponent {
  bookService = inject(BookService)

  applyForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    summary: new FormControl(''),
    image: new FormControl(''),
    subject: new FormControl('')
  })

  submitAddBook() {
    this.bookService.submitBook(
      this.applyForm.value.title ?? '',
      this.applyForm.value.author ?? '',
      this.applyForm.value.summary ?? '',
      this.applyForm.value.image ?? '',
      this.applyForm.value.subject ?? ''
    )
  }
}
