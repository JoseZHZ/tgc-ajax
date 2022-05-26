document.querySelector('#load-users-btn').addEventListener('click', async function() {
    let response = await axios.get('users.json')
    let list = document.createElement('ul')
    let usersArray = response.data.users
    for (let eachUser of usersArray) {
        let user = document.createElement('li')
        user.innerText = eachUser.firstName + " " + eachUser.lastName + ": " + eachUser.emailAddress
        list.appendChild(user)
    }
    document.querySelector('#all-users').appendChild(list)
})

document.querySelector('#search').addEventListener('click', async function() {
    let response = await axios.get('users.json')
    let userId = parseInt(document.querySelector('#user-id').value)
    let usersArray = response.data.users
    let userSearched = usersArray.filter(eachUser => eachUser.userId == userId)
    document.querySelector('#searched-user').innerText = userSearched[0].firstName + " " + userSearched[0].lastName
})