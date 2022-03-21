const express = require('express');

const router = express.Router();
const jin = 4;

let tweets = [
    {
        id : '2',
        text : "진영멤버들",
        createdAt : Date.now().toString(),
        name : "hey",
        username : "hey",
        url : "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    },
    {
        id : '1',
        text : "진영멤버들",
        createdAt : Date.now().toString(),
        name : "jin",
        username : "jinyoung",
        url : "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    }
]

// Get Tweets
router.get('/',(req, res, next) => {
    const username = req.query.username;
    const data = username 
    ? tweets.filter(t => t.username === username)
    : tweets;
    res.status(200).json(data);

})
// Get Tweets by username
// Get Tweets by id
router.get('/:id',(req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find(t=> t.id === id);
    if(tweet)
    {
        res.status(200).json(tweet);
    }
    else{
        res.status(404).json({message:`Tweet ${id} not fount`});
    }
})
// Create Tweet
router.post('/',(req, res, next) => {
    const {text,name,username} = req.body;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date().toString(),
        name,
        username,
    }
    tweets = [tweet,...tweets];
    console.log(tweets);
    res.status(201).json(tweet);
})
// Update Tweet
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find(tweet=> tweet.id === id);
    if(tweet){
        tweet.text = text;
        res.status(200).json(tweet);
    }
    else{
        res.status(404).json({message:`Tweet ${id} not fount`});
    }
})
// Delete Tweet
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter(t=>t.id !== id)
    res.sendStatus(204);
})



exports["jin"] = jin;
exports["router"] = router;
