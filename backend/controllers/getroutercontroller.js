import videoProduct from '../videoproduct.js';
import shopProduct from '../shop.js';
import homeMenCollection from '../Men.js';
import menProductPageCollection from '../Mencollections.js';
import homeWomenCollection from '../Women.js';
import womenProductPageCollection from '../Womencollections.js';
import homeKidCollection from '../Kids.js';
import kidProductPageCollection from '../Kidscollections.js';
import products from '../product.js';
import db from '../database/database.js';

// GET Root 
const getRootRoute = (req, res) => {

    try {
        
        res.status(200).json({message: "Root route is running successfully..."})

    } catch (error) {
        
        res.status(400).json(error);

    }

}

// GET video product 
const getVideoProductRouter = (req, res) => {

    try {
        
        res.status(200).json(videoProduct);

    } catch (error) {
        
        res.status(400).json(error);

    }

}

// GET Shop Product
const getShopProductRouter = (req, res) => {

    try {
        
        res.status(200).json(shopProduct);

    } catch (error) {
        
        res.status(400).json(error);

    }

} 

// GET Home Men Collections
const getHomeMenCollectionRouter = (req, res) => {

    try {
        
        res.status(200).json(homeMenCollection)

    } catch (error) {
        
        res.status(400).json(error)

    }

}

// GET Home Men Collections 2
const getProductCollectionRouter = (req, res) => {

    const { id, category } = req.params;

    const product = homeMenCollection.find((item) => item.category === category || item.id === id);

    if (product) {
        
        res.json(product);

    }


}

// GET Men's Page Product Collection
const getMenProductPageCollectionRouter = (req, res) => {

    try {
        
        res.status(200).json(menProductPageCollection);

    } catch (error) {
        
        res.status(400).json(error)

    }

}

// GET Home Women's Product Collection
const getHomeWomneProductCollectionRouter = (req, res) => {

    try {
        
        res.status(200).json(homeWomenCollection);

    } catch (error) {
        
        res.status(400).json(error);

    }

}

// GET Women's Product Page Product Collection
const getWomenProductPageProductCollectionRouter = (req, res) => {

    try {
        
        res.status(200).json(womenProductPageCollection);

    } catch (error) {
        
        res.status(400).json(error)

    }

}

// GET Home Kid's Product Collection
const getHomeKidProductCollectionRouter = (req, res) => {

    try {
        
        res.status(200).json(homeKidCollection)

    } catch (error) {
        
        res.status(400).json(error);

    }

}

// GET Kid's Product Page Product Collection
const getKidProductPageProductCollectionRouter = (req, res) => {

    try { 

        res.status(200).json(kidProductPageCollection);

    } catch (error) {
        
        res.status(400).json(error)

    }
    
}

// GET Send Mail
const getSendMailRouter = (req, res) => {

    try {
        
        res.status(200).json({ message: "Mail has been ready to send..." });

    } catch (error) {
        
        res.status(400).json(error);

    }

}

// GET Cart Product From DB 
const getCartProduct = async (req, res) => {

    try {
        
        const getCartAllProduct = await db.query("SELECT * FROM cart");
        let cartProducts = [];
        cartProducts = getCartAllProduct.rows;
        res.status(200).json(cartProducts);

    } catch (error) {
        
        res.status(400).json({ message: error });

    }

}

// GET Wishlist Product From DB
const getWishlistProduct = async (req, res) => {
    
    try {
        
        const getAllWishlistProducts = await db.query("SELECT * FROM wishlist");
        let wishlistProducts = [];
        wishlistProducts = getAllWishlistProducts.rows;
        res.status(200).json(wishlistProducts);

    } catch (error) {
        
        res.status(400).json(error);

    }

}

export default {

    getVideoProductRouter,
    getRootRoute,
    getShopProductRouter,
    getHomeMenCollectionRouter,
    getMenProductPageCollectionRouter,
    getHomeWomneProductCollectionRouter,
    getWomenProductPageProductCollectionRouter,
    getHomeKidProductCollectionRouter,
    getKidProductPageProductCollectionRouter,
    getSendMailRouter,
    getCartProduct,
    getWishlistProduct,
    getProductCollectionRouter

}