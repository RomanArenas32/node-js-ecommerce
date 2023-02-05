const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: creitian@gmail.com
 *         password:
 *           type: string
 *           example: hola
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: creitian@gmail.com
 *         password:
 *           type: string
 *           example: hola
 *     loginResponse:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: creitian@gmail.com
 *         password:
 *           type: string
 *           example: hola
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCT6IkpXVCJ9.eyJ
 */

class user extends Sequelize.Model {
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
        username: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: "user_email_key",
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        hooks: {
          beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
          },
        },
        sequelize,
        tableName: "user",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_email_key",
            unique: true,
            fields: [{ name: "email" }],
          },
          {
            name: "user_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
