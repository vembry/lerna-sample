## setup

```
# to load dependencies
$ npm install 

# OPTIONAL: to clean the ./packages
$ npx lerna clean

# to install all dependencies and any cross-dependencies between packages
$ npx lerna bootstrap 

# to start the monorepo
$ npx lerna run start --stream --parallel # to start
```

## directory structure
```
./packages
    /web-a          # UI 
    /web-b          # UI
    /web-component  # shared library containing components
```