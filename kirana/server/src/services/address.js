const Address = require("../../models").Address;

exports.createAddress = (addressObj, id) => {
  let { city, address, country, zip_code } = addressObj;


  return new Promise(async (resolve, reject) => {

    await Address.create({
      city,
      address,
      country,
       zip_code,
      "userId": id,
    })
      .then((address) => {
        if (!address) {
          reject("Address not saved");
        }

        resolve(address);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


exports.deleteAddress = (id) => {

  return new Promise(async(resolve,reject) => {

    await Address.destroy({
      where : {id}
    })
    .then((address) => {

      if(!address) {
        reject("Address failed to remove");
      }

      resolve(address);
    })
    .catch(err => {
      reject(err);
    })
  })

}