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
  itemsPerPage: number = 10;
  pages: number[] = [];


  getImageForArticle(index: number): string {
    return this.staticImages[index % this.staticImages.length];
  }


  constructor(private router: Router) { }
  articles = articles;  // Assign the imported articles array
  ngOnInit(): void {
  }

  viewArticleDetail(articleId: number): void {
    this.router.navigate(['/article', articleId]);
  }

  getSummary(content: string): string {
    const firstSentence = content.split(/(?<=[.?!])\s/, 1)[0];
    return firstSentence;
  }

    // Function to update the pagination pages based on the number of articles
    updatePages() {
      const pageCount = Math.ceil(this.articles.length / this.itemsPerPage);
      this.pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    }

    // Function to get a subset of articles for the current page
    getPaginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.articles.slice(startIndex, endIndex);
    }

    // Function to handle page change
    changePage(page: number) {
      this.currentPage = page;
    }

}
