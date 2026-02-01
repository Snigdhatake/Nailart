
export enum CourseLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Course {
  id: string;
  title: string;
  level: CourseLevel;
  duration: string;
  price: number;
  description: string;
  features: string[];
  certification: boolean;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  timestamp: number;
  discountApplied: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}
