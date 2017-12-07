/**
 * ##module## API Index File
 */
'use strict'

const ##module##APIController = require('./##module##.controller'),
    parse = require('koa-better-body'), 
    convert = require('koa-convert');

exports.init = (params) => {
    try{
        
        /**
         * Get ##module## API 
         */
        params.router.get('/', ##module##APIController.get);

        /**
         * Create ##module## API
         */
        params.router.post('/', convert(parse()), ##module##APIController.create);

        /**
         * Update ##module## API
         */
        params.router.put('/:id', convert(parse()), ##module##APIController.update);
    } catch(err){
        throw(err);
    }
}