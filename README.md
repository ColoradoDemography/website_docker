# jekyll-website-build
Build step for demography.dola.colorado.gov

This is where the magic happens.  The Colorado Demography website is served from the resulting Docker container.

## How does this thing work?

The Dockerfile sets up a combination NodeJS & Ruby environment.

- Ruby is necessary to run Jekyll's ```build``` command.
- NodeJS is necessary to run an ExpressJS server.

The ExpressJS server is a very simple implementation running on port 4008.  (A [proxy container](https://github.com/ColoradoDemography/demog-proxy) then adds SSL and forewards it to port 443).

The server has only 3 routes:

**Route 1**

```
/update/jekyll-build
```
(Use by typing directly into address bar:  https://demography.dola.colorado.gov/update/jekyll-build )

Hitting this endpoint **from within the DOLA firewall** will launch a command to pull recent changes from the master repository, and then run the Jekyll build command to generate the website.  (You must run this command at least once upon recreating the website Docker container or no files will be served).  The website content is saved to the \_site folder within the Docker container.  ExpressJS servers this generated static content with the following command:

```
app.use(express.static('coloradodemography.github.io/_site'));
```

**Route 2**

```
/update/load_repo?repo=Exact-Name-Of-Repo
```

Hitting this endpoint will run a ```git clone``` command so that a project within a ColoradoDemography repository (and only a ColoradoDemography repository) can be served with the demography.dola.colorado.gov domain.


**Route 3**

```
/update/update_repo?repo=Exact-Name-Of-Repo
```

Hitting this endpoint will run a ```git pull``` command to update the production content to be in sync with the corresponding Github repository.


### Of Note

The site 404 page is specified within the index.js code.  If you're looking to change the 404, please find the corresponding code here.


