const db = require("../models");

const UserModel = db.User;

module.exports = {
  createNewUser: async ({ firstName, lastName, password, roleId, code }) => {
    return await UserModel.create({
      firstName,
      lastName,
      password,
      roleId,
      code,
    });
  },
  getUserById: async (id, options = { getPassword: false, getRole: false }) => {
    return await UserModel.findByPk(id, {
      attributes: {
        exclude: ["roleId", options.getPassword ? "" : "password"],
      },
      include: [
        ...(options.getRole
          ? [
              {
                model: db.Role,
                as: "role",
                attributes: {
                  exclude: ["createdAt", "updatedAt", "deletedAt", "id"],
                },
              },
            ]
          : []),
      ],
    });
  },
};
