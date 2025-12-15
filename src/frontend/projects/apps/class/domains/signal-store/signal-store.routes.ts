import { Home } from './signal-store';
import { HomePage } from './pages/home';

import { FeatureRoutes } from '@app-types/routing/feature-routing';
export const signal-storeRoutes: FeatureRoutes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
        data: {
          title: 'Welcome',
          linkText: 'signal-store',
        },
        children: [],
      }
    ],
  },
];
