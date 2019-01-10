---
title: How to make your sluggish Jest v23 tests go faster
date: '2019-01-10T19:35:11.111Z'
featuredImage: './snail-jest.jpg'
tags: ['ui dev', 'unit testing', 'jest', 'jsdom']
---

Jest v23 was released in May 2018 and the headline of this release was "Blazing Fast Delightful Testing". However, at the beginning of 2019 it feels like the motto should have been ["Utterly Sluggish Repulsive Testing"](https://jestjs.io/blog/2018/05/29/jest-23-blazing-fast-delightful-testing.html). Here's why.

I recently decided to improve unit test performance on a newly joined project. It felt like it takes too long to test the whole suite (32 tests only) as well as test a separate file in isolation and watch mode. The direct consequences of that is that developers are not enjoying the process and trying to avoid touching unit tests. Product quality suffers in the long run.

Challenge accepted! I started investigating what can potentially go&nbsp;wrong.

Here's our original project's setup:

- React v16.5
- Typescript v3.1
- Jest v23.6 using `jsdom` as testEnvironment
- ts-jest
- Win10

`npx --envinfo preset jest`

```
  System:
    OS: Windows 10
    CPU: (4) x64 Intel(R) Xeon(R) CPU E5-2698 v3 @ 2.30GHz

  Binaries:
    Node: 8.11.1
    npm: 5.6.0
```

To cut the long story short, please find below a list of steps to speed up your tests at least `2x`.

## Jest v23 has performance issues

When run in `watch` mode it takes enormous amount of time for Jest to update, it's easier to restart tests altogether.

It turns out that a [regression has been introduced](https://github.com/facebook/jest/issues/6783) after version `22.4.4` that is not yet fixed and causes a **significant** slowdown.

**Step 1**  
Downgrade Jest  
`npm install jest@22.4.4 --save-dev`

## JSDOM is slower than Node

JSDOM is a JavaScript implementation of the WHATWG DOM and HTML standards. In other words, jsdom simulates a browser’s environment without running anything but plain JS. It runs tests fast but [not as fast](https://github.com/facebook/create-react-app/issues/5304) as pure Node. The difference can be two fold.

Create react app users saw the regression in performance with CRA v2 upgrade that in turn brought along jest v23.

**Step 2**  
`"testEnvironment": "node"` can be set as default for your tests, it will even allow to shallow render and test React components.

```json
"jest": {
  "testEnvironment": "node"
}
```

<center><small>package.json</small></center><br/><br/>

On those occasions when using DOM is required (e.g. mount a component), you can simply opt-in a spec to use another test environment by adding a comment on the very top of the `*.spec.js` file:

```js
/**
 * @jest-environment jsdom
 */
```

## Parallel testing is not always good

While Jest may be fast on modern multi-core computers with fast IOs, it may be slow on [certain setups](https://github.com/facebook/jest/issues/1524#issuecomment-260246008).

**Step 3**  
As [prescribed by Jest](https://jestjs.io/docs/en/troubleshooting), one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially.  
`npm test --runInBand`

Another alternative is to set the max worker pool to ~4. Specifically, on Travis-CI (free plan machines have only 2 CPU cores), this can reduce test execution time in half.  
`npm test --maxWorkers=4`

Experiment with these flags and see what works best for you locally and on CI environment. Set up separate tasks for different environment if required.

I hope that steps above will help to revive your unit testing and make it a bit more delightful.  
Looking forward to seeing updates to jest / jsdom and keep the release quality bar high.
