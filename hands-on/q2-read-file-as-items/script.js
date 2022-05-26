document.querySelector('#load-btn').addEventListener('click', async function() {
    let response = await axios.get('items.txt')
    let fruitArray = response.data.split(",")
    console.log(fruitArray)
    let fruitList = document.querySelector('#fruit-list')
    for (let eachFruit of fruitArray) {
        let fruit = document.createElement('li')
        fruit.innerText = eachFruit
        fruitList.appendChild(fruit)
    }
})