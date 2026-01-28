
import { Course, CourseLevel, GalleryItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Basic Nail Art Foundation',
    level: CourseLevel.BEGINNER,
    duration: '2 Weeks',
    price: 4999,
    description: 'Perfect for enthusiasts starting their journey. Learn nail anatomy, hygiene, and basic color theory.',
    features: ['Nail Preparation', 'Basic Shaping', 'Solid Color Application', 'Introduction to Tools'],
    certification: true
  },
  {
    id: 'c2',
    title: 'Salon Mastery & Design',
    level: CourseLevel.INTERMEDIATE,
    duration: '4 Weeks',
    price: 9999,
    description: 'Step up your game with popular salon techniques including gel extensions and ombre effects.',
    features: ['Gel Extensions', 'Ombre & Marble Art', 'Sticker & Foil Application', 'Client Consultation'],
    certification: true
  },
  {
    id: 'c3',
    title: 'Professional Nail Technician',
    level: CourseLevel.ADVANCED,
    duration: '8 Weeks',
    price: 18999,
    description: 'Transform into a pro. Learn 3D sculpting, advanced bridal art, and salon management.',
    features: ['3D Acrylic Sculpting', 'Complex Bridal Designs', 'Airbrushing Techniques', 'Business of Nail Art'],
    certification: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    type: 'image',
    url: 'https://picsum.photos/seed/nail1/800/800',
    thumbnail: 'https://picsum.photos/seed/nail1/400/400',
    title: 'Elegant Wedding Set'
  },
  {
    id: 'g2',
    type: 'image',
    url: 'https://picsum.photos/seed/nail2/800/800',
    thumbnail: 'https://picsum.photos/seed/nail2/400/400',
    title: 'Neon Summer Vibes'
  },
  {
    id: 'g3',
    type: 'image',
    url: 'https://picsum.photos/seed/nail3/800/800',
    thumbnail: 'https://picsum.photos/seed/nail3/400/400',
    title: 'Marble Sophistication'
  },
  {
    id: 'g4',
    type: 'image',
    url: 'https://picsum.photos/seed/nail4/800/800',
    thumbnail: 'https://picsum.photos/seed/nail4/400/400',
    title: 'Glitter Ombre'
  }
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/nailos_bhargavi',
  youtube: 'https://youtube.com/@nailosbhargavi',
};
