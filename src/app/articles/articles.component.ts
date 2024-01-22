import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from './../Model/articles-data';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Using OnPush for performance

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

  getImageForArticle(index: number): string {
    return this.staticImages[index % this.staticImages.length];
  }

  // articles = [
  //   {
  //     id: 1, // make sure each article has a unique id
  //     title: 'The Resilience of Hope',
  //     content: 'Amidst the shadows of conflict, the spirit of perseverance emerges in the streets of Gaza.',
  //     date: new Date('2024-01-20')
  //   },
  //   {
  //     id: 2,
  //     title: 'Echoes of Yesterday',
  //     content: 'A reflection on the historical narratives that continue to shape the landscape of the West Bank.',
  //     date: new Date('2024-01-22')
  //   },
  //   {
  //     id: 3,
  //     title: 'A Glimpse Beyond the Wall',
  //     content: 'Exploring the day-to-day life and culture that thrives beyond the barriers.',
  //     date: new Date('2024-01-25')
  //   },
  //   {
  //     id: 4,
  //     title: 'Voices from the Olive Groves',
  //     content: 'In the heart of Palestine, amidst rolling hills and ancient olive groves, lies a story of resilience and heritage. This article delves into the lives of Palestinian farmers who have tended these groves for generations. Despite the challenges they face, their connection to the land remains unbreakable. We explore their daily routines, the significance of olive cultivation in their culture, and how these age-old practices have become a symbol of hope and perseverance in a landscape marked by conflict.',
  //     date: new Date('2024-01-25')
  //   },
  //   // ...hedhom fake taw mba3ed ki norbtou bel back tet7assen
  // ];

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

}
