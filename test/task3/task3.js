/** @function : validating input fields */
function validateInput ()  {

    var isEmpty = false;

    // getting input field values
    var userId = document.getElementById("userId").value;
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;

    /** error labels */
    var labelOne = document.getElementById("err-userId");
    var labelTwo = document.getElementById("err-id");
    var labelThree = document.getElementById("err-title");
    var labelFour = document.getElementById("err-body");

    if(!userId && id && !title && !body) {

        labelOne.style.color = "red";
        labelTwo.style.color = "red";
        labelThree.style.color = "red";
        labelFour.style.color = "red";

        /** getting label text */
        labelOne.value = "Required Field";
        labelTwo.value = "Required Field";
        labelThree.value = "Required Field";
        labelFour.value = "Required Field";

        isEmpty = true;
        return;
        
    }

     if(userId && id && title && body) {
        labelOne.value = "";
        labelTwo.value = "";
        labelThree.value = "";
        labelFour.value = "";

        isEmpty = false;
        return;
    }
    if(!userId) {
        labelOne.value = "Required Field";
        isEmpty = true;
        return;
    } 
    if(!id) {
        labelTwo.value = "Required Field";
        isEmpty = true;
        return;
    } 
    if(!title) {
        labelThree.value = "Required Field";
        isEmpty = true;
        return;
    } 
    if(!body) {
        labelFour.value = "Required Field";
        isEmpty = true;
        return;
    } 
    
        
}


/** @function : create post */
function createPost  ()  {

    
    var userId = document.getElementById("userId").value;
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;

    if(!userId && !title && !body) {
        return alert('Required field');
    }
    if(!userId) {
        return alert('Provide user id');
    }
    if(!title) {
        return alert('Provide title');
    }
    if(!body) {
        return alert('Provide body');
    }

    
    /** fetch api */
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },body : JSON.stringify({
            userId : userId,
            title : title,
           body :  body
        }) 
    })
                .then(res => {
                    
                    // promise object
                    var data = res.json();

                   
                    // getting array of objects
                    data.then((result) => {

                        var table = document.getElementById("myTableData");
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        // inserting dynamic data into table
                        let postId = result.userId;

                        row.setAttribute("id",postId);
                        row.insertCell(0).innerHTML = result.userId;
                        row.insertCell(1).innerHTML = result.id;
                        row.insertCell(2).innerHTML = result.title;
                        row.insertCell(3).innerHTML = result.body;

                        row.insertCell(4).innerHTML = `
                                                        <button onclick="getPost(this);">Get</button>
                                                        <button onclick="updatePostById(this)">Edit</button>
                                                        <button>Delete</button>`;
                        
                                                        
                        resetForm();     
                        
                      
                        updatePostById(postId);
                        deletePostById(postId);
                        getPost(postId);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                })
                .catch(err => {console.log(err)});
 
}


/** @function : update post by id */
function updatePostById(postId) {

    var userId = postId;
    var table = document.getElementById("myTableData");

   
    for(var i = 1;i < table.rows.length;i++) {


        table.rows[i].onclick = function () {

            // retreiving data from table and setting values to input field
            document.getElementById("userId").value = this.cells[0].innerHTML;
            document.getElementById("title").value = this.cells[2].innerHTML;
            document.getElementById("body").value = this.cells[3].innerHTML; 

            
        }


         // input values
        var user = document.getElementById("userId").value;
        var title = document.getElementById("title").value;
        var body = document.getElementById("body").value;
    
        //hitting api
        fetch(`http://localhost:4000/api/post-update/${user}`,{
            method : "UPDATE",
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                userId : user,
                id : id,
                title : title,
                body : body
            })
        })
            .then((err,data) => {

                if(!err) {
                    
                    var result = data.json();

                    result
                        .then((post) => {

                            for(var i = 1;i < table.rows.length;i++) {

                                table.rows[i].onclick = function () {
                        
                                    // retreiving data from table and setting values to input field
                                    document.getElementById("userId").value = this.cells[0].innerHTML = post.userId;

                                    document.getElementById("id").value = this.cells[1].innerHTML = post.id;
                                    document.getElementById("title").value = this.cells[2].innerHTML = post.title;
                                    document.getElementById("body").value = this.cells[3].innerHTML = post.body; 
                                }
                            }
                            
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
                else {
                    return alert(err);
                }
            })
            .catch(err => {
                console.log(err);
            });
    
        }
    
}

/** @function : get posts */
function getPost() {

    var table = document.getElementById("myTableData");

    for(var i = 1;i < table.rows.length;i++) {

        table.rows[i].onclick = function () {

            // retreiving data from table and setting values to input field
            document.getElementById("userId").value = this.cells[0].innerHTML;
            document.getElementById("id").value = this.cells[1].innerHTML;
            document.getElementById("title").value = this.cells[2].innerHTML;
            document.getElementById("body").value = this.cells[3].innerHTML;
           
        }
    }
    
}

/** @function : reset input fields */
function resetForm() {

    document.getElementById("userId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
}


/** function : delete specific post by id */
function deletePostById (postId) {
    console.log(postId);
    var tr = document.getElementById(postId);

    tr.deleteRow(tr);


}