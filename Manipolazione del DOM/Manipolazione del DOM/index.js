const addProduct = () => {
  const input = document.querySelector("input");
  const li = document.createElement("li");
  li.innerText = input.value;

  const inputCheck = document.createElement("input");
  inputCheck.setAttribute('type','checkbox');
  li.appendChild(inputCheck)
  const ul = document.querySelector("ul")
  ul.appendChild(li)
};
