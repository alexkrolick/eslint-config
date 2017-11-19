Lint configuration for frontend development

## Install

```
npm install --save --dev eslint-config-alexkrolick
```

or 

```
yarn add --dev eslint-config-alexkrolick
```

## Use

**package.json** (prettier overrides optional)
 
 ```json
 {
    "eslintConfig": {
        "extends": ["eslint-config-alexkrolick"]
    },
    "prettier": {
        "trailingComma": "es5",
        "semi": false,
        "singleQuote": true
    }
}
```
