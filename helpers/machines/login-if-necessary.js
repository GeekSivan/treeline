module.exports = {


  friendlyName: 'Log in (if necessary)',


  description: 'Authenticate this computer to access your Treeline account.',


  inputs: {

    keychainPath: {
      description: 'Path to the keychain file on this computer. Defaults to `.treeline.secret.json` in the home directory.',
      extendedDescription: 'If provided as a relative path, this will be resolved from the current working directory.',
      example: '/Users/mikermcneil/Desktop/foo'
    },

    treelineApiUrl: {
      description: 'The base URL for the Treeline API (useful if you\'re in a country that can\'t use SSL, etc.)',
      example: 'http://api.treeline.io',
      defaultsTo: 'https://api.treeline.io'
    }

  },


  exits: {

    unrecognizedCredentials: {
      description: 'Unrecognized username/password combination.',
      extendedDescription: 'Please try again or visit http://treeline.io to reset your password or locate your username.'
    },

    requestFailed: {
      description: 'Could not communicate with Treeline.io -- are you connected to the internet?'
    },

    couldNotParse: {
      description: 'Keychain file is corrupted (cannot be parsed as JSON).'
    },

    success: {
      description: 'Computer is now logged in as the returned username.',
      example: {
        username: 'mikermcneil',
        secret: 'foasdgaj382913'
      }
    }

  },


  fn: function (inputs, exits){
    var thisPack = require('../');
    var LocalTreelineProjects = require('machinepack-local-treeline-projects');

    LocalTreelineProjects.readKeychain({
      keychainPath: inputs.keychainPath
    }).exec({
      error: exits.error,
      doesNotExist: function (){
        thisPack.login({
          treelineApiUrl: inputs.treelineApiUrl,
          keychainPath: inputs.keychainPath
        }).exec({
          error: exits.error,
          unrecognizedCredentials: exits.unrecognizedCredentials,
          success: function (me){
            return exits.success(me);
          }
        });
      },
      success: function (me){
        return exits.success(me);
      }
    });
  }

};
