const squares = [];
for(let i=0 ; i<3 ; i++){
	let id = i+1;
	squares[i] = document.getElementById("square"+id);
}
for(let i=0 ; i<3 ; i++){
	squares[i].addEventListener("mouseover", onMouse);
	squares[i].addEventListener("mouseout", offMouse);
}
function toggleBgColor(e){
	e.classList.toggle("coffee");
	e.classList.toggle("lavender");
}

function onMouse(e){
    for(let j=0 ; j<3 ; j++){
        if(e.target !== squares[j]){
            squares[j].style.backgroundColor = '#6F4E37';  // Coffee color
        }
    }
}

function offMouse(e){
    for(let j=0 ; j<3 ; j++){
        squares[j].style.backgroundColor = '#E6E6FA';  // Lavender color
    }
}
