# Course of TypeScript: Advance Types and Functions

## Typescript Lesson Zero

### Install TypeScript for the project

```bash
npm install typescript --save-dev
```

### Check the TypeScript Installation

```bash
npx tsc --version
```

### Init the TypeScript project

```bash
npx tsc --init
```

### Change when TypeScript Compiler save the transpilation to JavaScript

Find into the `tsconfig.json` file the key `outDir` and set the destination folder
_Example:_

```json
{
    ...
    "outDir": "./dist"
    ...
}
```

### Compile the TypeScript Code into JavaScript

```bash
npx tsc
```

### Compile the TypeScript Code into JavaScript. Watch mode

```bash
npx tsc --watch
```

## TS Node

Remove the necessity of run the compiled result. Instead you can call the TypeScript file directly in node.js

### Installation and Use
Usually this is used in Backend projects and is not a production dependency

```bash
# Installation
npm install -D typescript
npm install -D ts-node

# Use
npx ts-node src/demo.ts
```

> Note. The -D argument and --save-dev is the same in npm
