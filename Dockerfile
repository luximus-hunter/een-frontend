### Build Step
# pull the Node.js Docker image
FROM node:18.15 as builder

# change working directory
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY . ./

# run npm install in our local machine
RUN npm i

# copy the generated modules and all other files to the container
COPY . .

# set env
ENV VITE_API=https://uno-backend:5001

# build the application
RUN npm run build

### Serve Step
# pull the Node.js Docker image
FROM node:18.15.0-alpine3.16

# change working directory
WORKDIR /app

# copy files from previous step
COPY --from=builder /usr/src/app/build .
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# the command that starts our app
CMD ["node","index.js"]
