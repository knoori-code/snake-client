const net = require("net")
const { IP, PORT } = require("./constants")

// Establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  })

  // interpret incoming data as text
  conn.setEncoding("utf-8")

  conn.on("data", (data) => {
    console.log(data)
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: BIG");
    // conn.write("Move: up")
  
  })

  return conn;

}

// created conn object using the net library. Represents connection with the server. 

module.exports = connect;