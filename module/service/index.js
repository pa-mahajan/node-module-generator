/**
 * ##module## Service File
 */
'use strict'

let Mongoose = require('mongoose'),
    ##module## = Mongoose.model('##module##');

/**
 * Get ##module## Service
 * @param {} params 
 */
exports.get = async (params = {}) => {
    try {
        return await ##module##.find(params.filter || {}).select(params.select || '');
    } catch (err) {
        throw (err);
    }
} 

/**
 * Create New ##module## Service
 */
exports.create = async (params) => {
    try{
        return await new ##module##(params.##module##).save();
    } catch(err){
        throw(err);
    }
}

/**
 * Update ##module## Service
 */
exports.findByIdAndUpdate = async (params) => {
    try{
        return await ##module##.findByIdAndUpdate(params.id , params.update , params.options || {});
    } catch(err) {
        throw(err);
    }
}