import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  articles = [
    { title: 'Article 1', likes: 120, dislikes: 30 },
    { title: 'Article 2', likes: 80, dislikes: 60 },
    // ... more articles
  ];

  searchText: string = '';
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // ... more users
  ];

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    // Additionally, send a request to the server to delete the user
  }

  getLikePercentage(article: { likes: number; dislikes: any; }): number {
    const total = article.likes + article.dislikes;
    return total ? Math.round((article.likes / total) * 100) : 0;
  }

  getDislikePercentage(article: { likes: any; dislikes: number; }): number {
    const total = article.likes + article.dislikes;
    return total ? Math.round((article.dislikes / total) * 100) : 0;
  }
}
