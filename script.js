function addDivs() {
  const usernum = document.getElementById("newnum").value;
  const container = document.querySelector(".container");
  container.innerHTML = "";
  
  for (let i = 0; i < usernum; i++) {
    let box = document.createElement("div");
    box.classList.add("box");

    container.appendChild(box);
  }
}

 


