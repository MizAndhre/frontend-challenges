const accordionBtns = document.querySelectorAll(".accordion__title");
// const divCollapse = document.querySelectorAll(".accordion__collapse");

accordionBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log('click')

    let accCollapse = button.nextElementSibling;

    if (!button.classList.contains("collapsing")) {
      // open accordion item
      if (!button.classList.contains("open")) {
        // console.log("click");

        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;
        // console.log(accHeight)

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
        //   console.log("click");
          accCollapse.classList = "accordion__collapse collapse open";
        }, 300);
      }
      //close accordion item
      else {
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        //
        setTimeout(() => {
        //   console.log("click2");
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
        }, 300);
      }

      button.classList.toggle("open");
    }
  });
});
