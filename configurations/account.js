"use strict";

const { DataTypes } = require("sequelize");
const dateSample = new Date(0);
const name = "Account";
const roles = ["user", "admin"];
const sample = { id: 0, username: "", password: "", fullName: "", role: roles[0], createdAt: dateSample, updatedAt: dateSample };

module.exports = {
	name,
	sample,
	attributes: {
		id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
		username: { type: DataTypes.STRING, allowNull: false, defaultValue: sample.username, unique: true },
		password: { type: DataTypes.STRING, allowNull: false, defaultValue: sample.password },
		fullName: { type: DataTypes.STRING, allowNull: false, defaultValue: sample.fullName },
		role: { type: DataTypes.ENUM, allowNull: false, defaultValue: sample.role, values: roles },
		createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: sample.createdAt },
		updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: sample.updatedAt }
	}
};
