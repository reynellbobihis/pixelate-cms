import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'General',
    group: true,
  },
  {
    title: 'Site Settings',
    icon: 'globe-2',
    link: '/pages/site-settings',
    home: true,
  },
  {
    title: 'Pages',
    icon: 'file-text',
    children: [
      {
        title: 'Home Page',
        link: '/pages/home-page',
      },
      {
        title: 'About Page',
        link: '/pages/about-page',
      },
    ],
  },
  {
    title: 'Post Types',
    group: true,
  },
  {
    title: 'Blogs',
    icon: 'message-square',
    link: '/pages/blogs',
    home: true,
  },
  {
    title: 'Testimonials',
    icon: 'star',
    link: '/pages/testimonials',
    home: true,
  },
];
