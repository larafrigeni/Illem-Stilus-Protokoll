window.onload = function() {
    let controlla = localStorage.getItem("controlla")
    if(controlla == "2") {
        location.href = "#stilus-4";
        // console.log(controlla)
    }
    controlla == "0"
    localStorage.setItem('controlla',  "0");
}