document.addEventListener('DOMContentLoaded', function () {
    loadPieces()
})

async function loadPieces() {
    try {
        const response = await fetch('/pieces')
        const data = await response.json()
        console.log('Fetched data:', data)
        loadHTMLList(data)
    } catch (error) {
        console.error('Error fetching pieces:', error)
        loadHTMLList([])
    }
}

function loadHTMLList(data) {
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
            <div>
                <h3 class="piece-title">${piece.Title || 'Unknown Title'}</h3>
                <p class="piece-composer">by ${piece.Composer || 'Unknown Composer'}</p>
            </div>
            <br>
        `
        
        list.appendChild(listItem)
    })
}
