import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

const nav = document.getElementsByClassName("nav-link")[0];

nav.addEventListener("dblclick", (event) => {
  alert("Zaten Anasayfadasınız :)");
});

//Güneş altında eğlence butonu için
const button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", (event) => {
  event.target.textContent = "Sepete Eklendi!";
});

button.addEventListener("mouseleave", (event) => {
  event.target.textContent = "Beni de Al!";
});
// Dağ gezintisi butonu için
const button2 = document.getElementsByClassName("btn")[1];
button2.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "green";
  alert("İncelemek için sepete eklendi.");
});

//bir tuşa basınca gerçekleşecek olan default özelliği engelleme
document.addEventListener("keypress", (event) => {
  event.preventDefault();
});
// Haydi gidelim kısmını wheel ile italic yapma
const text = document.getElementsByClassName("text-content")[0];

text.addEventListener("wheel", (event) => {
  event.target.style.fontStyle = "italic";
});
//Macera beklemez kısmında wheel ile font değiştirme
const text2 = document.getElementsByClassName("text-content")[1];

text2.addEventListener("wheel", (event) => {
  event.target.style.fontFamily = "Impact,Charcoal,sans-serif";
});

const inpt = document.getElementById("input");
inpt.addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "pink";
  inpt.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = "white";
  });
});
