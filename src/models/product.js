const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     registerProducts:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: fideo
 *         price:
 *           type: string
 *           example: almacen
 *         image_url:
 *           type: string
 *           example: https://th.bing.com/th/id/OIP.LAlScQZ3K4VPUUJ35dVUgQHaFl?w=246&h=186&c=7&r=0&o=5&pid=1.7
 *         status:
 *           type: boleano
 *           example: true
 *         user_id:
 *           type: integer
 *           example: 100
 */

class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        availableOty: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "product",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
