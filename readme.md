# initialize

npm init    -> do some yes yes yes

# install postcss and postcss-cli as dev dependencie

npm i -D postcss postcss-cli

# add script to run command easily in package.json file

## ADD this in scripts 

"build:css":"postcss src/input.css -o dist/output.css"

### test by runnong on cmd

npm run build:css

## ADD this to build everytime file changes

"watch:css":"postcss src/input.css -o dist/output.css -w"

### test by runnong on cmd

npm run watch:css

`ctrl C` to exit to CMD
`so you are getting output.css change everytime you change input.css`

# now install prefixer to minifi css

npm i -D autoprefixer

# Add postcss.config.js file in root

 [ postcss.config.js ]

## tell postcss that which plugin is you are going to use by this code e.g for autoprefixer in postcss.config.js

module.exports = {
    plugins: [require('autoprefixer')]
};

### test using input::placeholder{color:green}

# install postcss-preset-env for custom selectors,media quries,nesting

npm i -D postcss-preset-env

## add plugin config to postcss.config.js file

require('postcss-preset-env')({
            stage:1,
        }),

# install pre css for usinf $variables 

npm i -D precss

## add plugin config to postcss.config.js file

require('precss'),

# install cssnano 

npm i -D cssnano

## Add to postcss.config.js file

require('cssnano'),