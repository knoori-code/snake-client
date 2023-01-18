const net = require("net")

// Establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  })

  // interpret incoming data as text
  conn.setEncoding("utf-8")

  conn.on("data", (message) => {
    console.log(message)
  })

  return conn;

}

// created conn object using the net library. Represents connection with the server. 

module.exports = connect;