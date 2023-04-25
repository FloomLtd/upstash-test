import { UpstashClient } from "./upstash/UpstashClient";

const sendMessage = async (message: string): Promise<void> => {
  await UpstashClient.publishJSON({
    // url: "https://qstash.upstash.io/v1/publish/test-topic",
    topic: "test-topic",
    body: {
      hello: "world"
    },
  });
};

sendMessage("hello world");
