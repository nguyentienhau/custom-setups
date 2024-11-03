"use strict";

const { DataTypes } = require("sequelize");
const dateSample = new Date(0);
const roles = ["user", "admin"];

module.exports = {
	name: "Account",
	sample: { id: 0, username: "", password: "", fullName: "", role: roles[0], createdAt: dateSample, updatedAt: dateSample },
	attributes: {
		id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
		username: { type: DataTypes.STRING, allowNull: false, defaultValue: "", unique: true },
		password: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		fullName: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		role: { type: DataTypes.ENUM, allowNull: false, defaultValue: roles[0], values: roles },
		createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample },
		updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample }
	}
};
