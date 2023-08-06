import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class User extends Model {}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'user',
    }
);

model.exports = User;