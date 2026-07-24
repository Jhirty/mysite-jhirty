document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile menu after a link is clicked
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
// Email obfuscation: builds the contact address at runtime so it isn't
// exposed as plain text in the page source
document.addEventListener('DOMContentLoaded', function () {
  var user = 'hello';
  var domain = 'jhirty.com';
  var link = document.getElementById('contact-email-btn');
  if (link) {
    link.setAttribute('href', 'mailto:' + user + '@' + domain);
  }
});
