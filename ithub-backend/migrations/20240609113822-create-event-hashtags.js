"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("event_hashtags", {
      event_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "events",
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
    await queryInterface.dropTable("event_hashtags");
  },
};
