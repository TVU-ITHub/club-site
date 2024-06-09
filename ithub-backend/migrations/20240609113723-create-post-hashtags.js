"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("post_hashtags", {
      post_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "posts",
          key: "id",
        },
      },
      hashtag_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "hashtags",
          key: "tag_name",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("post_hashtags");
  },
};
