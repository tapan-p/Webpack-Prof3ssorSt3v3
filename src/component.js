import logo from "./logo.svg";

function component() {
  let mainElement = document.createElement("main");
  let paragraph = document.createElement("p");
  let image = document.createElement("img");
  mainElement.append(paragraph);
  mainElement.append(image);
  image.src = logo;
  image.alt = "sample logo";
  return mainElement;
}

export default component;
