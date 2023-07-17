"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      Blog.belongsTo(models.Category, { foreignKey: "category_id" });
      Blog.belongsTo(models.Country, { foreignKey: "country_id" });
      Blog.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Blog.init(
    {
      blogs_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      image_url: {
        type: DataTypes.BLOB("long"),
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.TEXT,
      },
      video_url: {
        type: DataTypes.STRING,
      },
      keyword: {
        type: DataTypes.STRING,
      },
      country_id: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
        onUpdate: DataTypes.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "Blog",
      tableName: "blogs",
      underscored: true,
      timestamps: true,
    }
  );
  return Blog;
};
