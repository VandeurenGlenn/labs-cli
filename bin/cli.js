'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var commander = _interopDefault(require('commander'));
var checkpoints = _interopDefault(require('crypto-checkpoints'));

var version = "0.1.0-alpha";

commander.version(version).option('api', 'start api').option('checkpoints', 'update checkpoints').option('node', 'start crypto-ipfs-node').option('version', 'current version').parse(process.argv);
const commands = {
  daemon: Boolean(commander.deamon),
  api: Boolean(commander.api),
  checkpoints: Boolean(commander.checkpoints),
  node: Boolean(commander.node)
};
const tasks = {
  api: () => require('crypto-io-api'),
  checkpoints: () => checkpoints.start(),
  node: () => require('crypto-ipfs-node')
};
for (const command of Object.entries(commands)) {
  const name$$1 = command[0];
  const enabled = command[1];
  if (enabled) {
    tasks[name$$1]();
  }
}
//# sourceMappingURL=cli.js.map
