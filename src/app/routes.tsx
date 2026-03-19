import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'browse', Component: Browse },
      { path: 'services', Component: Services },
      { path: 'how-it-works', Component: HowItWorks },
    ],
  },
]);
