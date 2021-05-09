// mysql set up
var mysql = require('mysql');
var db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
db.connect(function(err) {
    if (err) throw err;

    // custom packages
    const helpers = require('./helpers')

    // Imports the Google Cloud client library
    const {Storage} = require('@google-cloud/storage');
    const storage_client = new Storage();

    // web server packages
    const port = 8080
    const express = require('express');
    const app = express();

    // var cors = require('cors');
    // app.use(cors());

    // Serve static files from the React app
    // const path = require('path');
    // app.use(express.static(path.join(__dirname, 'client/build')));

    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', async (req, res) => {
        res.send(await helpers.root_get_images_authors_presentation_data(db, storage_client))
    })

    app.post('/searchImagesByText', async (req, res) => {
        let search_terms = req.body;
        search_terms = search_terms.search_terms;
        search_terms = search_terms.split(" ");
        res.send(await helpers.searchImagesByText_get_images_authors_presentation_data (db, storage_client, search_terms))
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })


    // URL: localhost:8080/searchImagesByImages
    // search_terms = set(gcp_object_detection(img)) + set(gcp_logo_detection(img))
    // query = build_sql_query(search_terms)
    // return images_authors_presentation_data = query1(query)
});

