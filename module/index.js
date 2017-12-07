/**
 * ##module## Index File
 */
'use strict'

const ##module##Model = require('./model'),
    ##module##Config = require('./##module##.config'),
    ##module##Controller = require('./controller'),
    ##module##Service = require('./service'),
    Router = require('koa-router'),
    config = require('./../../config/environment'),
    l = require(config.shared.logger).root.child({ 'module': __filename.substring(__dirname.length + 1, __filename.length - 3) });

let m = module.exports = {};
/**
 * Initialize ##module## Module Function
 * @param {*} params 
 */
m.init = (params) => {
    try {
        l.info('Initailizing ##module## Module');
        if (##module##Config.expose.api) {
            let ##module##Router = Router();
            let ##module##ApiParams = {
                router: ##module##Router
            };
            require('./api').init(##module##ApiParams);
            params.router.use('/v1/##module##', ##module##Router.routes());
        }
        if (##module##Config.expose.controller)
            m.controller = ##module##Controller;
        if (##module##Config.expose.service)
            m.service = ##module##Service;
        if (##module##Config.expose.model)
            m.model = ##module##Model;
        l.info('##module## Module Initialized');
    } catch (err) {
        throw (err);
    }
}