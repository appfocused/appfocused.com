---
title: Ultimate Autocomplete with TypeScript, React Hooks and RxJS
date: '2019-06-10T18:54:32.111Z'
tags: ['ui dev', 'typescript', 'react', 'rxjs', 'autocomplete']
featuredImage: './bruno-martins-442162-unsplash.jpg'
---

This user interface pattern is known by many names - Autocomplete / Autosuggest / Typeahead, but effectively is doing the same thing.

As [UI patterns](http://ui-patterns.com/patterns/Autocomplete) scientifically put it, the Autocomplete pattern is a predictive, recognition based mechanism used to assist users when searching. Simply put, this pattern allows faster input, reduces the number of keystrokes needed, prevents typing errors, and provides feedback on the validity.

In this blog post I'll show you how to implement this component from scratch with React, RxJS and, optionally, Material UI. TypeScript has become a default language for me over the last couple of years, so excuse me in advance for picking TS over JS for this tutorial.

While buiding it I'd like to focus on correct implementation and discuss what each of these dependencies bring to the table and what is the advantage of using this mix of libraries as opposed to using them on their own (which is absolutely possible) to complete the same task.

## Solution design

First thing first, let's plan what parts are required for our component to work and what are their responsibilities.

### Autocomplete component

- Manages mouse and keyboard input
- Invokes a service every time user input changes
- Renders user input
- Renders a list of suggestions
- Invokes a callback when suggestion is selected
- Handles errors

### Suggestion Service

- fetches relevant suggestions from a server when user entered more than 2 characters
- returns responses in correct order and always show suggestions from the most recent query
- waits for user to stop typing (500ms pause) to fire an API call
- transforms the shape of response to be consumed by our component

  
## Implementation

### Create starter app

`create-react-app my-app --typescript`

### Install dependencies

RxJS will be instrumental in our service. I decided to use Material UI in my Autocomplete component for simplicity. You are welcome to use other libraries or native HTML elements like `<input>` and `<div>`.  
  
```bash
npm i rxjs @material-ui/core --save
```

### Autocomplete component

*** TBA rxjs / react integration rationale ***

`BehaviorSubject` is a special type of RxJS Observable and it allows us to convert values from React's `onChange` event handler into a RxJS stream of values. Having a stream will be beneficial for our service to manipulate this data further.  
  
For now we just initialise it once outside out component's code:

```tsx
const subject$ = new BehaviorSubject('');
```
  
Next, we are going to send our new values to the `$subject` observable in the event handler like so:

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  subject$.next(e.target.value);
};
```
  
Then inside our `Autocomplete` component we add a subscription to all the future updates to `subject$`. Think of it as a callback to every change in the input field.
New hook `useEffect` is suited perfectly for this purpose. Second argument `[]` makes sure that subscription is done only once in component's lifecycle (after first render) and it can handle unsubscribe on unmount to avoid memory leaks.

```tsx
React.useEffect(() => {
  const subscription = subject$.subscribe(value => {
    // store new value in the state
  });

  return () => subscription.unsubscribe();
}, []);
```
  
Here's the Autocomplete skeleton:
  
```tsx
import * as React from 'react';
import { BehaviorSubject } from 'rxjs';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const subject$ = new BehaviorSubject('');

