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

  getLikePercentage(article: { likes: number; dislikes: any; }): number {
    const total = article.likes + article.dislikes;
    return total ? Math.round((article.likes / total) * 100) : 0;
  }

  getDislikePercentage(article: { likes: any; dislikes: number; }): number {
    const total = article.likes + article.dislikes;
    return total ? Math.round((article.dislikes / total) * 100) : 0;
  }
}
