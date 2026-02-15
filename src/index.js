#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n📝 Metadata Editor v1.0.0\n'));
  console.log(chalk.yellow('Use: gh repo edit owner/repo --description "New desc" --homepage "https://..."'));
}
if (require.main === module) main();
module.exports = { main };
