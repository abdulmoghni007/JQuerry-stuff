"use strict";


function renderProducts(items) {
    // looping is
    // for the insertion of product in the html part
    const body = document.querySelector('.tbody');
    console.log(body);
    let items_object = JSON.parse(items);
    let product_list = items_object['data'];
    console.log(product_list);
    product_list.forEach((ele) => {
        let product_name = ele['name'];
        let product_detail = ele['detail'];
        let product_price = ele['price'];
        console.log(product_name);
        console.log(product_detail);
        console.log(product_price);
        const html = `<tr></tr><td>${product_name}</td><td>${product_detail}</td><td>${product_price}</td><br></tr>`;

        $(html).insertAfter(".tbody");
        // $('.tbody').insertAfter(html);
        // $("table").insertAfter(html);
        // $(Frontend).insertAfter(".tbody");
    });
}
const url = 'http://localhost/CodeSchool/Project%202/Detail.php';

$(document).ready(function() {
    // API Call when document is loaded
    $.get(url, function(data, status) {
        if (status === "success") {
            renderProducts(data);

        }
    });
});
