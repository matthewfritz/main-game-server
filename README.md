# Main Game Server

The main game server implementation that custom games will use for centralized consistent communication.

This implementation contains a communication server, a RESTful web service API, and an admin panel.

## Table of Contents

* [Requirements and Packages](#requirements-and-packages)
* [Installation](#installation)
   * [Install Node Packages](#install-node-packages)
   * [Configuration](#configuration)
* [Starting the Server](#starting-the-server)
* [Stopping the Server](#stopping-the-server)

## Requirements and Packages

* [NodeJS](https://nodejs.org)
* [MySQL](https://www.mysql.com) / [MariaDB](https://mariadb.org)
   * Node package: [mysql](https://www.npmjs.com/package/mysql)
* [Redis](https://redis.io/)
   * Node package: [redis](https://www.npmjs.com/package/redis)
* [Axios](https://axios-http.com/)
   * Node package: [axios](https://www.npmjs.com/package/axios)
* [Dotenv](https://github.com/motdotla/dotenv)
   * Node package: [dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/)
   * Node packages:
      * [express](https://www.npmjs.com/package/express)
      * [express-session](https://www.npmjs.com/package/express-session)
      * [cookie-parser](https://www.npmjs.com/package/cookie-parser)
   * [Session Management in Node.js using ExpressJS and Express Session](https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/)
* [Socket.io](https://socket.io)
   * Node package: [socket.io](https://www.npmjs.com/package/socket.io)
* [Socket.io Redis Adapter](https://socket.io/docs/v4/redis-adapter)
   * Node package: [@socket.io/redis-adapter](https://www.npmjs.com/package/@socket.io/redis-adapter)
* [VueJS](https://vuejs.org/)
   * Node package: [vue](https://www.npmjs.com/package/vue)

## Installation

### Install Node Packages

```
npm install
```

## Configuration

```
cp .env.example .env
```

Now modify the `.env` configuration values to match your environment.

## Commands

### Starting the Server

Ensure your MySQL / MariaDB and Redis processes are running first.

```
node mainserver.js start
```

### Stopping the Server

```
node mainserver.js stop
```
