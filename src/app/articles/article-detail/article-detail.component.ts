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
  newComment: string = '';
  comments: string[] = []; // Array to store comments
  userRating: number = 5;
  selectedRating: number = 0;

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
    if (this.article.likes === undefined) {
      this.article.likes = 0;
    }
    if (this.article.dislikes === undefined) {
      this.article.dislikes = 0;
    }
  }


  incrementLikes(): void {
    this.article.likes++;
  }

  incrementDislikes(): void {
    this.article.dislikes++;
  }

  toggleLike(): void {
    if (!this.article.liked) {
      this.article.likes++;
      if (this.article.disliked) {
        this.article.dislikes--;
      }
    } else {
      this.article.likes--;
    }
    this.article.liked = !this.article.liked;
    this.article.disliked = this.article.liked ? false : this.article.disliked;
  }

  toggleDislike(): void {
    if (!this.article.disliked) {
      this.article.dislikes++;
      if (this.article.liked) {
        this.article.likes--;
      }
    } else {
      this.article.dislikes--;
    }
    this.article.disliked = !this.article.disliked;
    this.article.liked = this.article.disliked ? false : this.article.liked;
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
  setRating(rating: number): void {
    if (this.selectedRating === rating) {
      // If the user clicks the same star again, reset the rating
      this.selectedRating = 0;
    } else {
      // Update the selected rating
      this.selectedRating = rating;
    }
  }


  modifyArticle() {
    // Handle article modification logic
    // You might want to navigate to a different component/page for modification
    // or open a modal/dialog for modification form
  }

  deleteArticle() {
    // Handle article deletion logic
    // You might want to ask for confirmation or open a modal/dialog for confirmation
  }
}
