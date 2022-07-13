// The active locale
var locale = "urdu";
const translations = {
  // English translations
  "en": {
    "banner1": "Captain Honey",
    "banner11": "From The Lap Of Nature At Your Service",
    "banner2": "original INDIGENOUS  HONEY",
    "nav1": "Home",
    "nav2": "Service",
    "nav3": "portfolio",
    "nav4": "Testimonial",
    "nav5": "Price",
    "nav6": "Contact"
  },
  // Arabic translations
  "urdu": {
    "banner1": "کیپٹن ہنی",
    "banner11": "فطرت کی گود سے آپ کی خدمت میں",
    "banner2": "اصلی دیسی شہد",
    "nav1": "ہوم پیج",
    "nav2": "ہماری سروس",
    "nav3": "پورٹ فولیو",
    "nav4": "تعریف",
    "nav5": "قیمت",
    "nav6": "رابطہ کریں۔"

  },
};

function populateLanguage(str){
  locale=str
// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
}
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var x = getCookie("captain-lang");
if (x=='') x = 'urdu'
populateLanguage(x);
function setLanguage(txt){
  setCookie("captain-lang",txt,10);
  location.reload();
}
