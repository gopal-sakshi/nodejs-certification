# Cannot use import statement outside a module
- reason
    you’re trying to use import and you’re not inside an ES module.

`solution A`
    NodeJS = { "type": "module" } in package.json
    Broswer = <script type="module" src="./file.js"></script>           // use this
            = <script src="./file.js"></script>                         // dont use this
- import = ES6 Modules syntax

Other possible reasons
`Solution B`
You're using a Node version < 13.2.0 ------> once I changed my node version to 16.9.0; It worked

`Other solutions`
You're using Node without the proper package.json settings
You're using a browser version that doesn't support ES modules
You didn't properly specify the type in your browser `script tag`
-------------------------------------------------------------------------------------------------------------
# require is not defined
- you'll need to use the import syntax instead of require


# Is it possible to use both "require" and "import" together with Webpack?
- We can use either 'CommonJS'  (or)        ES6 modules
- we cant mix both
- if you want, you need to have webpack (or) some other bundler
-------------------------------------------------------------------------------------------------------------
by default, stuff is considered as commonJS modules
hence you cant use import statement
if u use, you get this error ---> cant use import statement outside module

solution
- you can add this in your package.json
    "type":module
- now, stuff will be treated as modules
- but now, you cant use require() anymore... require only for commonJS modules

---------------------------------------------------------------------------------------------------------