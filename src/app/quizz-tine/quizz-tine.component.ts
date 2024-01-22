// quizz-tine.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-tine',
  templateUrl: './quizz-tine.component.html',
  styleUrls: ['./quizz-tine.component.css']
})
export class QuizzTineComponent implements OnInit {
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  score: number = 0; // Track the user's score
  questions: any[] = [
    {
      question: 'What is the capital of Palestine?',
      options: ['Jerusalem', 'Ramallah', 'Gaza', 'Hebron'],
      correctAnswer: 'Jerusalem'
    },
    {
      question: 'Which sea is located to the west of Palestine?',
      options: ['Mediterranean Sea', 'Dead Sea', 'Red Sea', 'Black Sea'],
      correctAnswer: 'Mediterranean Sea'
    },
    // Add more questions as needed
  ];

  get currentQuestion(): any {
    return this.questions[this.currentQuestionIndex];
  }

  ngOnInit(): void {
    // Initialize component logic here
  }

  submitAnswer(): void {
    // Handle answer submission logic here
    if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
      this.score++; // Increment the score if the answer is correct
    }

    // For demonstration purposes, let's move to the next question after a brief delay
    setTimeout(() => {
      this.selectedAnswer = '';
      this.currentQuestionIndex++;

      // Check if there are more questions
      if (this.currentQuestionIndex === this.questions.length) {
        // Quiz completed, display the score or navigate to another component/page
        console.log('Quiz completed. Score:', this.score);
      }
    }, 1000);
  }
}
