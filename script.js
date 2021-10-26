var data=[];
const formsubmit=(event)=>{
    // to prevent from submiting the data
    event.preventDefault()

    // to get food entries
    let foo=document.getElementsByName("food")
    let food=[]
    // to get all values selected
    for (var i=0;i<foo.length;i++){
        if(foo[i].checked){
            food.push(foo[i].value);
        }
    }

    // To alert to fill all input fields
    var inp=document.querySelectorAll("input[type='text']")
    for (var h=0;h<inp.length;h++){
            if(inp[h].value===""){
            alert("Please fill all the fields before submitting.")
            return false
        }
    }

    // To alert user to select gender
    var female=document.getElementById("female")
    var male=document.getElementById("male")
    if (female.checked===false && male.checked===false){
        alert("Please select one gender option.")
        return false;
    }

    // To alert to select atleast two food items
    if (food.length<2){
        alert("Please select atleast two food items.")
        return false
    }

    // create an object and store the values
    var obj={
        "First Name" : document.getElementById("firstname").value,
        "Last Name" : document.getElementById("lastname").value,
        "Address" : document.getElementById("address").value,
        "Pin Code" : document.getElementById("pin-code").value,
        "Gender" : document.querySelector('input[name="gender"]:checked').value,
        "Food" : food.join(", "),
        "State" : document.getElementById("state").value,
        "Country" : document.getElementById("country").value 
    }
    // Push the object into the array
    data.push(obj);

    // console.log(data)

    // Create an array of object keys
    let arr=Object.keys(obj)
    // console.log(arr)

    // For adding data to table

    let table=document.getElementById("data-table");
    let tr=document.createElement("tr");
    for (var k=0;k<arr.length;k++){
        let td=document.createElement("td")
        td.innerHTML=obj[arr[k]];
        tr.appendChild(td)

    }
    table.appendChild(tr)

    // To reset the form
    document.forms[0].reset()

    // to store to local storage
    for (var t=0;t<arr.length;t++){
        localStorage.setItem(arr[t],obj[arr[t]]);
    }
}
const btn=document.getElementById("data-submit")
btn.addEventListener("click",formsubmit)
