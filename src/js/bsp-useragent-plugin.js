import $ from 'jquery';
import bsp_utils from 'bsp-utils';
import bsp_user_agent from 'bsp-useragent';

export default bsp_utils.plugin(false, 'bsp', 'useragent', {
    '_each': function(item) {
        var options = this.option(item);
        var moduleInstance = Object.create(bsp_user_agent);
        moduleInstance.init($(item), options);
    }
});