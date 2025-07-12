import { IBreadCrumb } from '.';

const baseBreadCrumb: IBreadCrumb = {
  content: [
    {
      title: '',
      href: '/',
    },
    {
      title: 'Solutions',
      href: '/#',
    },
    {
      title: 'Consulting',
      href: '/#/#',
    }
  ],
};

export const mockBreadCrumbProps = {
  baseBreadCrumb,
};
