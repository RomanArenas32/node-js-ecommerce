const models = require("../models");
require("dotenv").config();

class CreateServices {
  static async register(products) {
    try {
      const result = await models.product.create(products);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static genToken() {
    try {
      const token = jwt.sign(data, secret.env.JWT_SEVRET, {
        expiresIn: "10m",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CreateServices;
