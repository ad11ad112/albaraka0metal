document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tables");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (products.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:#666;">لا توجد منتجات مضافة بعد.</p>`;
    return;
  }


  const grouped = {};
  products.forEach((item) => {
    if (!grouped[item.title]) grouped[item.title] = [];
    grouped[item.title].push(item);
  });

  container.innerHTML = Object.keys(grouped)
    .map((title) => {
      const rows = grouped[title]
        .map(
          (p) => `
            <tr>
                <td>${p.prop}</td>
                <td>${p.value}</td>
                <td>${p.unit}</td>
            </tr>
        `
        )
        .join("");

      return `
            <table>
                <thead>
                    <tr>
                        <th colspan="3">${title}</th>
                    </tr>
                    <tr>
                        <td><strong>الخاصية</strong></td>
                        <td><strong>القيمة</strong></td>
                        <td><strong>الوحدة</strong></td>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    })
    .join("");
});




