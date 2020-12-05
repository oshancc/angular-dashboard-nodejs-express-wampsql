const express = require('express')
const {database} = require('../config/helper');

const employeeRouter = express.Router();


//Get All the employees
employeeRouter.get('/', (req, res) => {
    database.table('Employee').getAll()
    .then(emp => {
        if(emp.length > 0){
            res.status(200).json(emp)
        }else{
            res.status(404).json({message: 'No employees found'})
        }
    }).catch(err => console.log(err))
})


//Get A employee
employeeRouter.get('/:id', (req, res) => {

    const empId = req.params.id;

    database.table('Employee as e').filter({'e.EmployeeID': empId}).getAll()
    .then(emp => {
        if(emp.length > 0){
            res.status(200).json(emp)
        }else{
            res.status(404).json({message: 'No employee found'})
        }
    }).catch(err => console.log(err))
})

//Add employee
employeeRouter.post('/add', (req, res) => {
      
   const sql = `INSERT INTO employee ( FirstName, LastName, Email, DOB, Salary) VALUES ('${req.body.FirstName}', '${req.body.LastName}', '${req.body.Email}', '${req.body.DOB}', '${req.body.Salary}')`;
    database.query(sql).then(result => {
      
            res.status(200).json(result)
    
    }).catch(err => console.log(err))
});

employeeRouter.put('/update/:id', (req, res) => {
   const sql =  `UPDATE employee SET FirstName = '${req.body.FirstName}', LastName = '${req.body.LastName}', Email = '${req.body.Email}', DOB = '${req.body.DOB}', Salary = '${req.body.Salary}' WHERE EmployeeID= ${req.params.id}`;
    
     database.query(sql).then(result => {
       
             res.status(200).json(result)
     
     }).catch(err => console.log(err))
 });

 employeeRouter.delete('/delete/:id', (req, res) => {
    const sql =  `DELETE FROM employee WHERE EmployeeID =${req.params.id}`;
    
      database.query(sql).then(result => {
        
              res.status(200).json(result)
      
      }).catch(err => console.log(err))
  });
 
 
 




module.exports = employeeRouter;