/**
 * ##module## API Controller
 */
'use strict'

const ##module##Controller = require('./../controller'),
    config = require('./../../../config/environment'),
    l = require(config.shared.logger).root.child({ 'module': __filename.substring(__dirname.length + 1, __filename.length - 3) });
/**
 * Get ##module## API Controller
 */
exports.get = async (ctx, next) => {
    try {
        l.info('Request to get all ##module##s');
        let ##module##s = await ##module##Controller.get();
        l.info('##module##s Found');
        ctx.status = 200;
        ctx.body = {
            ##module##s: ##module##s
        };
    } catch (err) {
        throw (err);
    }
}

/**
 * Create ##module## API Controller
 */
exports.create = async (ctx, next) => {
    try {
        let ##module##Req = await ctx.request.fields;
        if (!##module##Req)
            ctx.throw('Invalid Request', 400);

        let new##module##Params = {
            ##module##: ##module##Req
        };
        l.info('Request to create ##module## with details: %o', new##module##Params);
        let new##module## = await ##module##Controller.create(new##module##Params);
        if (!new##module##)
            ctx.throw('Internal Server Error', 500);
        l.info('New ##module## Created: %o', new##module##);
        ctx.status = 201;
        ctx.body = {
            _id: new##module##._id
        }
    } catch (err) {
        throw (err);
    }
}

/**
 * Update ##module## API Controller
 */
exports.update = async (ctx, next) => {
    try{
        let ##module##Req = ctx.request.fields;
        let id = ctx.params.id;
        if(!##module##Req)
            ctx.throw('Invalid Request', 400);
        let update##module##Params = {
            ##module##: ##module##Req,
            id: id
        };
        l.info('Request to update ##module## with details ', update##module##Params);
        await ##module##Controller.update(update##module##Params);
        ctx.status = 200;
    } catch(err){
        throw(err);
    }
}