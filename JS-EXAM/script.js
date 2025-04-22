const Tbody = document.getElementById("tebalBody");
// const td=document.getElementById("td");
// const td2=document.getElementById("td2");
// const td3=document.getElementById("td3");
// const td4=document.getElementById("td4");
// const td5=document.getElementById("td5");
// const td6=document.getElementById("td6");

const add=[];
let index=0;

let url = "https://api.rootnet.in/covid19-in/stats/latest";

// async function addTask() {

//     const response = await fetch(url);
//     var data = await response.json();

//  for( let i=1; i<=data.lenght();i++){
//         const row = document.createElement("tr");
//         const colum = document.createElement("td");

//         row.appendChild(colum);
//         tbody.appendChild(row);

//         colum.innerHTML = data.loc;
//         colum.innerHTML=data.confirmedCasesIndian;
//         colum.innerHTML=data.confirmedCasesForeign;
//         colum.innerHTML=data.discharged;
//         colum.innerHTML=data.deaths;
//         colum.innerHTML=data.totalConfirmed;

//  }



// }


// addTask();

// function addnews(){
//     fetch("https://api.rootnet.in/covid19-in/stats/latest").then((response)=>response.json()).then((data)=>{

//       td.innerHTML=data.loc;
//       td2.innerHTML=data.confirmedCasesIndian;
//       td3.innerHTML=data.confirmedCasesForeign;
//       td4.innerHTML=data.discharged;
//       td5.innerHTML=data.deaths;
//       td2.innerHTML=data.totalConfirmed;
//       console.log(loc);

        
//       });
// }

const tableBody = document.getElementById('covidtable');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const regionalData = data.data.regional;
            regionalData.forEach((Dataworldwied, index) => {
                const totalCases = Dataworldwied.confirmedCasesIndian + Dataworldwied.confirmedCasesForeign;
                const row = document.createElement('tr');
                row.innerHTML = " <td>"+index + 1+"</td> <td>"+Dataworldwied.loc+"</td> <td>"+Dataworldwied.confirmedCasesIndian+"</td> <td>"+Dataworldwied.confirmedCasesForeign+"</td> <td>"+Dataworldwied.discharged+"</td> <td>"+Dataworldwied.deaths+"</td> <td>"+totalCases+"</td>";
              Tbody.appendChild(row);
            });
        });
