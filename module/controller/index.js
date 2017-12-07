/**
 * ##module## Controller
 */
'use strict'

let ##module##Service = require('./../service');

/**
 * Get ##module## Controller
 */
exports.get = async () => {
    try{
        return await ##module##Service.get();
    } catch(err){
        throw(err);
    }
}

/**
 * Create ##module## Controller
 */
exports.create = async (params) => {
    try{
        let new##module##Params = {
            ##module##: params.##module##
        };
        return await ##module##Service.create(params);
    } catch(err){
        throw(err);
    }
}

/**
 * Update ##module## Controller
 */
exports.update = async (params) => {
    try{
        let update##module##Params = {
            update: {
                $set: params.##module##
            },
            // id: params.id,
            options: {
                runValidators: true
            }
        };
        return await ##module##Service.findByIdAndUpdate(update##module##Params);
    } catch(err){
        throw(err);
    }
}