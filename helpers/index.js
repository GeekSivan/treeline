module.exports = require('machine').pack({
  pkg: {
    machinepack: {
      machineDir: 'machines/',
      machines: [
        'authenticate', //<< api
        'build-ascii-art',
        'connect-to-treeline', //<< api
        'export-pack', //<< api
        'fetch-changes-and-subscribe-to-project', //<< api
        'get-project-info', //<< api
        'lift-preview-server',
        'link-if-necessary',
        'link',
        'list-apps', //<< api
        'list-packs', //<< api
        'login-if-necessary',
        'login',
        'logout',
        'ping-server', //<< api
        'start-developing-project',
        'unlink',
        'verify-cli-compatibility', //<< api
        'upgrade-from-v2'
      ]
    }
  },
  dir: __dirname
});
