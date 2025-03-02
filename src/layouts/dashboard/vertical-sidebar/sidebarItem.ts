export interface menu {
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  getURL?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Dashboard',
    icon: 'custom-home-trend',
    to: '/dashboard/default'
  },
  { header: 'Others' },
  {
    title: 'Offline Events',
    icon: 'custom-typography',
    to: '/utils/typography'
  },

  {
    title: 'Profile',
    icon: 'custom-shadow',
    to: '/utils/shadows'
  },
  {
    title: 'Membership Plans',
    icon: 'custom-shadow',
    to: '/utils/shadows'
  },
  {
    title: 'Login',
    icon: 'custom-shield',
    to: '/login1'
  },
  {
    title: 'Register',
    icon: 'custom-register',
    to: '/register1'
  },
  { header: 'Others' },
  {
    title: 'Sample Page',
    icon: 'custom-sample',
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: 'custom-support',
    to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/',
    type: 'external'
  }
];

export default sidebarItem;
