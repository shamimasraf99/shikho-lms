import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Course } from '../types';

interface CourseContextType {
  courses: Course[];
  addCourse: (course: Course) => void;
  deleteCourse: (id: number) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

const initialCourses: Course[] = [
  {
    id: 1,
    title: "কমপ্লিট ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট বুটক্যাম্প",
    instructor: "আনিসুল ইসলাম",
    price: "৩০০০",
    originalPrice: "৮০০০",
    rating: 4.8,
    students: 3420,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1031&q=80",
    category: "প্রোগ্রামিং",
    bestseller: true
  },
  {
    id: 2,
    title: "প্রফেশনাল গ্রাফিক ডিজাইন মাস্টারক্লাস",
    instructor: "রাফি আহমেদ",
    price: "২৫০০",
    originalPrice: "৬০০০",
    rating: 4.9,
    students: 2150,
    image: "https://images.unsplash.com/photo-1626785774573-4b7993143a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    category: "ডিজাইন",
    bestseller: true
  },
  {
    id: 3,
    title: "ডিজিটাল মার্কেটিং এ টু জেড গাইডলাইন",
    instructor: "সুমাইয়া রহমান",
    price: "২০০০",
    originalPrice: "৫০০০",
    rating: 4.7,
    students: 1800,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    category: "মার্কেটিং"
  },
  {
    id: 4,
    title: "পাইথন প্রোগ্রামিং ফর বিগিনার্স",
    instructor: "তানভীর হাসান",
    price: "১৫০০",
    originalPrice: "৪০০০",
    rating: 4.8,
    students: 4500,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
    category: "পাইথন"
  },
];

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const addCourse = (newCourse: Course) => {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
  };

  const deleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};