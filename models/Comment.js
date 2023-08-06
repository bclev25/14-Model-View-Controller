import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Comment extends Model {}

Comment.init(
    {
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        BlogPost_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BlogPost',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Comment',
    }
);

model.exports = Comment;