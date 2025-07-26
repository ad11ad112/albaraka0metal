const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = -1; 

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p, index) => {
    productList.innerHTML += `
      <div class="product-card">
        <strong>${p.title}</strong>
        <p>${p.prop} : ${p.value} ${p.unit}</p>
        <button onclick="editProduct(${index})">تعديل</button>
        <button onclick="deleteProduct(${index})">حذف</button>
      </div>
    `;
  });
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const prop = document.getElementById("prop").value;
  const value = document.getElementById("value").value;
  const unit = document.getElementById("unit").value;

  if (editIndex === -1) {
    // إضافة منتج جديد
    products.push({ title, prop, value, unit });
  } else {
    // تعديل المنتج
    products[editIndex] = { title, prop, value, unit };
    editIndex = -1;
    productForm.querySelector("button[type='submit']").textContent = "إضافة المنتج";
  }

  saveToLocalStorage();
  renderProducts();
  productForm.reset();
});

function editProduct(index) {
  const p = products[index];
  document.getElementById("title").value = p.title;
  document.getElementById("prop").value = p.prop;
  document.getElementById("value").value = p.value;
  document.getElementById("unit").value = p.unit;

  editIndex = index;
  productForm.querySelector("button[type='submit']").textContent = "تحديث المنتج";
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveToLocalStorage();
  renderProducts();
}

renderProducts();
