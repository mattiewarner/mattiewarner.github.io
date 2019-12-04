(() => {
    /* */
    if (document.querySelector(".reveal_trigger")) {
      document.querySelectorAll(".reveal_trigger").forEach(function(obj) {
        obj.addEventListener("click", function() {
          obj.parentNode.classList.toggle("active");
        });
      });
    }
  })();