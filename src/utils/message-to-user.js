import client from "../client";

export default (username, message) => {
  return client.action(client.activeChannel, `@${username} ${message}`);
};
