// Write your solution in this file!
const employee={
    name:"Manisha",
    streetAddress:"Pilgrim Avenue"
}
function updateEmployeeWithKeyAndValue(employee, streetAddress ,value)
{
    let obj={...employee};
    obj["streetAddress"]=value;
 
    return obj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value)
{
    employee.streetAddress=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,name)
{
    let obj={...employee};
    delete obj.name;
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee,name)
{

    delete employee.name;
    return employee;
}