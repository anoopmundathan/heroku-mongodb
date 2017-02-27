# heroku-mongodb
 Example - Adding MongoDB to your Node App on Heroku

## Heroku setup

* Add below entry in ```package.json```
```
  "engines": {
    "node": "7.0.0"
  }
```
* Create ```Procfile```  and  explicitly declare what command should be executed to start your app.
```
web: node server.js
```

* Login to your heroku account from CLI
```
$ heroku login
```
* Deploy the app
```
$ heroku apps:create
```
* Add-ons
```
$ heroku addons:create mongolab:sandbox
```
* Use ```MONGODB_URL``` environment variable while connecting DB in ```server.js```
```
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test');
```
* Commit changes
```
$ git add .
$ git commit -m "Heroku setup"
```
* Deploy code 
```
$ git push heroku master
```
* Run app locally
```
$ heroku local
```
* Visit the app
```
$ heroku open
```
