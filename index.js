import express from "express"
const app = express()
const port = 3000;
app.get("/",(req,res)=>{
    console.log(req.rawHeaders,'req')
    res.send("<!DOCTYPE html><html><body><h2>HTML Forms</h2><form ><label for='fname'>First name:</label><br> <input type='text' id='fname' name='fname' value='John'><br><label for='lname'>Last name:</label><br><input type='text' id='lname' name='lname' value='Doe'><br><br><input type='submit' value='Submit'></form> <p>If you click the 'Submit' button, the form-data will be sent to a page called '/action_page.php'.</p></body></html>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>about page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})
app.post('/register',(req,res)=>{
    res.sendStatus(201)
})
app.put('/user/bharat',(req,res)=>{
    res.sendStatus(200)
})
app.patch('/user/siva',(req,res)=>{
    res.sendStatus(200)
})
app.delete('/user/delete',(req,res)=>{
    res.sendStatus(200)
})
app.listen(port,()=>{
    console.log(`App runing on ${port} number`)
})