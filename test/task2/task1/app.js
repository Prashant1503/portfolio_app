var btn = document.createElement("button"); 
   
// @function : validating inputs 
function addRowData() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("Address").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var btn = document.createElement("button"); 
   
    let numberPattern = /^[0-9]*$/;
    

    // validate inputs

    if(name && age && address && gender) {
        if(!numberPattern.test(age)) {
           return alert('Age cannot be character');
        }

         // add row data
         var table = document.getElementById("myTableData");
         var rowCount = table.rows.length;
         var row = table.insertRow(rowCount);

         
         //  dynamically creating button
         var btn = document.createElement("button"); 
         
        //  setting properties of btn
         btn.id = "btn";
         btn.value = "X";
         btn.type = "button";
         btn.name = "del";
         btn.textContent = "X";
         btn.classList.add('btn');
         
         
        
         
         // adding values into rows
         var ids = Math.floor(Math.random() * 50);
         row.setAttribute("id",ids);
         row.insertCell(0).innerHTML =ids;
         row.insertCell(1).innerHTML = name;
         row.insertCell(2).innerHTML = age;
         row.insertCell(3).innerHTML = address;
         row.insertCell(4).innerHTML= gender;
         row.appendChild(btn);
         
         var str = ids.toString();
         
         btn.addEventListener("submit",del(str));
    
    
         
        //  function for deleting row at particular index
         function del(str)  {
            btn.onclick = () => {

                // converting number to string
                var data = str.toString();
                var item = document.getElementById(data);

               
                
                // remove item at particular index
                item.remove(data);
                
            }
         }
         
    }
    else {
            
        if(!name && !address && !age && !gender) {
            return alert('Fields cannot be empty');
        }
       if(!name) {
         return alert('Name can\t be empty');
       }
       else if(!address) {
        return alert('Address can\t be empty');
       }
        else if(!age) {
           return alert('Age can\t be empty');
       } 
       else if(!gender) {
        return alert('Age can\t be empty');
    }   
    else {
        return true;
    }
    }
    
}
function clear(str) {


        console.log('End function : ' + typeof(str));
        
    //     var tr2 = document.getElementById(str);
    
    //    console.log(tr2);

    // for(let i =len;i >=0;i--) {
       
    // }
    // tr2.removeChild(tr2.childNodes[0]);


    

}


// 
