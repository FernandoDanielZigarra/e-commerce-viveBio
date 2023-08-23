'use strict';

module.exports = (sequelize, DataTypes) => {

    const alias = "ProductImage";

    const cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },

        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName : 'products'
                },
                key: 'id',
            }
        },
        primary : {
            type : DataTypes.BOOLEAN
        }

    }

    const config = {
        tableName: "productsimages",
        timestamps: false,
        createdAt: false,
        //updatedAt: 'updateTimestamp'
    };

    const ProductImage = sequelize.define(alias, cols, config);

    ProductImage.associate = function (models) {
        ProductImage.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return ProductImage

}




