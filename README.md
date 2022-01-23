# Main Game Server

The main game server implementation that custom games will use for centralized consistent communication.

This implementation contains a communication server, a RESTful web service API, and an admin panel.

## Table of Contents

* [Requirements](#requirements)
* [Starting the Server](#starting-the-server)
* [Stopping the Server](#stopping-the-server)

## Requirements

* NodeJS
* MySQL / MariaDB
* Redis
* Express
* Socket.io

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
