const router = require('express').Router();

const userRoutes = require('./api/user.routes');
// const placeRoutes = require('./api/places.routes');
const tokenRoutes = require('./api/token.routes');
const themeRoutes = require('./api/theme.routes')
// const routesRoutes = require('./api/routes.routes');

router.use('/tokens', tokenRoutes);
router.use('/users', userRoutes);
router.use('/themes', themeRoutes);
// router.use('/places', placeRoutes);
// router.use('/routes', routesRoutes);

module.exports = router;
