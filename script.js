const changeH1 = function() {                                       //7
document.querySelector("h1").innerHTML = "Some other heading";
}

const changeBckColor = function() {                                 //8
    document.body.style = "background-color: red";
}

const changeFooter = function() {   
    const newText = "New address";                                //9
    const linkPara = document.querySelector("p");
    linkPara.appendChild(newText);
}

const addCssClass = function() {                                 //10
    document.querySelectorAll(`a`).forEach(element => element.classList.add('link-style'));
}

const toggleClass = function() {                                //11
   let element = document.querySelectorAll(`img`);
    element.classList.toggle("mystyle";)
}

const colorPrice = function() {                                 //12
    const price = document.querySelectorAll(".price");
    price.style = "color: red";
}