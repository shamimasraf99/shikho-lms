import React from 'react';

export type UserRole = 'admin' | 'instructor' | 'student';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
  joinedDate: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: string;
  originalPrice: string;
  rating: number;
  students: number;
  image: string;
  category: string;
  bestseller?: boolean;
  lessons?: number;
  duration?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}