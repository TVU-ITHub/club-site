"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("post_comments", {
      post_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "posts",
          key: "id",
        },
      },
      comment_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "comments",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("post_comments");
  },
};
