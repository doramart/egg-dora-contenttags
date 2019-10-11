const _ = require('lodash');

let ContentTagController = {

    async list(ctx, app) {

        try {

            let contentTagList = await ctx.service.contentTag.find({
                isPaging: '0'
            });

            ctx.helper.renderSuccess(ctx, {
                data: contentTagList
            });

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });

        }
    }


}

module.exports = ContentTagController;