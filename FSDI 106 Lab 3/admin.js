var serverURL = "http://restclass.azurewebsites.net";

function Item(title, description, price, category, image) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.user = "Marian2";
}

function register() {
    console.log("Creating new products");

    var title = $('#txtTitle').val();
    var desc = $('#txtDescription').val();
    var price = $('#txtPrice').val();
    var category = $('#txtCategory').val();
    var image = $('#txtImage').val();

    var anItem = new Item(title, desc, price, category, image);
    console.log(anItem);

    $.ajax({
        url: serverURL + "/API/points",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(anItem),

        success: function (res) {
            console.log("server says: ", res);
        },
        error: function (error) {
            console.error("** ERROR: ", error);
        }
    });
}

function readTest() {
    $.ajax({
        url: serverURL + "/API/test",
        type: "GET",
        success: function (res) {
            // OK
            console.log(res);
        },
        error: function (error) {
            // not ok :(
            console.error(error);
        }
    });
}


function init() {
    console.log("admin page loaded");

    $("#btnSave").click(register);
}

window.onload = init;