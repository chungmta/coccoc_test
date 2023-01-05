/**
 * This script install current dependencies
 * and backend, frontend directory
 */
const { execSync } = require('child_process');

const installDependencies = (folder) => {
  try {
    console.log(`Installing dependencies for ${folder}...`);
    execSync(`cd ${folder} && npm install`, { stdio: 'inherit' });
    console.log(`Dependencies installed for ${folder}`);
  } catch (error) {
    console.error(`Error installing dependencies for ${folder}: ${error}`);
  }
};

installDependencies('.'); // install dependencies for parent folder
installDependencies('frontend'); // install dependencies for frontend folder
installDependencies('backend'); // install dependencies for backend folder

console.log('All dependencies installed!');
