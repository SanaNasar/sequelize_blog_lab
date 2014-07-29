function Author(sequelize, DataTypes) {
	return sequelize.define('author', {
		authorname: DataTypes.STRING
	});
}

module.exports = Author;