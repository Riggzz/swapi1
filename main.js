

let getButton = document.querySelector('button')

function residents() {
    axios.get("https://swapi.dev/api/planets/?search=alderaan")
    .then((response) => {
        console.log(response.data)
        let {residents} = response.data.results[0]

        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then((response) => {

                console.log(response.data)
            const body = document.querySelector('body')
            const char = document.createElement('h2')
            char.textContent = response.data.name
            body.appendChild(char)
        })
        }
    })
    console.log('button clicked')
}

getButton.addEventListener('click', residents)