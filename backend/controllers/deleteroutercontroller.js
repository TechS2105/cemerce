import db from '../database/database.js';

// DELETE Cart Product 
const deleteCartProductRouter = async (req, res) => {

    const { id } = req.params;

    try {
        
        await db.query("DELETE FROM cart WHERE id = $1", [id]);
        res.status(200).send();

    } catch (error) {
        
        res.status(400).json(error);

    }

}

export default {

    deleteCartProductRouter,

}