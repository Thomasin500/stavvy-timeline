import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Timeline from "./Timeline";

storiesOf("Timeline", module)
    .add("with text", () => (
        <Timeline>Hello Button</Timeline>
    ))
    .add("with some emoji", () => (
        <Timeline>😀 😎 👍 💯</Timeline>
    ));