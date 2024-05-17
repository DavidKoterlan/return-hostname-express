# Return Hostname Express Application

This project contains a simple Node.js application built with Express that returns the hostname of the server along with the necessary files to contenerize this application with docker.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#Installation)

## Features
- Returns the hostname for test purposes. When a request is made to the root URL (/), the server responds with the hostname of the server machine obtained using the os module.
- The repository contains a Dockerfile that can build the docker image.

## Prerequisites
- [Docker engine](https://docs.docker.com/engine/install/) is needed for building this docker image and running a container.

## Installation
1. Clone the repository to your local machine:
```bash
git clone https://github.com/DavidKoterlan/return-hostname-express.git
cd return-hostname-express-app
```
2. Build the docker image:
```bash
docker build --tag return-hostname-express-app:1.0.0 .
```
This command will build a docker image with the repository name: return-hostname-express-app and tag 1.0.0.

3. Run the container:
```bash
docker run --rm -p 127.0.0.1:8080:8080 -d return-hostname-express-app:1.0.0
```
This command will run a container based on the image created in the previous step and will map the port 8080 on the local machine to the container's port 8080, where the application is running.

4. Test the application:

Run the following command:
```bash
curl http://127.0.0.1:8080
```
Or open the following url in your browser: http://127.0.0.1:8080

You should see the following output: `Hostname: <ID of the container>` (<ID of the container> is the actual hostname of the container.) 
