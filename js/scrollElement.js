/* exported scrollElt*/
function scrollElt () {

    function checkPage() {
      const linkElt = document.getElementById("link-content");
      document.addEventListener("scroll", manageContentNav);
      linkElt.addEventListener("focus", () => (linkElt.style.top = "6px"));
      linkElt.addEventListener("blur", () => (linkElt.style.top = "-100px"));
    }
    
    /* Display or hide link to main content based on croll event     */
    function manageContentNav() {
      const linkElt = document.getElementById("link-content");
      const bannerElt = document.getElementById("header-banner");
    
      if (window.scrollY >= bannerElt.offsetHeight) {
        linkElt.style.top = "6px";
      }
      if (window.scrollY < bannerElt.offsetHeight) {
        linkElt.style.top = "-100px";
      }
    }

    return {
        checkPage,
        manageContentNav
    }
}
