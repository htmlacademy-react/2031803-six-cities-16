import dayjs from 'dayjs';

export interface Review {
  id: number;
  avatar: string;
  name: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'John Doe',
    rating: 5,
    date: dayjs().format('MMMM YYYY'),
    text: 'Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    id: 2,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Jane Smith',
    rating: 4,
    date: dayjs().subtract(1, 'month').format('MMMM YYYY'),
    text: 'Great experience, highly recommend!',
  },
  {
    id: 3,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Michael Johnson',
    rating: 3,
    date: dayjs().subtract(2, 'months').format('MMMM YYYY'),
    text: 'Decent service, but could be better.',
  },
  {
    id: 4,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Emily Brown',
    rating: 5,
    date: dayjs().subtract(3, 'months').format('MMMM YYYY'),
    text: 'Amazing service, exceeded my expectations!',
  },
  {
    id: 5,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'David Wilson',
    rating: 2,
    date: dayjs().subtract(4, 'months').format('MMMM YYYY'),
    text: 'Not impressed, wouldn\'t recommend.',
  },
  {
    id: 6,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Sarah Jones',
    rating: 4,
    date: dayjs().subtract(5, 'months').format('MMMM YYYY'),
    text: 'Good value for money, would use again.',
  },
  {
    id: 7,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Christopher White',
    rating: 5,
    date: dayjs().subtract(6, 'months').format('MMMM YYYY'),
    text: 'Excellent customer service, highly satisfied.',
  },
  {
    id: 8,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Amanda Black',
    rating: 3,
    date: dayjs().subtract(7, 'months').format('MMMM YYYY'),
    text: 'Could be better, but overall okay.',
  },
  {
    id: 9,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Daniel Green',
    rating: 4,
    date: dayjs().subtract(8, 'months').format('MMMM YYYY'),
    text: 'Would definitely use again, recommend it.',
  },
  {
    id: 10,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Jessica Brown',
    rating: 5,
    date: dayjs().subtract(9, 'months').format('MMMM YYYY'),
    text: 'Fantastic service, couldn\'t be happier!',
  },
  {
    id: 11,
    avatar: `https://loremflickr.com/248/152?random=${Math.random() * 100}`,
    name: 'Matthew Davis',
    rating: 2,
    date: dayjs().subtract(10, 'months').format('MMMM YYYY'),
    text: 'Poor customer service, wouldn\'t use again.',
  },
];

export default reviews;
