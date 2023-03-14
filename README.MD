# Docker Crash Course

## What is Docker?

- Uses containers to run apps in isolated environments
- Allows for team members to run app regardles of dependencies

## Containers Vs. VMs?

- VMs have their own OS + slower
- Containers share a host OS + quicker

## Installing Docker

## Images

- Images are blueprints for containers
- runtime env
- app code
- dependencies
- env variables...
- commands

## Containers

- running instances of the image
- run the app
- isolated process - run independently

## Docker images are made up of several layers

### Parent image

- includes OS and sometimes the runtime env

### Docker hub

- Online repository of docker images - premade parent images

e.g Pull node image to docker desktop
`docker pull node`

### ` TODO`

## The dockerfile

- set of instructions to create an image
- lists out all the layers to create image

Create a Dockerfile

```
FROM node:19-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
```

Docker desktop app - will use the EXPOSE port in the dockerfile to set up port mapping.

If we were to run containers from the cmd line then we wouldn't need to use the EXPOSE portnumber

## Build Docker

```
docker build -t myapp .
```

## Starting & Stopping Containers

```
TODO
```
