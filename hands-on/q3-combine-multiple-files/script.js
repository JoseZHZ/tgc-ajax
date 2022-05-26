document.querySelector('#load-btn').addEventListener('click', async function () {
    let response1 = await axios.get('file1.txt');
    let response2 = await axios.get('file2.txt');
    let text = response1.data + response2.data
    document.querySelector('#content').innerText = text
})