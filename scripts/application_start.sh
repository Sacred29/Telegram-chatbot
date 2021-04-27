#!/bin/bash
sudo chmod -R 777 /home/ec2-user/telegram-chatbot

#navigate intoour working directory where we have all the github files
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # loads nvm bash_completion

#install node modules
npm install

#start node app in background
node main.js > main.out.log > main.err.log < /dev/null &