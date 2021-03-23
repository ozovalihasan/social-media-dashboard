import { createContext } from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';

const store = {
  top: [
    {
      id: '1',
      userName: '@nathanf',
      numberFollowers: '1987',
      followers: 'Followers',
      changeValue: '12',
      date: 'Today',
      changeTrend: 'increase',
      color: 'facebook',
      logo: facebook,
    },
    {
      id: '2',
      userName: '@nathanf',
      numberFollowers: '1044',
      followers: 'Followers',
      changeValue: '99',
      date: 'Today',
      changeTrend: 'increase',
      color: 'twitter',
      logo: twitter,
    },
    {
      id: '3',
      userName: '@realnathanf',
      numberFollowers: '11k',
      followers: 'Followers',
      changeValue: '1099',
      date: 'Today',
      changeTrend: 'increase',
      color: 'instagram',
      logo: instagram,
    },
    {
      id: '4',
      userName: 'Nathan F.',
      numberFollowers: '8239',
      followers: 'Subscribers',
      changeValue: '144',
      date: 'Today',
      changeTrend: 'decrease',
      color: 'you_tube',
      logo: youtube,
    }],
  bottom: [

    {
      id: '1',
      title: 'Page Views',
      total: '87',
      changeValue: '3%',
      changeTrend: 'increase',
      logo: facebook,
    },

    {
      id: '2',
      title: 'Likes',
      total: '52',
      changeValue: '2%',
      changeTrend: 'decrease',
      logo: facebook,
    },
    {
      id: '3',
      title: 'Likes',
      total: '5462',
      changeValue: '2257%',
      changeTrend: 'increase',
      logo: instagram,
    },

    {
      id: '4',
      title: 'Profile Views',
      total: '52k',
      changeValue: '1375%',
      changeTrend: 'increase',
      logo: instagram,
    },

    {
      id: '5',
      title: 'Retweets',
      total: '117',
      changeValue: '303%',
      changeTrend: 'increase',
      logo: twitter,
    },

    {
      id: '6',
      title: 'Likes',
      total: '507',
      changeValue: '553%',
      changeTrend: 'increase',
      logo: twitter,
    },

    {
      id: '7',
      title: 'Likes',
      total: '107',
      changeValue: '19%',
      changeTrend: 'decrease',
      logo: youtube,
    },

    {
      id: '8',
      title: 'Total Views',
      total: '1407',
      changeValue: '12%',
      changeTrend: 'decrease',
      logo: youtube,
    },
  ],
};

const MyContext = createContext({ theme1: 'light' });

export default store;
export { MyContext };
