 module.exports = {
	//up: keyword creates the migration
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('posts',
			{id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			authorId: {
				type: DataTypes.INTEGER,
				foriegnKey: true,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
			posttitle: DataTypes.STRING,
			postcontent: DataTypes.STRING
			})
			.complete(done);
  },
  // down: keyword destroys the migration
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('posts')
    .complete(done);
  }
};