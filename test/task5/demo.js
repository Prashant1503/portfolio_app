var rIndex;   
table = document.getElementById("UserTable");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("firstName").value,
                    lname = document.getElementById("lastName").value,
                    age = document.getElementById("contact").value;
            
                if(fname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(lname === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Age Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's

                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    fname = document.getElementById("firstName").value,
                    lname = document.getElementById("lastName").value,
                    age = document.getElementById("contact").value;
            
                    cell1.innerHTML = fname;
                    cell2.innerHTML = lname;
                    cell3.innerHTML = age;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 0; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;

                      console.log(rIndex);
                    //   document.getElementById("firstName").value = this.cells[0].innerHTML;
                    //   document.getElementById("lastName").value = this.cells[1].innerHTML;
                    //   document.getElementById("contact").value = this.cells[2].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("firstName").value,
                    lname = document.getElementById("lastName").value,
                    age = document.getElementById("contact").value;


                if(!checkEmptyInput()){
                    table.rows[rIndex].cells[0].innerHTML = fname;
                    table.rows[rIndex].cells[1].innerHTML = lname;
                    table.rows[rIndex].cells[2].innerHTML = age;
                }
                }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("contact").value = "";
            }