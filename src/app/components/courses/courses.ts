import { Category } from './../../models/category';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { DisableAfterClick } from '../../directives/disable-after-click';
@Component({
  selector: 'app-courses',
  imports: [NgClass ,CommonModule, FormsModule, DiscountPipe, DisableAfterClick],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
selectCategoryId:number=0;
discountValue:number=10;
  categories: Category[] = [
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Business' }
  ];

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular Mastery',
      instructor: 'Ahmed Hassan',
      price: 80,
      seats: 12,
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
     catId:1,
    },
    {
      id: 2,
      title: 'React from Scratch',
      instructor: 'Sara Ali',
      price: 70,
      seats: 8,
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
       catId: 1,
    },
    {
      id: 3,
      title: 'Node.js Backend',
      instructor: 'Mohamed Tarek',
      price: 90,
      seats: 5,
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      catId: 2,
    },
    {
      id: 4,
      title: 'UI/UX Design with Figma',
      instructor: 'Nour Khaled',
      price: 60,
      seats: 15,
      imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c',
     
      catId: 3,
    },
    {
      id: 5,
      title: 'Python for Beginners',
      instructor: 'Omar Adel',
      price: 50,
      seats: 20,
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      catId: 4,
    },
  ];
  decreaseSeats(course: Course) {
    if (course.seats > 0) {
      course.seats--;
    }
  }
}


