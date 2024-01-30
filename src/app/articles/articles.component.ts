import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from './../Model/articles-data';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ArticlesComponent implements OnInit {

  readonly staticImages: string[] = [
    './../../assets/images/bg1.jpg',
    './../../assets/images/bg3.jpg',
    './../../assets/images/bg4.jpg',
    './../../assets/images/header.jpg',
    './../../assets/images/bg2.jpg',
    // ... other images
  ];
  currentPage: number = 1;
  itemsPerPage: number = 2;
  pages: number[] = [];
  paginatedArticles: any[] = [];
  showCard = true;


  getImageForArticle(index: number): string {
    return this.staticImages[index % this.staticImages.length];
  }


  constructor(private router: Router) { }
  articles = articles;  // Assign the imported articles array
  ngOnInit(): void {
    this.calculatePages();
    this.loadPage(1);
  }

  viewArticleDetail(articleId: number): void {
    this.router.navigate(['/article', articleId]);
  }

  getSummary(content: string): string {
    const firstSentence = content.split(/(?<=[.?!])\s/, 1)[0];
    return firstSentence;
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.articles.length / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  loadPage(pageNumber: number): void {
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    this.paginatedArticles = this.articles.slice(startIndex, startIndex + this.itemsPerPage);
    this.currentPage = pageNumber;
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.loadPage(pageNumber);
    }
  }



  redirectToLogin(){
    this.router.navigate(['/Login']);

}

}
