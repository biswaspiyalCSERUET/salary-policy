function takeInfo() {

    //initialization of the variables, capturing the value of the particular ids
    let initialSalary=document.getElementById("initialSalary").value;
    let initialParsedSalary = parseFloat(initialSalary);
    let incrementation = document.getElementById("increment").value;
    let yearOfJob= document.getElementById("year").value;

    //first incrementation of the initial salary
    let totalCurrentSalary = initialParsedSalary + (initialParsedSalary * (incrementation/100));

    //total salary count starting
    var sumOfSalary= initialParsedSalary + totalCurrentSalary;

    //looping through the incrementation and total salary count
    for(let i=1; i<yearOfJob*2; i++){
        totalCurrentSalary = totalCurrentSalary + (totalCurrentSalary * (incrementation/100));
        console.log(totalCurrentSalary);
        sumOfSalary = sumOfSalary + totalCurrentSalary;
    }

    //showing the current incremented salary
    var newSalary = document.getElementById("showSalary");
    newSalary.innerHTML=totalCurrentSalary;

    //showing the total salary since the starting
    var firstToLastSalary = document.getElementById("totalSalary");
    firstToLastSalary.innerHTML=sumOfSalary;

}