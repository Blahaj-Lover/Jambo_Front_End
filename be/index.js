import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbjambo"
})

app.use(express.json())
app.use(cors())

db.connect((err) =>{
    if(err) console.log(err)
    else console.log("sql connected")
})

app.post("/login", (req,res)=>{
    const q = "SELECT * FROM msuser WHERE UsUsername = ?"

    const val = [
        req.body.UsUsername,
        req.body.UsPassword
    ]

    db.query(q, val[0], (err,data)=>{
        if(err) return res.json(err)
        if(data.length < 1) return res.json(false)
        if(val[1] !== data[0].UsPassword) return res.json(false)
        return res.json(data)

    })

})

app.get("/user", (req,res)=>{
    const q = "SELECT * FROM msuser"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/user", (req,res)=>{
    const q = "INSERT INTO msuser (`UsUsername`, `UsEmail`, `UsPassword`, `UsSex`, `UsCountry`, `UsPp`) VALUES (?);"
    
    const val = [
        req.body.UsUsername,
        req.body.UsEmail,
        req.body.UsPassword,
        req.body.UsSex,
        req.body.UsCountry,
        req.body.UsPp,
    ]

    db.query(q, [val], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log('server is running')
})
