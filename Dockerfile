# FROM keymetrics/pm2
# COPY . /home/www/myapp
# WORKDIR /home/www/myapp
# EXPOSE 3000
# ENTRYPOINT [ "pm2-runtime","start","./bin/www" ]

FROM node:alpine
COPY . /home/www/myapp
WORKDIR /home/www/myapp
EXPOSE 3000
ENTRYPOINT [ "node","./bin/www" ]