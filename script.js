var array = [
    {
        OrderID: "1",
        ShipName: "ro",
        Freight: "11.20",
        OrderDate: "02/01/2024"
    },
    {
        OrderID: "2",
        ShipName: "b",
        Freight: "25.45",
        OrderDate: "04/03/2021"
    },
    {
        OrderID: "3",
        ShipName: "c",
        Freight: "50.20",
        OrderDate: "07/06/2028"
    },
    {
        OrderID: "4",
        ShipName: "d",
        Freight: "6.40",
        OrderDate: "08/09/2026"
    },
    {
        OrderID: "5",
        ShipName: "e",
        Freight: "110.10",
        OrderDate: "08/03/2020"
    }

]

function showTable(data) {
    document.getElementById("myTable").innerHTML = `
    <tr>
        <td id="orderIDSort">OrderID  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <a id ="cursor">
                <i class="fa-solid fa-arrow-down-short-wide" style="color: #000000;"></i>
            </a>
        </td>

        <td id="shipNameSort" style="width: 300px;">ShipName &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <a id ="cursor">
                <i class="fa-solid fa-arrow-down-a-z fa-bounce" style="color: #000000;"></i> 
            </a>
        </td>

        <td id="freightSort" style="width: 250px;">Freight &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    
            <a id ="cursor">    
                <i class="fa-solid fa-arrow-down-short-wide" style="color: #000000;"></i>
            </a>
        </td>

        <td id="orderDateSort">OrderDate &nbsp; &nbsp; &nbsp; 
            <a id ="cursor">    
                <i class="fa-solid fa-arrow-down-short-wide" style="color: #000000;"></i>
            </a>
        </td>

        <td style="width: 200px;">
            <a onclick="addOnClick()" id ="cursor" >
                <i class="fa-solid fa-plus"></i>&nbsp;
            </a>ADD NEW NUMBER
        </td>
    </tr>

        <td>
            <input id = "search" class="form-control" value="" type="text" placeholder="Search Order ID">
        </td>

        <td>
            <div style="display: flex; align-items: center;"> 
                <input id = "searchShip" class="form-control" value="" type="text" placeholder="Search Ship Name" style="width: 250px">
                 &nbsp; &nbsp;
                <a id ="cursor"><i class="fas fa-filter"></i></a>
            </div>
        </td>

        <td>
            <div style="display: flex; align-items: center;"> 
                <input id = "searchFreight" class="form-control" value="" type="Number" placeholder="Search Freight" style="width: 200px">
                &nbsp; &nbsp;
                <a id ="cursor"><i class="fas fa-filter"></i></a>
            </div>
        </td>

        <td>
            <div style="display: flex; align-items: center;">
                <input id="searchOrder" class="form-control" value="" type="text" placeholder="Search Order Date" style="width: 100px;">&nbsp; &nbsp;
                <a id ="cursor"><i class="fas fa-filter"></i></a>
            </div>
        </td>

        <td></td>
    </tr>


    <tr>
        <form id="addItemForm">
            <td>
                <input type="number" class="form-control" id="OrderID">
            </td>
            <td>
                <input type="text" class="form-control" id="ShipName" style="width: 250px">
            </td>
            <td>
                <input type="number" class="form-control" id="Freight" style="width: 200px">
            </td>
            <td>
                <input type="text" class="form-control" id="OrderDate" style="width: 100px">
            </td>
            <td>
                <div style="margin: 6px;padding: -1px;">
                    <a onClick="saveOnClick()" id="cursor">
                        <i class="fa-solid fa-check" ></i>
                    </a>
                    Save &nbsp; &nbsp; &nbsp;
                    <a onClick="cancelOnClick()" id="cursor">
                        <i class="fa-solid fa-ban"></i> 
                    </a>
                    Cancel
                </div>
            </td>
        </form>
    </tr>
    `;

    if (data == "") {
        document.getElementById("error").innerHTML = `<span class="text-denger">Not Found!</span>`
    }
    else {
        document.getElementById("error").innerHTML = "";

        for (var i = 0; i < data.length; i++) {
            document.getElementById("myTable").innerHTML += `
                <tr>
                    <td>${data[i].OrderID}</td>
                    <td>${data[i].ShipName}</td>
                    <td>${data[i].Freight}</td>
                    <td>${data[i].OrderDate}</td>
                    <td>
                    <a id="cursor" onclick="editOnClick(${i})"><i class="fa-solid fa-pen"></i></a>&nbsp; Edit
                     &nbsp; &nbsp; &nbsp; &nbsp; 
                    <a id="cursor" onclick="deleteOnClick(${i})"><i class="fa-solid fa-xmark"></i></a>&nbsp; Delete
                    </td>
                </tr>`
        }
    }
}
showTable(array);

