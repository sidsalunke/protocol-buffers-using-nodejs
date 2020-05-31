# protocol-buffers-using-nodejs

Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. More information about protocol buffers can be found [here](https://developers.google.com/protocol-buffers)
<br><br>This project shows how to use protocol buffers in nodejs projects

# Prerequisites

- [Node](https://nodejs.org/en/download/) should be installed
- [Protocol buffer compiler](https://github.com/protocolbuffers/protobuf/releases) should be installed

# How it works?

## The proto file
- The project contains an [employee.proto](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/employees.proto) file that creates the structure for an employee within an organisation.
- Everything in the proto file is labeled as a `message`
- An employee has the following properties
   - id (integer)
   - name (string)
   - wage (float)
- An array of employees is created using the `repeated` keyword

## Creating a javascript proto file
- To use a protocol buffer file in a `nodejs` project, the [employee.proto](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/employees.proto) needs to be converted into a `.js` file.
   - to do this, run:
   ```javascript
   npm run createEmployeesProtoFile
   ```
- This will output a file named `employees_pb.js` which can then be imported in the [app.js](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/app.js#L1)

## Using the javascript proto file
- Once the javascript proto file is created, it is used in the `app.js` to create new [employee protocol buffer objects](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/app.js#L6-L21) 
- These employee objects are then added to an [employees protocol buffer array](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/app.js#L23-L25) which we've created in the [original proto file](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/master/employees.proto#L9)
- Once everything is added to the array, it is serialized in a binary and stored in a [file](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/app.js#L28)
- The contents of the file are then [read](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/app.js#L30) and again [deserialized and printed to the console](https://github.com/sidsalunke/protocol-buffers-using-nodejs/blob/949f2802695cba23ec9803221c9e26fc4a9428cf/app.js#L32-L33)
- To see everything in action, run:
```javascript
npm run dev
```