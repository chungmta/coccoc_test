const { execSync } = require('child_process');

const installDependencies = (directory) => {
  execSync(`cd ${directory} && npm install`, { stdio: 'inherit' });
}

installDependencies('frontend');
installDependencies('backend');

console.log('Dependencies installed for both frontend and backend.');