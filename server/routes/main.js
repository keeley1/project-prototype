module.exports = function(app) {
    app.get('/api', (req, res) => {
        res.json({"users": ["userOne", "userTwo", "userThree"] });
    });
}