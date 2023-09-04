
## 🚀 About Postcss-usecases
tell you how to initialize postcss and use some of its plugins


# initialize

```bash
npm init
```
do some yes yes yes

# install postcss and postcss-cli as dev dependencie

```bash
npm i -D postcss postcss-cli
```

# add script to run command easily in package.json file

## ADD this in scripts 


```javascript
"build:css":"postcss src/input.css -o dist/output.css"
```


### test by running this on cmd

```bash
  npm run build:css
```

## ADD this to build everytime file changes

```javascript
"watch:css":"postcss src/input.css -o dist/output.css -w"
```

### test by runnong on cmd

```bash
  npm run watch:css
```

`ctrl C` to exit to CMD

# Install prefixer to add prefixers automatically

```bash
  npm i -D autoprefixer
```

# Add postcss.config.js file in root

`postcss.config.js`

## tell postcss that which plugin is you are going to use by adding this code in `postcss.config.js`
### e.g for `autoprefixer`

```javascript
module.exports = {
    plugins: [require('autoprefixer')]
};
```

### test it using 
```bash
input::placeholder{color:green}
```

# install postcss-preset-env for custom selectors,media quries,nesting

```bash
  npm i -D postcss-preset-env
```

## add plugin config to postcss.config.js file

```javascript
require('postcss-preset-env')({
  stage:1,
}),
```

# install pre css for usinf $variables 


```bash
 npm i -D precss
```

## add plugin config to postcss.config.js file

```javascript
require('precss'),
```


# install cssnano 

```bash
 npm i -D cssnano
```


## Add to postcss.config.js file

```javascript
require('cssnano'),
```

# Enjoy

```bash
npm run watch:css
```