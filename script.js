function onScroll(event) {
    var sections = document.querySelectorAll("nav div a");
    var scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute("href");
      var refElement = document.querySelector(val);
      if (
        refElement.offsetTop <= scrollPos &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos
      ) {
        document
          .querySelector("nav div a")
          .classList.remove("active-item");
        currLink.classList.add("active-item");
      } else {
        currLink.classList.remove("active-item");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);