# Main Game Server

The main game server implementation that custom games will use for centralized consistent communication.

This implementation contains a communication server, a RESTful web service API, and an admin panel.

## Table of Contents

* [Requirements and Packages](#requirements-and-packages)
* [Installation](#installation)
   * [Install Node Packages](#install-node-packages)
* [Starting the Server](#starting-the-server)
* [Stopping the Server](#stopping-the-server)

## Requirements and Packages

* [NodeJS](https://nodejs.org)
* [MySQL](https://www.mysql.com) / [MariaDB](https://mariadb.org)
   * Node package: [mysql](https://www.npmjs.com/package/mysql)
* [Redis](https://redis.io/)
   * Node package: [redis](https://www.npmjs.com/package/redis)
* [Express](https://expressjs.com/)
   * Node package: [express](https://www.npmjs.com/package/express)
* [Socket.io](https://socket.io)
   * Node package: [socket.io](https://www.npmjs.com/package/socket.io)
* [Socket.io Redis Adapter](https://socket.io/docs/v4/redis-adapter)
   * Node package: [@socket.io/redis-adapter](https://www.npmjs.com/package/@socket.io/redis-adapter)
* [VueJS](https://vuejs.org/)
   * Node package: [vue](https://www.npmjs.com/package/vue)
* [Axios](https://axios-http.com/)
   * Node package: [axios](https://www.npmjs.com/package/axios)

## Installation

### Install Node Packages

```
npm install
```

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
