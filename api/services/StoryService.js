const Story = require('../models/Story')
module.exports = {
    find: function(params, callback){
        Story.find(params,'_id title text next', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback){
        News.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}
