const { contextBridge } = require("electron");

const API = {
  printmsg: () => "helloworld from preload",
  twomsg: "this is string",
};

contextBridge.exposeInMainWorld("api", API);
