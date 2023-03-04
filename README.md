# Note-Taker

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
|  Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| Express.js   | [https://expressjs.com/](https://expressjs.com/) |
| Heroku    | [https://devcenter.heroku.com/categories/reference](https://devcenter.heroku.com/categories/reference) |
| npm    | [https://docs.npmjs.com/](https://docs.npmjs.com/) | 

## Description 
[Visit the Deployed Site](https://fa-notetaker.herokuapp.com/)

This application works to allow users to write, saved, and retrieve notes. 

The starter code for was provided, so no changes were made to the front-end. I used Express.js to build the back-end. Express.Router(), which was required in the index.js of the routes folder, allowed for get and post routes to be established. In the server.js, Express.js was used to create the HTML routes.


![Notes Page](/public/assets/images/Notes.png)

## Portfolio Example

While this application had the front-end HTML provided, I initially had difficulty creating the proper api routes on the back-end. I had referenced the use of "/api" in the index.js files on both the routes and api folders. This caused an error when my server would attempt to fetch "/api/notes" since the routes were actually set-up for "/api/api/notes". I resolved this issue by removing the "/api" reference from the index.js in the api folder.


This is the code from the index.js of the routes folder which creates "router.use('/api', apiRoutes);".

```
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

```

This is the code from the index.js of the api folder with "router.use('/api', apiRoutes);".

```
const router = require('express').Router();

const notesRouter = require('./notesRoutes');

router.use('/notes', notesRouter);

module.exports = router;

```


## Usage 

Visit the [deployed site](https://fa-notetaker.herokuapp.com/).

## Learning Points 

Working on this Note Taker application taught me a lot about how to properly write code for routes. Being diligent with which folders I create code in will ensure that routes are being fetched propely.


## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga




## License

MIT License

Copyright (c) 2023 Fayven Amelga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT Badge](https://img.shields.io/badge/license-MIT-blue)

---

© 2023 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.