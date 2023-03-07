# array-functions-polyfills

This project aims to re-implement Javascript vanilla array functions with Typescript to understand how they work under the hood.

## How to use

### 1. **Install deps**

```bash
$ npm i
```

### 2. **Generate mock implementation files**

This part will create all the files you will need to re implement functions. Files will be located in the folders matching the glob `src/functions/_/index.ts`. Function signatures can be updated a little bit if needed as long as there is a need for it.

```bash
$ npm run bootstrap
```

### 3. **✨ Make the magic happen ✨**

Everything should be installed correctly, now you can work. Don't hesitate to read tests to understand how functions should behave

### 4. **Run tests**

```bash
npm run test
```

## Useful resources

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Disclaimer

Given tests and implementations don't behave exactly as vanilla Javascript array functions do. They might not cover all usages or features as proposed in the standard Javascript array library.
