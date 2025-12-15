import { AppRoutes } from '@app-types/routing/app-routing';
import { withDevTimeRoutes } from '@app-types/routing/dev-routes';

const baseRoutes: AppRoutes = [
  {
    path: '',
    loadChildren: () => import('../../domains/home/home.routes').then((m) => m.homeRoutes),
    data: {
      title: 'Home',
      linkText: 'Home',
      pageTitle: 'Home Page',
      iconName: 'solarHome2',
      linkDescription: 'Start Here',
    },
  },
  {
    path: 'component-state',
    loadChildren: () =>
      import('../../domains/component-state/component-state.routes').then(
        (m) => m.componentStateRoutes,
      ),
    data: {
      title: 'Component State',
      linkText: 'Component State',
      iconName: 'solarCardSearch',
      pageTitle: 'Component State Page',
      linkDescription: 'Inputs, Outputs, and Etc.',
    },
  },
];

/**
 * A bit of a hack until we add in authn/authz
 */
export const routes = withDevTimeRoutes(baseRoutes);
