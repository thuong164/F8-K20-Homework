function createSlug(text){
    text=text.toLowerCase().replaceAll(" ","-").replaceAll("!","").replaceAll("?","").replaceAll(".","");
    return text;
}

// Test 1
console.log(createSlug("MacBook Pro 2024"))
console.log(createSlug("Bàn Phím Cơ RGB"))
console.log(createSlug("iPhone 15 Pro Max!!!"))
console.log(createSlug("Hello   World"))

function generateOrderId(productName, quantity){
    return "ORD-" + productName.slice(0,3).toUpperCase() + "-" + quantity + "-" + productName.length;
}

// Test 2
console.log(generateOrderId("MacBook Pro", 2))
console.log(generateOrderId("iPhone 15", 5))

function formatPrice(price, currency) {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

// Test 3
console.log(formatPrice(2000000, "VND"))
console.log(formatPrice(1500, "USD"))
console.log(formatPrice(300000))

const baseUrl = "https://shop.vn";
const product = { name: "MacBook Pro 2024", id: 101, category: "laptop" };

function buildProductUrl(baseUrl, product) {
    return baseUrl + "/" + product.category + "/" + product.name.toLowerCase().replaceAll(" ","-").replaceAll("!","").replaceAll("?","").replaceAll(".","") + "?" + "id="+ product.id;
}

// Test 4
console.log(buildProductUrl(baseUrl, product))
console.log(buildProductUrl("https://shop.vn", { name: "iPhone 15", id: 55, category: "phone" }))