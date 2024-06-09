"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("small_team_members", {
      small_team_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "small_teams",
          key: "id",
        },
      },
      member_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      role: {
        type: Sequelize.ENUM("leader", "deputy", "member"),
        allowNull: false,
        defaultValue: "member",
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("small_team_members");
  },
};
