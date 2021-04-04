// @function : create Product
const createProduct = () => {

    var title = document.getElementById("title").value;
    var amount = document.getElementById("amount").value;

    let numberPattern = /^[0-9]*$/;
    

    if(title && amount && numberPattern.test(amount)) {
        
        var randomId = Math.floor(Math.random() * 10);

        // creating post request
        fetch('http://localhost:4000/api/product/create',{
            method : "POST",
            headers : {
                'Content-type' : 'application/json',
            },
            body : JSON.stringify({
                "title" : title,
                "amount" : amount
            })
        })
            .then((value) =>  {

                var data = value.json();
                
                data.then((res) => {

                    var result = res.data;
                    
                    result.map((value,index) => {
                        
                    
                        var table = document.getElementById("productTable");
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        // inserting data
                        let rowId = value.id;

                        deleteProduct(rowId);
                        row.setAttribute("id",rowId);
                        row.insertCell(0).innerHTML = value.id;
                        row.insertCell(1).innerHTML = value.title;
                        row.insertCell(2).innerHTML = value.amount;
                        row.insertCell(3).innerHTML = `<button onclick="updateProduct();"  id="updateRow">Edit</button><button onclick="deleteProduct();">Delete</button>`

                        deleteProduct(rowId);
    
                    })
                    
                    
                })
                .catch();
            })
            .catch((err) => {
                return alert(err);
            })

        resetForm();
        
       

    }
    if(!title && !amount) {
        return alert('Required fields');
    }

    if(!title) {
        return alert('Provide title');
    }
    if(!amount) {
        return alert("Provide amount");
    }
    else {
        return false;
    }
    
}


/** @function : clear input fields */
function resetForm() {

    // product table fields
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";

    // user table fields
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("contact").value = "";
}


/** @function : edit product */
function updateProduct () {

    var table = document.getElementById("productTable");
    var tr = document.getElementsByTagName("tr").length-2;

    for(let i =0;i < tr;i++) {

        table.rows[i].onclick = function () {

            // retreiving data from table and setting values to input field
            title.value = this.cells[1].innerHTML;
            amount.value = this.cells[2].innerHTML;
        
 
        } 
    }
    
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    var title = document.getElementById("title");
    var amount = document.getElementById("amount");
    var save = document.getElementById("update");
    
   
    console.log( table.row(0).data());

    // for(var i = 0;i < table.rows.length;i++) {

    
    //     // getting values from selected row into input field.
    //     table.rows[i].onclick = function () {


    //         // retreiving data from table and setting values to input field
    //         title.value = this.cells[1].innerHTML;
    //         amount.value = this.cells[2].innerHTML;

    //         document.getElementById("update").innerHTML = "Save";
            
 
    //     }
    // }

   

    
}

/** @function : delete product */
function deleteProduct(rowId) {
    
    console.log(rowId);
    // var table = document.getElementById("productTable");
    // var rowCount = table.row.length;
   
             
    // for(var i = 0;i < table.rows.length;i++) {
    //     // getting values from selected row into input field.
    //     table.rows[i].onclick = function () {

    //         // retreiving data from table and setting values to input field
    //         title.value = this.cells[1].innerHTML;
    //         amount.value = this.cells[2].innerHTML;

    //         table.remove(table.rows[i])
 
    //     }
    // }

   
}


function getProduct () {
    

    fetch('http://localhost:4000/api/product/all',{
        method :"GET",
        headers : {
            'Content-type' : 'application/json'
        }    
    })
    .then((value) => {
       
        // convert to json
        var data = value.json();
        
        data.then((product) => {
            
            var obj = product.products;
            
            obj.map((value,index) => {
          
                var table = document.getElementById("productTable");
                var rowCount = table.rows.length;
                var row = table.insertRow(rowCount);

                // inserting dynamic data into row
                row.setAttribute("id",value.id);
                row.insertCell(0).innerHTML = value.id;
                row.insertCell(1).innerHTML = value.title;
                row.insertCell(2).innerHTML = value.amount;
                row.insertCell(3).innerHTML = `<button onclick="updateProduct();">Update</button>
                                            <button onclick="deleteProduct();">Delete</button>`
                
            })
        
        }).catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    });
}


/** @function : update demo function */
function updateDemo () {

    var table = document.getElementById("productTable");
    console.log(table);
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

/************************************ User ********************************************************** */

function createUser () {

   
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var contact = document.getElementById("contact").value;



    //    request new user
        fetch('http://localhost:4000/api/user/create',{
                    method : "POST",
                    headers : {
                        'Content-type' : 'application/json'
                    },
                    body : JSON.stringify({
                        firstName : firstName,
                        lastName : lastName,
                        contact : contact
                    })
                })
                .then((data)  => {

                    var user = data.json();
                    
                    user
                    .then((result) => {

                        var d = result.data;
                        
                        d.map((value,index) => {
                            
                            console.log(value.firstName);

                        var table = document.getElementById("UserTable");
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        // inserting data
                        let rowId = value.id;

                       
                        row.setAttribute("id",rowId);
                        row.insertCell(0).innerHTML = value.id;
                        row.insertCell(1).innerHTML = value.firstName;
                        row.insertCell(2).innerHTML = value.lastName;
                        row.insertCell(3).innerHTML = value.contact;
                        row.insertCell(4).innerHTML = `<button onclick="updateProduct();"  id="updateRow">Edit</button><button onclick="deleteProduct();">Delete</button>`

                        deleteProduct(rowId);
                        })
                    } )
                    .catch(err => {
                        console.log(err);
                    });
                })
                .catch((err) => {
                    console.log(err);
                })


   
}

/** @function : get all user */
function getAllUser () {

    // api call for listing all users
    fetch('http://localhost:4000/api/user/get-all')
        .then((data) => {

            var result = data.json();

            result.then((users) => {

                var res = users.user;
                
                res.map((value,index) => {
                    
                    var table = document.getElementById("UserTable");
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        // inserting data
                        let rowId = value.id;

                        deleteProduct(rowId);
                        row.setAttribute("id",rowId);
                        row.insertCell(0).innerHTML = value.id;
                        row.insertCell(1).innerHTML = value.firstName;
                        row.insertCell(2).innerHTML = value.lastName;
                        row.insertCell(3).innerHTML = value.contact;
                        row.insertCell(4).innerHTML = `<button onclick="updateProduct();"  id="updateRow">Edit</button><button onclick="deleteProduct();">Delete</button>`

                        deleteUser(index);

                })
            }).catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });

}


/** @function : delete user */
function deleteUser (index) {
    var table = document.getElementById("UserTable");
    table.deleteRow(index)
}