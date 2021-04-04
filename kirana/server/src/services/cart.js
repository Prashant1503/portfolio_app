const Cart = require("../../models").Cart;
const CartItems = require("../../models").CartItems;
const Products = require("../../models").Products;

/** @function : add product to cart */
exports.addToCart = async (cartObj) => {
  let { product, quantity, price, user } = cartObj;

  // adding cart item to cartItem model promise
  let cartItemPromise = new Promise(async (resolve, reject) => {
    await CartItems.create({
      product,
      quantity,
      price,
    })
      .then((items) => {
        try {
          if (!items) {
            reject("Cart already exists");
          }
          resolve(items);
        } catch (err) {
          reject(err);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

  return new Promise(async (resolve, reject) => {
    let cartItem = await JSON.stringify(cartItemPromise);

    await Cart.create({
      user: user,
      cartItems: cartItem,
    })
      .then(async (cart) => {
        try {
          resolve(cart);

          // updating product total quantity
          await Products.findOne({
            where: { id: product },
          })
            .then(async (product) => {
              let storedqty = product.quantity;
              let total = storedqty - quantity;

              let price = quantity * product.price;

              resolve(product);

              // update product quantity;
              await Products.update(
                { quantity: total },
                {
                  where: {
                    id: product.id,
                  },
                }
              );
            })
            .catch((err) => {
              console.log("Err :" + err);
            });
        } catch (e) {
          reject(e);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/** @function : remove product from cart */
exports.removeCartItem = (id) => {};
