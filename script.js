/*1Number**/

function calculateTax(income, expenses) {
    if (income >= expenses >= expenses > income) {
          return "Invalid Input";
    }
    let difference = income - expenses;
    let tax = difference * .20;
    return tax.toFixed(2);
}
console.log(calculateTax(10000,3000));


/*2Number**/

function sendNotification(email) {
    if (email.includes('@')) {
        let [username, domainName] = email.split('@');
        let message = `${username} sent you an email from ${domainName}`;
        return message;
        } 
     else {
        return "Invalid Email";
    }
}
    console.log(sendNotification("farhan34@yahoo.com"));


/*3Number**/

function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return "Invalid";
    }
        
    for (let char of input) {
        if (!isNaN(parseInt(char))) {
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName("n9ayeem"));


/*4Number**/

function calculateFinalScore(student) {
        const maxTestScore = 50;
        const maxSchoolGrade = 30;
        const farmerBonus = 20;
    
        let finalScore = student.testScore + student.schoolGrade;
        if (student.isFFamily) {
            finalScore += farmerBonus;
        }
        const canEnroll = finalScore >= 80;
        return {
            name: student.name,
            finalScore: finalScore,
            canEnroll: canEnroll
        };
    }
    const rajib = {
        name: "Rajib",
        testScore: 45,   
        schoolGrade: 25, 
        isFFamily: true
    };
    const result = calculateFinalScore(rajib);

    console.log(result);


/*5Number**/

function waitingTime(waitingTimes, serialNumber) {
   if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    const completedInterviews = waitingTimes.length;

    const totalTime = waitingTimes.reduce((acc, time) => acc + time, );

    const averageTime = Math.round(totalTime / completedInterviews) ;

    const waitingPeople = serialNumber - 6; 

    const totalWaitingTime  = averageTime * waitingPeople;

    return totalWaitingTime;
}
const times = [13, 2, 6, 7, 10];
const serialNumber = 6; 
const waitingTimeResult = waitingTime(times, serialNumber);
console.log(`Israt watinig: ${waitingTimeResult} Minute`);
