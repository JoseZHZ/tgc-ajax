document.querySelector('#load-image-btn').addEventListener('click', function() {
    async function run() {
        let response = await axios.get('artwork.json')
        let titleElement = document.createElement('h1')
        titleElement.innerText = response.data.title
        let imageElement = document.createElement('img')
        imageElement.src = response.data.image_url
        imageElement.className = response.data.class
        document.querySelector('#artwork').appendChild(titleElement)
        document.querySelector('#artwork').appendChild(imageElement)
    }
    run()
})