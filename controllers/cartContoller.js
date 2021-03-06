const Cart = require("../model/cart");
const Product = require("../model/Product");

module.exports.getCartItems = async (req, res) => {
  const userId = req.params.id;
  try {
    //i didn't undrestand that to be honest
    //ask about it
    let cart = await Cart.findOne({ userId });
    if (cart && cart.items.length > 0) {
      res.send(cart);
    } else res.send(null);
  } catch (error) {
    res.status(500).send("error: Somthing went wrong");
  }
};

module.exports.addCartItems = async (req, res) => {
  const userId = req.params.id;
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    let item = await Product.findOne({ _id: productId });
    if (!item) {
      res.status(400).send("Item not found");
    }
    const name = item.name;
    const price = item.price;
    if (cart) {
      // if The cart do exiest for the User
      let ItemIndex = cart.items.findIndex((p) => p.productId == productId);
      //chek if the product do exesit in card or not
      if (ItemIndex >= 0) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += quantity;
        cart.items[itemIndex] = productItem;
      } else {
        cart.items.push({ productId, name, quantity, price });
      }
      cart.bill += quantity * price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //if there is no cart exist , this will creat a new cart
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price }],
        bill: quantity * price,
      });
      return res.status(201).send(newCart);
    }
  } catch (error) {
      console.log(error)
      res.status(500).json({error:error.message})
  }
};

module.exports.deleteitem=async (req,res)=>{
    const userId=req.params.user.userId;
    const productId=req.params.itemId;
    try {
        let cart=await Cart.findOne({userId});
        let itemIndex=cart.items.findIndex((p)=>p.productId==productId);
        if(itemIndex>-1){
            let productItem=cart.items[itemIndex];
            cart.bill-=productItem.quantity*productItem.price;
            cart.items.splice(itemIndex,1)
        }cart=await cart.save();
        return res.status(201).send(cart);
    } catch (error) {
        console.log(error)
        res.status(500).send('Something went Wrong')
    }


}
