import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoute);

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
