function takeInfo() {
    let basicSalary=document.getElementById("initialSalary").value;
    let basicParsedSalary = parseFloat(basicSalary);
    let incrementation = document.getElementById("increment").value;
    let yearOfJob= document.getElementById("year").value;
    console.log(basicSalary, incrementation, yearOfJob);

    // let incrementedSalary = basicSalary * (incrementation/100);

    // console.log(incrementedSalary);

    let totalCurrentSalary = basicParsedSalary + (basicParsedSalary * (incrementation/100));

    console.log(totalCurrentSalary);
    var sumOfSalary=0;

    for(let i=0; i<yearOfJob*2; i++){
        sumOfSalary = totalCurrentSalary + (totalCurrentSalary * (incrementation/100));
        // sumOfSalary = totalCurrentSalary + sumOfSalary;
        console.log(sumOfSalary);
    }

    var newSalary = document.getElementById("showSalary");
    newSalary.innerHTML=totalCurrentSalary;


    
}