[![@windingtree/org.id-test-http-server](https://img.shields.io/npm/v/@windingtree/org.id-test-http-server.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-http-server)
# @windingtree/org.id-test-http-server
Http Server for ORGiD protocol testing

## Setup

```bash
npm install @windingtree/org.id-test-http-server
```

## Usage

```javascript
import HttpFileServer from '@windingtree/org.id-test-http-server';

const server = await ganache();

server.getAccounts()
  .then(accounts => {
    console.log(accounts);
    /*
      [
        '0xe0367e4F58B1742B16DEE96E436554C4Ac679D23',
        '0x4cEAC03Ec8C9643b8be83830A45b69be430125d9',
        '0x19e17F4051f82471921C29319EE77c27992404b2',
        '0xdD004E3258CEfA1e01eC06dD6D88347Daf11eEA0',
        ...
      ]
    */
  })
  .catch(console.error);

/*
server.web3 // web3 instance
server.port
server.providerUri // web3 provider URI
server.provider // web3 provider
server.close() // async closing the server
*/

// HttpFileServer can be used for testing cases where it is required to host files
const httpServer = new HttpFileServer();
httpServer.start()
  .then(() => {
    const file = {
      type: 'json',
      path: '<path_with_name>.json',
      content: '{"test": "test"}'
    };
    httpServer.addFile(file);

    const { data } = await axios.get(`${httpServer.baseUri}/${file.path}`);
    console.log(data);
    // {"test": "test"}

  })
  .catch(console.error);

```

## Documentation

[Generated docs](docs#readme)