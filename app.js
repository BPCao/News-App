const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
const bodyParser = require('body-parser')
const PORT = 8080

app.use(bodyParser.json())
app.use(cors())

app.post ('/register',(req,res) =>
{
    const {username, password} = req.body
    let user = models.User.build({username, password})
    user.save().then(savedUser => 
    {   
        if(savedUser) 
            {res.json({success: true})} 
        else 
        {res.json({success: false, message: 'Unable to register user'})}
    })
})

app.post ('/login',(req,res) =>
{
    const {username, password} = req.body
    models.User.findOne({
        where: {username: username,
                password: password}})
    .then(user => 
    {
        if (user !== null)
            {res.json({message: 'Login success!',
                        user})}
    })
})

app.get ('/bookmarks',(req,res) =>
{
    models.Bookmark.findAll()
    .then(response => res.json(response))
    .catch(error => console.log(error))
})

app.post ('/bookmarks',(req,res) =>
{
    const {author,title,source,published} = req.body
    let bookmark = models.Bookmark.build({author,
                                          title,
                                          source,
                                          published})
    bookmark.save().then((savedBookmark) => 
    {
        if(savedBookmark) 
            {res.json({success: true})} 
        else 
        {res.json({success: false, message: 'Unable to bookmark'})}
    })
})

app.post ('/delete-bookmark',(req,res) =>
{
    console.log(req.body);
    const {author,title,source,published} = req.body
    models.Bookmark.destroy({where:{author: author,
                                    title: title,
                                    source: source,
                                    published: published}})
    .then((deletedBookmark) => 
    {
        if(deletedBookmark) 
            {res.json({success: true})} 
        else 
        {res.json({success: false, message: 'Unable to delete bookmark'})}
    })
    .catch(error => console.log(error))
})

app.listen(PORT,() => {console.log('Server is running...')})