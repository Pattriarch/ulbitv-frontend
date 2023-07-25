cd ~/ulbitv-frontend
npm run build:prod

rm -rf ~/../var/www/ulbitv-frontend/html
mv ~/ulbitv-frontend/dist ~/../var/www/ulbitv-frontend/html
