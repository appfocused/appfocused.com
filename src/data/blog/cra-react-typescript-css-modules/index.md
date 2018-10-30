---
title: Zero config React + Typescript + CSS Modules + JEST with create-react-app
date: "2018-10-30T08:46:32.111Z"
tags: ["ui dev", "typescript", "css modules", "0cjs", "tools"]
---

In the beginning of 2018 I [explored](/blog/poi-react-typescript-css-modules) a tool called [Poi](https://github.com/egoist/poi) that offered a trendy zero config setup for new apps.
I tried it out and wrote a blogpost on how to quickly set up an app with my favourite tooling at that time &mdash;

* **React** for performant views;

* **Typescript** for eloquent and less error prone JS;
* **CSS Modules** for encapsulated styles;
* **Jest** and **Enzyme** for unit testing.

Since that time zero config became a trend. [Create React App](https://github.com/facebookincubator/create-react-app), a CLI tool that helps JavaScript developers create react apps with no build configuration, moved in the similar direction but required more config and effectively "ejection" to come up with a list of tooling above.  

Since CRA v2, CSS modules are supported out of the box. React scripts allow to extend initial CRA setup and add any custom boilerplate onboard.

It turns out that you can create a similar setup with React + TS + CSS Modules and Jest in a couple of minutes. 

For typescript react app I chose a popular version of react scripts that was started by microsoft but later moved to wmonk's github repo &mdash; https://github.com/wmonk/create-react-app-typescript. 



# React / TypeScript / CSS Modules

```bash
npx create-react-app react-ts --scripts-version=react-scripts-ts@next
```

# Jest



```json
"test": "react-scripts-ts test --env=jsdom --watchAll"
```

<center><small>package.json</small></center>

# Enzyme

```bash
npm install enzyme enzyme-adapter-react-16 react-test-renderer -S
npm i @types/enzyme -D
```

  
Create `src/setupTests.ts`

```typescript
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new (Adapter as any)() });
```

<center><small>src/setupTests.ts</small></center>

### References

- https://facebook.github.io/create-react-app/docs/running-tests
