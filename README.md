## How to use angular-express-seed

Clone the angular-express-seed repository, run `npm install` to grab the dependencies and start hacking!

### Running the app

Runs like a typical express app:

    node app.js

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    bower.json          --> for bower
    gulpfile.js         --> manage gulp config
    README.md           --> this
    api/
      sample.js         --> sample API 
    bower_components/
      angular/
      angular-route/
      bootstrap/
      font-awesome/
      jquery/
    node_modules/
      express/
      gulp/
      gulp-autoprefixer/
      gulp-minify-css/
      gulp-notify/
      gulp-rename/
      gulp-ruby-sass/
      gulp-util/
      jade/
      underscore/
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> 
        app.min.css     --> in use
        navbar.css      -->
        navbar.min.css  --> in use
      images/              --> image files
      js/               --> javascript files
        controllers/
          IndexCtrl.js          --> index controller
          NavCtrl.js            --> navbar controller
        directives/
          navbar.js             --> directive for navbar
        filters/
          capitalizeFilter.js   --> capitalize first letter of each word in string
        library/
        services/
          sampleService.js      --> a sample angular service
        values/
          month.js              --> sample angular value
        vendor/
        app.js                  --> angular module loading
        routes.js               --> angular routing
      sass/
        app.scss                --> application sass stylesheet
        navbar.scss             --> navbar sass stylesheet
    routes/
      api-routes.js     --> API routes
    static/
      403.html          --> 403 page
      404.html          --> 404 page
      500.html          --> 500 page
    views/
      includes/
        footer.jade     --> footer template
        header.jade     --> includes css tags
        scripts.jade    --> include scripts tags
      partials/         --> angular view partials (partial jade templates)
        index.jade        --> landing page for app
        navbar.jade       --> navigation template
      layout.jade       --> page layout 
       

