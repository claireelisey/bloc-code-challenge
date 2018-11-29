'use strict';

module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define('Post', {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});

    Post.associate = function(models) {

        Post.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
      
        Post.hasMany(models.Comment, {
            foreignKey: "postId",
            as: "comments"
        });

    };

    return Post;

};