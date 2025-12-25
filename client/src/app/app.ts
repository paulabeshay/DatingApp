import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly http = inject(HttpClient);
  protected readonly title = signal('Dating app');
 
  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/members").subscribe({
      next: members => console.log(members),
      error: err => console.error(err),
      complete: () => console.log('Request completed')
    });
  }
}
