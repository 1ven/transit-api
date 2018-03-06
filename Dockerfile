FROM node:carbon

WORKDIR /var/www

# Taking advantage of cached layers
COPY package.json yarn.lock ./
RUN yarn install

# Copying application source to workdir. That's done after yarn install because of cached layers advantage
COPY . .