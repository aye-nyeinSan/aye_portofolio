# FROM node:18-alpine as build
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM node:18-alpine as prod
# COPY --from=build /app/dist ./dist
# COPY --from=build /app/package*.json ./

# RUN npm i 
# EXPOSE 8080
# CMD ["npm","run","preview"]

FROM node:18-alpine 
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/

EXPOSE 8080
# Run the development server
CMD ["npm", "run", "dev"]

