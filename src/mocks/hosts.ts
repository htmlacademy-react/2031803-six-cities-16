export interface Host {
  id: number;
  avatar: string;
  name: string;
  isPro: boolean;
}

const hosts: Host[] = [
  {
    id: 1,
    avatar: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
    name: 'Jessica Brown',
    isPro: true
  },
  {
    id: 2,
    avatar: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
    name: 'Matthew Davis',
    isPro: false
  },
  {
    id: 3,
    avatar: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
    name: 'Daniel Green',
    isPro: true
  },
  {
    id: 4,
    avatar: `https://loremflickr.com/248/152?random=${ Math.random() * 100}`,
    name: 'Amanda Black',
    isPro: false
  },
];

export default hosts;
