let listProduct = [];

function addProduct() {
  let stt = document.getElementById("sttProduct").value;
  let name = document.getElementById("nameProduct").value;
  let price = document.getElementById("priceProduct").value;
  let objectProduct = {
    stt: stt,
    name: name,
    price: price,
  };
  let objectFlag = localStorage.getItem("flag");
  if (objectFlag != null) {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    listProduct.splice(objectFlag, 1, objectProduct);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    renderProduct();
    localStorage.removeItem("flag");
    return;
  }
  listProduct.push(objectProduct);
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  renderProduct();
}

function renderProduct() {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  let result = `
    <tr>
    <td>stt</td>
    <td>Tên Sản Phẩm</td>
    <td>Giá Sản Phẩm</td>
    <td>
        <button>xóa</button>
        <button>Sửa</button>
    </td>
</tr>
    `;
  for (i = 0; i < listProduct.length; i++) {
    result += `
        <tr>
        <td>${i + 1}</td>
        <td>${listProduct[i].name}</td>
        <td>${listProduct[i].price}</td>
        <td>
            <button onclick = "hanldeDelete(${i})">xóa</button>
            <button onclick = "handleEdit(${i})">Sửa</button>
        </td>
    </tr>
        `;
  }
  document.getElementById("tableProduct").innerHTML = result;
}
renderProduct();

function hanldeDelete(id) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  listProduct.splice(id, 1);
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  renderProduct();
}

function handleEdit(id) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  document.getElementById("nameProduct").value = listProduct[id].name;
  document.getElementById("priceProduct").value = listProduct[id].price;
  localStorage.setItem("flag", id);
}
