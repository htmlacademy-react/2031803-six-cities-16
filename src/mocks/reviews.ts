import dayjs from 'dayjs';
import { Reviews} from './types.ts';

export const reviews: Reviews = {
  '1': [
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: false,
      },
      rating: 5,
      date: dayjs().format('MMMM YYYY'),
      comment: 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum',
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: true,
      },
      rating: 4,
      date: dayjs().subtract(1, 'month').format('MMMM YYYY'),
      comment: 'Great experience, highly recommend!',
    },
    {
      id: 3,
      user: {
        name: 'Michael Johnson',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: false,
      },
      rating: 3,
      date: dayjs().subtract(2, 'months').format('MMMM YYYY'),
      comment: 'Decent service, but could be better.',
    },
  ],
  '2': [
    {
      id: 4,
      user: {
        name: 'Emily Brown',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: true,
      },
      rating: 5,
      date: dayjs().subtract(3, 'months').format('MMMM YYYY'),
      comment: 'Amazing service, exceeded my expectations!',
    },
    {
      id: 5,
      user: {
        name: 'David Wilson',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: false,
      },
      rating: 2,
      date: dayjs().subtract(4, 'months').format('MMMM YYYY'),
      comment: 'Not impressed, wouldn\'t recommend.',
    },
  ],
  '3': [
    {
      id: 6,
      user: {
        name: 'Sarah Jones',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: true,
      },
      rating: 4,
      date: dayjs().subtract(5, 'months').format('MMMM YYYY'),
      comment: 'Good value for money, would use again.',
    },
    {
      id: 7,
      user: {
        name: 'Christopher White',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: false,
      },
      rating: 5,
      date: dayjs().subtract(6, 'months').format('MMMM YYYY'),
      comment: 'Excellent customer service, highly satisfied.',
    },
    {
      id: 8,
      user: {
        name: 'Amanda Black',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: true,
      },
      rating: 3,
      date: dayjs().subtract(7, 'months').format('MMMM YYYY'),
      comment: 'Could be better, but overall okay.',
    },
    {
      id: 9,
      user: {
        name: 'Daniel Green',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: false,
      },
      rating: 4,
      date: dayjs().subtract(8, 'months').format('MMMM YYYY'),
      comment: 'Would definitely use again, recommend it.',
    },
    {
      id: 10,
      user: {
        name: 'Jessica Brown',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: true,
      },
      rating: 5,
      date: dayjs().subtract(9, 'months').format('MMMM YYYY'),
      comment: 'Fantastic service, couldn\'t be happier!',
    },
  ],
  '4': [
    {
      id: 11,
      user: {
        name: 'Matthew Davis',
        avatarUrl: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
        isPro: false,
      },
      rating: 2,
      date: dayjs().subtract(10, 'months').format('MMMM YYYY'),
      comment: 'Poor customer service, wouldn\'t use again.',
    },
  ],
};

export default reviews;
