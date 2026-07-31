/* ===================================
   FLAK UI v2 JavaScript
=================================== */

// Toast Notification
function showToast(message = "Done!") {

    let toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 500);

    }, 2500);

}


// Ripple Effect

document.addEventListener("click", function(e){

if(e.target.tagName==="BUTTON"){

const circle=document.createElement("span");

circle.className="ripple";

const rect=e.target.getBoundingClientRect();

circle.style.left=(e.clientX-rect.left)+"px";

circle.style.top=(e.clientY-rect.top)+"px";

e.target.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

}

});


// Copy Animation

function copyText(text){

navigator.clipboard.writeText(text);

showToast("✅ Copied Successfully");

}


// Loading Button

function loadingButton(button){

const old=button.innerHTML;

button.disabled=true;

button.innerHTML="Generating...";

setTimeout(()=>{

button.disabled=false;

button.innerHTML=old;

},1000);

}
