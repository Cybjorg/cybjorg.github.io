function autoResizeDiv() {
    document.getElementById('tt-frame').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();