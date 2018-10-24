---
title: Zero config React + Typescript + CSS Modules + JEST with Poi
date: "2018-02-19T20:46:37.121Z"
tags: ["ui dev", "typescript", "css modules", "0cjs", "tools"]
---

[Poi.js](https://poi.js.org/) is a tool that comes to replace starter-kits and boilerplate projects. Poi's promise is "no more configuration hell". With almost no config it delivers the following:

- Automatic transpilation and bundling (with webpack and babel/postcss)
- Hot code reloading
- Files in `./static` are copied to dist folder

We will try to push it further and get a somewhat advanced configuration to work with Poi. My tech stack preference at the moment of writing is React with Typescript utilising CSS Modules (not yet available out of the box in create-react-app without eject) and tested with Jest and Enzyme.
That's the workflow that we are about to implement and it shouldn't take longer than 15 mins. Buckle up and let's get started.

## Poi

First install the Poi tool itself inside your project:  
`npm install poi -D`

Next we need to run Poi and we will use npx to help us out.  
[Npx](https://www.npmjs.com/package/npx) allows to flawlessly execute node binaries in your local project. If you don't have it installed yet, let's get it sorted. (_Update: As of npm@5.2.0 npx comes bundled in npm, so need to install it separately_)
`npm install npx -g`

If you try to run npx poi now, you will see an error as there is still no index.js file in the root directory. For now let's just add an empty file to keep Poi happy:  
`touch index.js`

## React

We've got something, but we need our React super power.  
And this is what we normally do to acquire it over the internet connection:  
`npm install react react-dom --save`

Poi has Vue.js config included out of the box, for everything else you need a preset. Luckily, there is one for React:  
`npm install poi-preset-react -D`

All presets are wired up in `poi.config.js` and that is the only piece of config we need to get up and running with React. Impressive so far!

```js
module.exports = {
  presets: [require('poi-preset-react')()]
};
```

<center><small>poi.config.js</small></center><br/>

Next we add a simple `App.jsx` file to test if things work well with JSX

```jsx
const App = () => (
  <div>
    <h1>My App</h1>
  </div>
);

export default App;
```

<center><small>App.jsx</small></center><br/>

Last thing we need to add a compulsory index.js contents for our react app to render App component in the DOM to start enjoying #0CJS React with Hot Module Replacement.

```js
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render(<App />, document.getElementById('app'));
```

<center><small>index.js</small></center><br/>

## Typescript

Next level is to get React to work with Typescript.  
To accomplish this task we will need the following:

- Add typescript
- Add `tsconfig.json`
- Add a poi preset for typescript and wire it in
- Add missing type definitions
- Add a React-Typescript component

Let's install Typescript and Poi preset first as dev dependencies on our project.  
`npm install typescript poi-preset-typescript -D`

We already know how to wire up Poi presets, right?

```js
module.exports = {
  presets: [require('poi-preset-react')(), require('poi-preset-typescript')()]
};
```

<center><small>poi.config.js</small></center><br/>

Next comes a simple `tsconfig.json` that is required by Typescript to better understand how you want it to operate. Let's come up with one:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "strict": true,
    "module": "es2015",
    "moduleResolution": "node",
    "jsx": "react"
  }
}
```

<center><small>tsconfig.json</small></center><br/>

And finally, we will rename our `App.jsx` to `App.tsx` and add missing react types:  
`npm install @types/react -D`

Here's how our new component will look like:

```tsx
import * as React from 'react';

const App: React.SFC<{}> = () => (
  <div>
    <h1>My App</h1>
  </div>
);

export default App;
```

<center><small>App.tsx</small></center><br/>

## CSS Modules

Poi documentation says that files ending with .module.css .module.scss .module.less should support CSS modules by default.  
Let's add a file App.module.css, import it into `App.tsx`:

```css
.heading {
  color: purple;
}
```

<center><small>App.module.css</small></center><br/>

```tsx
import * as React from 'react';
import * as styles from './App.module.css';

const App: React.SFC<{}> = () => (
  <div>
    <h1 className={styles.heading}>My App</h1>
  </div>
);

export default App;
```

<center><small>App.tsx</small></center><br/>

When we import our css module into the file TS won't be happy about it and will tell us that `[ts] Cannot find module ./App.module.css`  
Let's get that fixed too and add a `global.d.ts` file with the following line in it:  
`declare module '*.css';`

Spotty dog! We now have a working react app with typescript and css modules. You can also build it into a dist/ folder by issuing npx poi build in your terminal.

## Unit Testing with Jest and Enzyme

Install jest with typings and jest-css-modules to make webpack and Jest play nicely with CSS modules:  
`npm install jest @types/jest ts-jest jest-css-modules`

Add enzyme and all of its adapters and typings:  
`npm install enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 -D`

Next we need to configure adapter for enzyme:

```typescript
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

<center><small>setupTests.ts</small></center><br/>

and add some jest configuration to our `package.json` for it to work nicely with our typescript files and css modules.

```json
{
  "jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "setupTestFrameworkScriptFile": "./setupTests.ts",
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleNameMapper": {
      "\\.(css|jpg|png|svg)$": "<rootDir>/node_modules/jest-css-modules"
    },
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
  }
}
```

<center><small>package.json</small></center><br/>

Finally, let's write a simple unit test for our `App.tsx` component and put it into `__tests__` folder:

```tsx
import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  it('should exist', () => {
    expect(App).toBeDefined();
  });

  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').contains('My App')).toEqual(true);
  });
});
```

<center><small>App.spec.tsx</small></center><br/>

`npx jest` will run our tests and voilà, we've got everything green!  
We are now ready to code some serious stuff.
