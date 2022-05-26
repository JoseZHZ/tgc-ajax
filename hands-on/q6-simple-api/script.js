let url = "https://programming-quotes-api.herokuapp.com/quotes/random"
document.querySelector('#load-btn').addEventListener('click', async function() {
    let response = await axios.get(url)
    document.querySelector('#quote').innerText = response.data.en
})