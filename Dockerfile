
# build the react app
FROM node:18-alpine AS build

# set the working directory
WORKDIR /app

# copy the package.json files and package-lock.json from the parent directory
COPY ../package*.json ./

# install the dependencies
RUN npm install

# copy the rest of the app code from the parent directory
COPY .. .

# build the app for production
RUN npm run build

# start the server
FROM nginx:alpine

# remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# copy the nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose the port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]