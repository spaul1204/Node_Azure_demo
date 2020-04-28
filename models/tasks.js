module.exports = function(sequelize,Sequelize){
    return sequelize.define('tasks',{
       taskDescription : {
           type : Sequelize.STRING,
           field : 'task_description'
        },
    
        userID:{
            type: Sequelize.STRING,
            field:'user_id'
        },
        addedDate:{
            type : Sequelize.DATE,
            field : 'added_date'
        },

        updatedDate:{
            type : Sequelize.DATE,
            field : 'updated_date'
        },

        status:{
            type: Sequelize.STRING,
            field:'status'
        }
    
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    }
 )};
