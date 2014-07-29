function Post(sequelize, DataTypes) {
	return sequelize.define('post', {
		posttitle: DataTypes.STRING,
		postcontent: DataTypes.STRING
	});
}

module.exports = Post;