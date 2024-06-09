"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("small_team_projects", {
      small_team_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "small_teams",
          key: "id",
        },
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("small_team_projects");
  },
};
