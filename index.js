/* Your Code Here */
function createEmployeeRecord(employeeRecord) {
  const [firstName, familyName, title, payPerHour] = employeeRecord;

  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(employeeRecords) {
  return employeeRecords.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: +hour,
  });

  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: +hour,
  });

  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(
    (timeInEvent) => timeInEvent.date === date
  );
  const timeOut = this.timeOutEvents.find(
    (timeOutEvent) => timeOutEvent.date === date
  );

  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function findEmployeeByFirstName(employeeRecords, firstName) {
  return employeeRecords.find(
    (employeeRecord) => employeeRecord.firstName === firstName
  );
}

function calculatePayroll(employeeRecords) {
  const allWages = employeeRecords.map((employeeRecord) =>
    allWagesFor.call(employeeRecord)
  );

  return allWages.reduce((wage, total) => (total += wage));
}

function allWagesFor() {
  const allDates = this.timeInEvents.map((timeInEvent) => timeInEvent.date);

  return allDates.reduce(
    ((total, date) => (total += wagesEarnedOnDate.call(this, date))).bind(this),
    0
  );
}
