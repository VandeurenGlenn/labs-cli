import commander from 'commander';
import { version } from '../package.json';
import checkpoints from 'crypto-checkpoints'
commander
  .version(version)
  .option('api', 'start api')
  .option('checkpoints', 'update checkpoints')
  .option('node', 'start crypto-ipfs-node')
  .option('version', 'current version')
  .parse(process.argv);

const commands = {
  daemon: Boolean(commander.deamon),
  api: Boolean(commander.api),
  checkpoints: Boolean(commander.checkpoints),
  node: Boolean(commander.node),
}

const tasks = {
  api: () => require('crypto-io-api'),
  checkpoints: () => checkpoints.start(),
  node: () => require('crypto-ipfs-node')
}

for (const command of Object.entries(commands)) {
  const name = command[0];
  const enabled = command[1];
  if (enabled) {
    tasks[name]();
  }
}
