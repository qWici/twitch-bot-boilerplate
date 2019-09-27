import tmi from "tmi.js";
import * as config from "./config";
let client = new tmi.client(config);
client.activeChannel = config.channels[0];

module.exports = client;
