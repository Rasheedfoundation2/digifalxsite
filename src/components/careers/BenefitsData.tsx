// data/benefitsData.ts

export interface Benefit {
  name: string;
  image: string;
}

export const benefits: Benefit[] = [
  { name: 'Web Development', image:'/assets/images/img1.jpg' },
  { name: 'Mobile Application', image: '/assets/images/img2.jpg' }, // Replace with actual images if available
  { name: 'Digital Marketing', image: '/assets/images/img3.jpg' },
  { name: 'Bussiness Development', image: '/assets/images/img4.jpg' }, // Replace with actual images if available
];
