{
  const welcome = () => {
    console.log("Witam wszystkich developerów !! ");
  }

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const nextColorName = document.querySelector(".js-nextColorName");

    body.classList.toggle("body--blue");
    nextColorName.innerText = body.classList.contains("body--blue") ? "jasny" : "ciemny";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}

