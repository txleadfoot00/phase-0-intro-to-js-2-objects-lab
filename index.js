const employee = {
    name: "Winston",
    streetAddress: "10 Downing",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway",
    }};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
};
function deleteFromEmployeeByKey(employee, key){
    return {
        ...employee
        ["name"],
    }
    const newEmployee = deleteFromEmployeeByKey(employee, "name");
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}
