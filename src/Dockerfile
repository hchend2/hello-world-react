# build the react app
FROM node:18-alpine AS build

# set the working directory
WORKDIR /app

# copy the package.json files and package-lock.json
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the rest of the app code
COPY . .
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

# build the image
# docker build -t react-app .
# run the container
# docker run -p 80:80 react-app
# run the container in detached mode
# docker run -d -p 80:80 react-app
# run the container with a name
# docker run -d -p 80:80 --name react-app react-app