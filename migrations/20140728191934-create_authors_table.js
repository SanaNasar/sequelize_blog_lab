module.exports = {
	//up: keyword creates the migration
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('authors',
			{id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
			authorname: DataTypes.STRING,
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