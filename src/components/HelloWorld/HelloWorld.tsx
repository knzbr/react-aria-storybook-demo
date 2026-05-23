import { Text } from "react-aria-components";

import "./HelloWorld.css";

export type HelloWorldProps = {
  message?: string;
};

export function HelloWorld({ message = "Hello World" }: HelloWorldProps) {
  return (
    <section className="hello-world" aria-labelledby="hello-world-title">
      <Text id="hello-world-title" slot="title" className="hello-world__message">
        {message}
      </Text>
    </section>
  );
}
