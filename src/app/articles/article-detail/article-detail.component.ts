import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: any;
  userRating: number = 5; // Declare the property here
  newComment: string = '';
  comments: string[] = []; // Array to store comments

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router

  ) {}

  ngOnInit(): void {
    const articleIdParam = this.route.snapshot.paramMap.get('id');

    if (articleIdParam) {
      const articleId = +articleIdParam;
      this.articleService.fetchArticleData(articleId).subscribe(
        (data) => {
          this.article = data;
        },
        (error) => {
          console.error('Error fetching article data:', error);
          // Handle the error or navigate to an error page
        }
      );
    } else {
      // Handle the null case
      this.router.navigate(['/error']);
    }
  }


  // toggleLike(): void {
  //   // Toggle the like status
  //   this.article.liked = !this.article.liked;
  //   // Update the likes count
  //   this.article.likes += this.article.liked ? 1 : -1;
  // }


  incrementLikes(): void {
    this.article.likes++;
  }

  incrementDislikes(): void {
    this.article.dislikes++;
  }

  toggleDislike(): void {
    this.article.disliked = !this.article.disliked;

    // If the user removes the dislike, reset the likes as well
    if (!this.article.disliked) {
      this.article.liked = false;
    }
  }

  toggleLike(): void {
    this.article.liked = !this.article.liked;

    // If the user removes the dislike, reset the likes as well
    if (!this.article.liked) {
      this.article.liked = true;
    }
  }

  updateUserRating(): void {
    // Update the user's rating
    this.article.userRating = this.userRating;
  }

  addComment(): void {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment.trim());
      this.newComment = ''; // Clear the input after adding the comment
    }
  }
}
