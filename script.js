document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener(
    "click",
    function (e) {
      if (!e.target.matches(".admin-nav-submenu-toggle")) return;
      e.preventDefault();
      var isOpen = e.target.matches(".rotate-90");

      // toggle rotation
      e.target.classList.toggle("rotate90");
      e.target.classList.toggle("rotate-90");

      // open or close the submenu via the css transition on the height property
      var submenu =
        e.target.parentNode.parentNode.querySelectorAll(
          ".admin-nav-submenu"
        )[0];
      if (isOpen) {
        submenu.style.height = 0;
      } else {
        // if the submenu is closed, it will have a height of zero, so calculate the height it should be based on its children
        submenu.style.height =
          submenu.firstElementChild.offsetHeight * submenu.children.length +
          "px";
      }
    },
    false
  );

  var LBarNavFullWidth = document.getElementById("adminNav").offsetWidth;

  document.getElementById("toggleMenu").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("adminNav").classList.toggle("s-hidden");
    document.getElementById("adminNav").classList.toggle("m-hidden");
  });

  document
    .getElementById("toggleAdminNav")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var isOpen = !e.target.matches(".rotate180");
      if (isOpen) {
        document.getElementById("adminNav").style.width = "32px";
        document.getElementById("adminNavLinks").style.left =
          -(LBarNavFullWidth + 32) + "px";
        document.getElementById("adminNavLinks").style.opacity = 0;
      } else {
        document.getElementById("adminNav").style.width =
          LBarNavFullWidth + "px";
        document.getElementById("adminNavLinks").style.left = 0;
        document.getElementById("adminNavLinks").style.opacity = 1;
      }
      e.target.classList.toggle("rotate180");
    });
});
