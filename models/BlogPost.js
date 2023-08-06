import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class BlogPost extends Model {}

BlogPost.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
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
        modelName: 'BlogPost',
    }
);

model.exports = BlogPost;