export const Autocomplete: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  React.useEffect(() => {
    const subscription = subject$.subscribe(
      value => {
        // store new value in the state
      },
      error => {
        // handle error here
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    subject$.next(e.target.value);
  };

  const renderSuggestion = (suggestion: any) => {
    return <MenuItem key={suggestion.symbol}>{suggestion.name}</MenuItem>;
  };

  const hasSuggestions = suggestions.length > 0;

  return (
    <div style={{ width: '400px' }}>
      <TextField
        fullWidth
        onChange={handleChange}
        value={value}
        placeholder="start typing"
      />
      {hasSuggestions && <Paper>{suggestions.map(renderSuggestion)}</Paper>}
    </div>
  );
};
```
  
### Suggestion Service

So far so good, you can search for something but suggestions are not coming up. We need to implement a service to fetch them.  
Let's start with a function `getSuggestions` which takes as an argument our previously created `subject$`. It contains a stream of all the values that were emitted by the event handler.

Next we will use `.pipe` to filter / transform the value, call an HTTP endpoint and eventually return a shaped array of suggestionS ready to be consumed by our Autosuggest component. I put comments in the code what each of operators in the pipe is doing.

```ts
import { BehaviorSubject } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, filter, switchMap, debounceTime } from 'rxjs/operators';

const getApiUrl = (value: string) => `/response.json?value=${value}`;

const transformResponse = ({ response }: AjaxResponse) => {
  return response.bestMatches.map(item => ({
    symbol: item['1. symbol'],
    name: item['2. name'],
    type: item['3. type'],
    region: item['4. region'],
    marketOpen: item['5. marketOpen'],
    marketClose: item['6. marketClose'],
    timezone: item['7. timezone'],
    currency: item['8. currency'],
    matchScore: item['9. matchScore']
  }));
};

export const getSuggestions = (subject: BehaviorSubject<string>) => {
  return subject.pipe(
    debounceTime(500), // wait until user stops typing
    filter(v => v.length > 2), // send request only if there are 3 or more characters
    map(getApiUrl), // form url for the API call
    switchMap(url => ajax(url)), // call HTTP endpoint and cancel previous requests
    map(transformResponse) // change response shape for autocomplete consumption
  );
};
```
  
Example response when typed "APPL":

```json
{
  "bestMatches": [
    {
      "1. symbol": "AAPL",
      "2. name": "Apple Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "0.7500"
    },
    {
      "1. symbol": "APLT",
      "2. name": "Applied Therapeutics Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "0.7500"
    }
}
```
  
In order to get a working solution, we need to wire our service to Autocomplete. The service should be called on every change to the input and return an array of relevant suggestions. On success, suggestions are populated to `Autocomplete` state and trigger a re-render.
  
I also added generic `S` to `Autocomplete` which can infer the shape of suggestion or implicitly provided to the component.

```tsx
// Autocomplete.tsx

import * as React from 'react';
import { BehaviorSubject, Observable } from 'rxjs';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

interface Props<S> {
  getSuggestions: <S>(subject: BehaviorSubject<string>) => Observable<S[]>;
  renderSuggestion?: (suggestion: S) => JSX.Element | string;
  onSelect?: (suggestion: S) => void;
}

const subject$ = new BehaviorSubject('');

export function Autocomplete<S>(props: Props<S>) {
  const { renderSuggestion = (s: S) => s, onSelect, getSuggestions } = props;
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<S[]>([]);

  React.useEffect(() => {
    const subscription = getSuggestions<S>(subject$).subscribe(
      suggestions => {
        // store suggestions in state
        setSuggestions(suggestions);
      },
      error => {
        // handle error here
        console.error(error);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    subject$.next(e.target.value);
  };

  const handleSelect = (idx: number) => {
    if (onSelect) {
      onSelect(suggestions[idx]);
      setSuggestions([]);
    }
  };

  const shouldShowSuggestions = suggestions.length > 0 && value.length > 2;

  return (
    <div style={{ width: '400px' }}>
      <TextField
        fullWidth
        onChange={handleChange}
        value={value}
        placeholder="start typing"
      />
      {shouldShowSuggestions && (
        <Paper>
          {suggestions.map((suggestion, idx) => (
            <MenuItem
              key={`suggestion-${idx}`}
              onClick={() => handleSelect(idx)}
            >
              {renderSuggestion(suggestion)}
            </MenuItem>
          ))}
        </Paper>
      )}
    </div>
  );
}
```
  
```ts
// suggestion-service.ts

import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, filter, switchMap, debounceTime } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Suggestion {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

// use alphavantage API instead of respone.json to see real results
// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${YOUR_API_KEI}`
const getApiUrl = (value: string) => `/response.json?value=${value}`;

const transformResponse = ({ response }: AjaxResponse) => {
  return response.bestMatches.map(item => ({
    symbol: item['1. symbol'],
    name: item['2. name'],
    type: item['3. type'],
    region: item['4. region'],
    marketOpen: item['5. marketOpen'],
    marketClose: item['6. marketClose'],
    timezone: item['7. timezone'],
    currency: item['8. currency'],
    matchScore: item['9. matchScore']
  }));
};

export const getSuggestions = <S>(
  subject: BehaviorSubject<string>
): Observable<S[]> => {
  return subject.pipe(
    debounceTime(500),
    filter(v => v.length > 2),
    map(getApiUrl),
    switchMap(url => ajax(url)),
    map(transformResponse)
  );
};
```
  
```tsx
// App.tsx

import * as React from 'react';
import { render } from 'react-dom';
// import { Lookup } from './lookup';
import { Autocomplete } from './autocomplete/autocomplete';
import { getSuggestions, Suggestion } from './services/suggestion-service';

import './styles.css';

const renderSuggestion = (suggestion: Suggestion) => {
  return `${suggestion.symbol} - ${suggestion.name}`;
};

function App() {
  return (
    <div className="App">
      <Autocomplete
        getSuggestions={getSuggestions}
        renderSuggestion={renderSuggestion}
        onSelect={suggestion => console.log(suggestion)}
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
```
  
## Keyboard navigation

Finally we need to add keyboard navigation so that our Autocomplete can be fully operational without the use of mouse.

We will need to add some additional state to our `Autocomplete` that will manage selected suggestion index:

```tsx
const [highlightedIdx, setHighlightedIdx] = React.useState(0);
```
  
Next we will need a keyDown handler for our input control. It will contain a simple logic how to increment, decrement and loop through highlighted index and it will call `handleSelect` behaviour on `Enter` key (same as we use for mouse click).

```tsx
const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  const UP = 38;
  const DOWN = 40;
  const ENTER = 13;
  const INITIAL_IDX = 0;

  if (e.keyCode === DOWN) {
    e.preventDefault();

    const idx = highlightedIdx;
    const nextIdx = idx !== undefined ? idx + 1 : INITIAL_IDX;

    if (nextIdx < suggestions.length) {
      setHighlightedIdx(nextIdx);
    } else {
      setHighlightedIdx(INITIAL_IDX);
    }
  }

  if (e.keyCode === UP) {
    e.preventDefault();

    const lastIdx = suggestions.length - 1;
    const idx = highlightedIdx;
    const prevIdx = idx !== undefined ? idx - 1 : lastIdx;

    if (prevIdx >= 0) {
      setHighlightedIdx(prevIdx);
    } else {
      setHighlightedIdx(lastIdx);
    }
  }

  if (e.keyCode === ENTER && highlightedIdx !== undefined) {
    handleSelect(highlightedIdx);
  }
};
```
  
Lastly, we need to wire it into our input and highlight the suggestion:

```tsx
return (
  <div style={{ width: '400px' }}>
    <TextField
      fullWidth
      onChange={handleChange}
      onKeyDown={handleKeyDown} // <-- new key handler goes here
      value={value}
      placeholder="start typing"
    />
    {shouldShowSuggestions && (
      <Paper>
        {suggestions.map((suggestion, idx) => (
          <MenuItem
            key={`suggestion-${idx}`}
            onClick={() => handleSelect(idx)}
            selected={highlightedIdx === idx} // <-- visually show selected item
          >
            {renderSuggestion(suggestion)}
          </MenuItem>
        ))}
      </Paper>
    )}
  </div>
);
```
