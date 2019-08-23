# generate-silence
> Quickly generate silent audio with options.

## Getting started
```
npm install generate-silence
```

Then include in your project:
```
const Silence = require('generate-silence');
```

Then generate silence:

```js

new Silence(60).generate(); // seconds

// You can also pass an option to generate for a different return format.

new Silence(60).generate('base64') // base64 (default)
new Silence(60).generate('datauri') // datauri
new Silence(60).generate('element') // HTML Audio Element
```