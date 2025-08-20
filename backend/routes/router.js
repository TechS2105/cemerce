import express from 'express';
import getRouterController from '../controllers/getroutercontroller.js';
import postRouterController from '../controllers/postroutercontroller.js';

const router = express.Router();

router.get('/', getRouterController.getRootRoute); // GET Root Router
router.get('/api/video/product', getRouterController.getVideoProductRouter); // GET Product 1Video Router
router.get('/api/shop/product', getRouterController.getShopProductRouter); // GET Shop Product Router
router.get('/api/men/product', getRouterController.getHomeMenCollectionRouter); // GET Home Men's Collection Router
router.get("/api/men/collections/product", getRouterController.getMenProductPageCollectionRouter); // GET Men's Product Page Product Collection Router
router.get("/api/women/product", getRouterController.getHomeWomneProductCollectionRouter); // GET Home Women's Product Router
router.get("/api/women/collections/product", getRouterController.getWomenProductPageProductCollectionRouter); // GET Women's Product Page Product Collection Router
router.get("/api/kids/product", getRouterController.getHomeKidProductCollectionRouter); // GET Home Kid's Product Collection Router
router.get("/api/kids/collections/product",getRouterController.getKidProductPageProductCollectionRouter); // GET Kid's Product Page Product Collection Router
router.get("/api/send/mail", getRouterController.getSendMailRouter); // GET Send Mail Router
router.post('/api/send/mail', postRouterController.postSendMailRouter); // POST Send Mail Router

export default router;

