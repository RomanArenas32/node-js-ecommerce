const  CreateServices = require("../services/create_prosuct.services");

const register = async (req, res) => {
  try {

    const product = req.body;
    const result = await CreateServices.register(product);
    if (result) {
      res.status(201).json({ message: "product created" });
      
    } else {
      res.status(400).json({ message: "somthign wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
   
module.exports = {
  register,
};
