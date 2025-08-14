document.addEventListener('DOMContentLoaded', function () {
    loadPieces()
})

async function loadPieces() {
    try {
        const response = await fetch('/pieces')
        const data = await response.json()
        console.log('Fetched data:', data)
        loadHTMLContainer(data)
    } catch (error) {
        console.error('Error fetching pieces:', error)
        loadHTMLContainer([])
    }
}

function loadHTMLContainer(data) {
    const list = document.querySelector('#repertoire-list')
    
    list.innerHTML = ''

    if (data.length === 0) {
        list.innerHTML = "<li class='no-data'>No pieces found</li>"
        return
    }

    data.forEach(piece => {
        const listItem = document.createElement('li')
        listItem.className = 'piece-item'
        
        listItem.innerHTML = `
            <div class='piece-container'>
                <a class='piece-info' href='piece.html?Title=${piece.Title}&Composer=${piece.Composer}'>${piece.Title} by ${piece.Composer}</a>
            </div>
        `
        
        list.appendChild(listItem)
    })
}
