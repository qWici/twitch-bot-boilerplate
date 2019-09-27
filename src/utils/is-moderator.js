import client from "../client";

export default user => user.mod || user.username === client.activeChannel;
