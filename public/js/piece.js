document.addEventListener('DOMContentLoaded', function () {
    loadPiece()
})

async function loadPiece() {
    try {
        const response = await fetch('/individual_piece')
        const [data] = await response.json()
        console.log('Fetched data:', data)
        loadHTMLContainer(data)
    } catch (error) {
        console.error('Error fetching piece:', error)
        loadHTMLContainer([])
    }
}

function loadHTMLContainer(data) {
    const container = document.querySelector('#piece-page-container')
    
    container.innerHTML = ''

    if (!data) {
        container.innerHTML = "<p class='no-data'>No piece found</p>"
        return
    }
    
    container.innerHTML = `
        <div class='piece-container'>
            <p class='piece-info'>${data.Title} by ${data.Composer}</p>
            <p>${data.Description}</p>
            <p>Difficulty: ${data.Difficulty}</p>
        </div>
    `
}
