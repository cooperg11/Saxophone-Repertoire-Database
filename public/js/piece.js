document.addEventListener('DOMContentLoaded', function () {
    loadPiece()
})

const urlParams = new URLSearchParams(window.location.search)
const title = urlParams.get('Title')
const composer = urlParams.get('Composer')

async function loadPiece() {
    try {
        const response = await fetch('/individual_piece?Title=' + title + '&Composer=' + composer)
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
        <div>
            <h1>${data.Title} by ${data.Composer}</h1>
            <p>${data.Description}</p>
            <h2>Difficulty: ${data.Difficulty}</h2>
        </div>
    `
}
