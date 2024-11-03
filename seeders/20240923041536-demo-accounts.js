"use strict";

require("../custom");
const { accountConfiguration } = require("../configurations");
const { name, sample, attributes } = accountConfiguration;
const attributeNames = Array.from(Object.keys(sample));
const roles = attributes.role.values;
const row = attributeNames.reduce(function (accumulator, attributeName) {
	accumulator[attributeName.toSnakeCase()] = sample[attributeName];
	return accumulator;
}, {});
const demoAccounts = roles.map(function (role) {
	return { ...row, username: role, password: role, full_name: role, role: role };
});

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.bulkInsert(name, demoAccounts, {});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(name, { username: { [Sequelize.Op.in]: roles } }, {});
	}
};