// ADD NEW NUMBER

function addOnClick() {
    document.getElementById("addItemForm").reset();
    var OrderID = document.getElementById('OrderID').value;
    var ShipName = document.getElementById('ShipName').value;
    var Freight = document.getElementById('Freight').value;
    var OrderDate = document.getElementById('OrderDate').value;

    if (OrderID && ShipName && Freight && OrderDate) {
        let id = array.length + 1;
        array.push({
            OrderID: OrderID,
            ShipName: ShipName,
            Freight: Freight,
            OrderDate: OrderDate
        })
        // array.push(array);
        showTable(array);
    }
}


// search all field

document.getElementById("search").addEventListener("keyup", function () {
    var search = this.value.trim().toLowerCase();

    newArray = array.filter(function (val) {
        return val.OrderID.toLowerCase().includes(search);
    });
    showTable(newArray);
});


document.getElementById("searchShip").addEventListener("keyup", function () {
    var search = this.value.trim().toUpperCase();

    newArray = array.filter(function (val) {
        return val.ShipName.toUpperCase().includes(search);
    });
    showTable(newArray);
});


document.getElementById("searchFreight").addEventListener("keyup", function () {
    var search = this.value.trim().toLowerCase();

    newArray = array.filter(function (val) {
        return val.Freight.toLowerCase().includes(search);
    });
    showTable(newArray);
});


document.getElementById("searchOrder").addEventListener("keyup", function () {
    var search = this.value.trim().toLowerCase();

    newArray = array.filter(function (val) {
        return val.OrderDate.toLowerCase().includes(search);
    });
    showTable(newArray);
});

// edit

function editOnClick(index) {
    document.getElementById('OrderID').value = array[index].OrderID;
    document.getElementById('ShipName').value = array[index].ShipName;
    document.getElementById('Freight').value = array[index].Freight;
    document.getElementById('OrderDate').value = array[index].OrderDate;
}

// save

function saveOnClick() {
    var OrderID = document.getElementById('OrderID').value;
    var ShipName = document.getElementById('ShipName').value;
    var Freight = document.getElementById('Freight').value;
    var OrderDate = document.getElementById('OrderDate').value;

    if (OrderID && ShipName && Freight && OrderDate) {
        var newArray = array.slice(); 
      
        var existingIndex = newArray.findIndex(item => item.OrderID === OrderID);
        if (existingIndex !== -1) {
            newArray[existingIndex].ShipName = ShipName;
            newArray[existingIndex].Freight = Freight;
            newArray[existingIndex].OrderDate = OrderDate;
        } else {
            newArray.push({
                OrderID: OrderID,
                ShipName: ShipName,
                Freight: Freight,
                OrderDate: OrderDate
            });
        }
        showTable(newArray);
    }
}

function cancelOnClick() {
    showTable(array);
}

// delete data

function deleteOnClick(index) {
    array.splice(index, 1);
    showTable(array);
}


// sorting

document.getElementById("orderIDSort").addEventListener("click", function () {
    array.sort((a, b) => a.OrderID.localeCompare(b.OrderID));
    showTable(array);
});

document.getElementById("shipNameSort").addEventListener("click", function () {
    array.sort((a, b) => a.ShipName.localeCompare(b.ShipName));
    showTable(array);
});

document.getElementById("freightSort").addEventListener("click", function () {
    array.sort((a, b) => parseFloat(a.Freight) - parseFloat(b.Freight));
    showTable(array);
});

document.getElementById("orderDateSort").addEventListener("click", function () {
    array.sort((a, b) => {
        return new Date(a.OrderDate) - new Date(b.OrderDate);
    });
    showTable(array);
});
