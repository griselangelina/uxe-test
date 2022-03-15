import TesIndex from './TesIndex';
import Layout from '../component/Layout';

export default [
  {
    component: Layout,
    routes: [
      {
        exact: true,
        path: '/',
        component: TesIndex,
      }
    ],
  },
];
