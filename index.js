document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => console.log(data))
    loadHTMLList([])
})

function loadHTMLList(data) {
    const list = document.querySelector('ul li')

    if (data.length === 0) {
        list.innerHTML = "<li class='no-data'>No Data</li>"
    }
}