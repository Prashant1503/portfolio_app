const addressService = require("../services/address");

exports.addNewAddress = (req, res) => {
  const id = req.user.id;

  let addressObj = { 
    city, 
    address,
     country,
     zip_code
     } = req.body;

    
  addressService
    .createAddress(addressObj, id)
    .then((address) => {
      return res.status(200).json({ address });
    })
    .catch((err) => {
      console.log("Address Err :" + err);
      return res.status(500).json({ err });
    });
};


exports.deleteAddress = (req,res) => {

  const id = req.params.id;

  if(!id) {
    return res.status(422).json({msg : "Address id is required"});
  }

  addressService.deleteAddress(id)
    .then((address) => {
      return res.status(200).json({msg : "Address removed success..",address});
    })
    .catch(err => {
      return res.status(500).json({err});
    })
}