let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
};

function CekTotalQty(productBin, productCode) {
  let total = 0;
  let i;
  for (i = 0; i < productBin.data.length; i++) {
    if (productBin.data[i].productCode === productCode) {
      total += productBin.data[i].quantity;
    }
  }
  return total;
}

const prompt = require("prompt-sync")({ sigint: true });
const ProductCode = prompt("Inputkan ProductCode : ");
let totalQuantity = CekTotalQty(productBin, ProductCode);
console.log("Total Quantity Produk adalah " + totalQuantity);
