const employee = {
    name: "George",
    address: "99 James St."
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Tommy"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

const newerEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Thomas");

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}
