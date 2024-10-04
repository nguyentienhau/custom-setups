"use strict";

require("../custom");
const { accountConfiguration } = require("../configurations");
const { name, attributes } = accountConfiguration;
const attributeNames = Array.from(Object.keys(attributes));
const columns = attributeNames.reduce(function (accumulator, attributeName) {
	accumulator[attributeName.toSnakeCase()] = attributes[attributeName];
	return accumulator;
}, {});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.createTable(name, columns);
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable(name);
	}
};
