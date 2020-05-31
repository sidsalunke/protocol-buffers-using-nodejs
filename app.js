const Schema = require('./employees_pb');
const fs = require('fs');

const fileName = 'binaryData';

const john = new Schema.Employee();
john.setId(1);
john.setName('John');
john.setWage(100);

const danny = new Schema.Employee();
danny.setId(2);
danny.setName('Danny');
danny.setWage(200);

const jess = new Schema.Employee();
jess.setId(3);
jess.setName('Jess');
jess.setWage(300);

const employees = new Schema.Employees();

employees.addEmployees(john);
employees.addEmployees(danny);
employees.addEmployees(jess);
const serializedBinaryData = employees.serializeBinary();

fs.writeFileSync(fileName, serializedBinaryData);

const savedSerializedBinaryData = fs.readFileSync(fileName);

const deserializedBinaryData = Schema.Employees.deserializeBinary(savedSerializedBinaryData);
console.log(`Deserialized binary data is ${deserializedBinaryData.toString()}`);