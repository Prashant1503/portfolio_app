const cartService = require('../services/cart');

exports.addToCart = (req, res) => {

    let user = req.user.id;

    let cartObj = {
        product,
        quantity,
        price,

    } = req.body;

    cartObj.user = user;

    cartService.addToCart(cartObj)
        .then((cart) => {
            return res.status(200).json({ cart });
        })
        .catch((err) => {
            return res.status(500).json({ err });
        });
}

exports.removeCartItem = (req) => {

    let id = req.params.id;

    if (!id) {
        return res.json({ msg: "Required product id" });
    }


    cartService.removeCartItem(id)
        .then((item) => {

            return res.status(200).json({ item });
        })
        .catch((err) => {
            return res.status(500).json({ err });
        })

}