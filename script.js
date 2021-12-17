'use strict';
            document.getElementById('add').addEventListener('click', function(){
                let fname = document.getElementById('first-name');
                let lname = document.getElementById('last-name');
                let table = document.getElementById('table_of_information');
                let address=document.getElementById('Address');
                let pin=document.getElementById('Pin');
                let state=document.getElementById('State');
                let country=document.getElementById('Country');
                //let gender1=document.getElementsByName('gender');
                let gender=document.querySelector('input[name="gender"]:checked').value;
                console.log(gender);
                let food1=document.querySelector('input[name="food1"]:checked').value;
                console.log(food1);
                let food2=document.querySelector('input[name="food2"]:checked').value;
                let row_count = table.rows.length;
                let row = table.insertRow(row_count);
                row.insertCell(0).innerHTML=fname.value;
                row.insertCell(1).innerHTML=lname.value;
                row.insertCell(2).innerHTML=address.value
                row.insertCell(3).innerHTML=pin.value;
                row.insertCell(4).innerHTML=state.value;
                row.insertCell(5).innerHTML=country.value;
                row.insertCell(6).innerHTML=gender;
                row.insertCell(7).innerHTML=food1;
                row.insertCell(8).innerHTML=food2;
              getOption();
            });       
              
        

    /*function getOption() {
      let  selectElement = document.querySelector('#select1');
        let output = selectElement.value;
        document.querySelector('.output').textContent = output;
    }  */ 


    document.getElementById('del').addEventListener('click', function(){
            let table = document.getElementById("table_of_information");
            table.innerHTML = "";
            ;                
            });   