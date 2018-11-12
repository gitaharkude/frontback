const mysql =require('mysql');
const express =require('express');
const cors=require('cors');
var bodyparser =require('body-parser');
var app =express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(cors())

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'empdb'
});
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('db connection sucessfull');
    else
    console.log('db connection failed');
});

// enable cors
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  */
app.listen(3040,()=>console.log('express server is running on port 3040'));
console.log('Checking control');


//insert an employee
app.post('/employee',(req,res)=>{
    
   //mysqlConnection.query("INSERT INTO employee (firstName, lastName, email, gender, city) VALUES "(firstname,lastname,email,gender,city),(err, rows, fields)=>{
    mysqlConnection.query("INSERT INTO employee SET ? ",req.body, (err, rows, fields)=>{
        
        if(!err){
            
            //throw err
            return res.status(201).send({ error:false, message: 'Saved user details!!', data:req.body});
        }   
        else{
            return res.status(400).send({ error:true, message: 'Error while saving user details' });
            console.log(err);
        }
            
//            
    })
});

// //get all employee
app.get('/employee',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employee',(err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);

    })
});
//get an employee
app.get('/employee/:employeeId',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employee WHERE employeeId=?',[req.params.employeeId],(err, rows, fields)=>{
        if(!err){

        
        res.send(rows[0]);
    }
        else
        console.log(err);

    })
});

//delete an employee
app.delete('/employee/:employeeId',(req,res)=>{
    mysqlConnection.query('Delete from employee WHERE employeeId=?',[req.params.employeeId],(err, rows, fields)=>{
        if(!err)
        res.send('deleted sucessfully');
        else
        console.log(err);

    })
});
//update employee
app.put('/employee/:employeeId',(req,res)=>{
    debugger
    mysqlConnection.query("update employee set firstName = ?,lastName = ?,email = ? where employeeId =?",[req.body.firstName,req.body.lastName,req.body.email,req.params.employeeId],(err, rows, fields)=>{
        if(!err)
        res.send('update sucessfully');
        else
        console.log(err);
    })
});


