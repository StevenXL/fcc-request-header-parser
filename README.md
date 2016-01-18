# WhoAmI Microservice
This is a small, full-stack JavaScript application. The purpose of this
application is to return a JSON object with the **ipaddress**, **language**, and
**software** properties, and have the vales of these properties reflect client
information.

This repository is a back-end challenge from
[FreeCodeCamp](http://www.freecodecamp.com).

## Installation
1. Clone the repository: `git clone
   https://github.com/StevenXL/fcc-request-header-parser.git`.
2. Install dependencies: `npm install`; make sure to run this command inside the
   project's root directory.
3. Start the server: `nodejs server.js`; you might have to replace `nodej` with
   `node`, depending on what your system uses as its executable.

## Usage Example - Input
To use the microservice, make a get request to the following endpoint:
`/api/whoami`.

## Usage Example - Output
`{"ipaddress": 127.0.0.1, "language": "en-US", "software": "X11; Ubuntu; Linux
x86_64; rv:43.0"}`
