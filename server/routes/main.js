module.exports = function(app) {
    const mysql = require('mysql');

    app.get('/api', (req, res) => {
        res.json({"users": ["userOne", "userTwo", "userThree"] });
    });
    app.get('/getitems', (req, res) => {
        let sqlquery = "SELECT task FROM daily_tasks";

        db.query(sqlquery, (err, result) => {
            if (err) {
                console.log('Error getting items', err);
                res.status(500).send('Error getting items');
            }
            else {
                console.log('Items successfully received');
                res.json({ items: result });
            }
        });
    });
    app.post('/additem', (req, res) => {
        console.log(req.body);
      
        let sqlquery = "INSERT INTO daily_tasks (task) VALUES (?)";
        let newrecord = req.body.text;

        console.log(newrecord);
      
        db.query(sqlquery, newrecord, (err, result) => {
          if (err) {
            console.log('Error adding item:', err);
            res.status(500).send('Error adding item');
          } 
          else {
            console.log('Item added successfully');
            res.status(200).send('Item added successfully');
          }
        });
    });
}