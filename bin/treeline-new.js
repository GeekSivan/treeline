#!/usr/bin/env node

require('machine-as-script')({

  args: ['name'],

  machine: require('../helpers/machines/new-app')

}).exec({

  success: function (){
    console.log('The files and folders for your new app have been generated!');
    console.log('Now `cd` into the new app and run `treeline preview` to get started.');
  }

});
