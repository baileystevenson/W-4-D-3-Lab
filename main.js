

const newDiv = document.querySelector('#new-div')
const button = document.querySelector('#getResidents')


const buttonFunction = (evt) => {
    // evt.preventDefault();

console.log('button clicked')

}

function populate(evt){
axios
    .get(`https://swapi.dev/api/planets/2`)
    .then(response => {response.data.residents
        console.log(response.data.residents)
        for(let i =0; i < response.data.residents.length; i++) {
        axios.get(response.data.residents[i])
        .then(res => {
            const planetResident = document.createElement(`h2`)
            planetResident.textContent = res.data.name
            newDiv.appendChild(planetResident)
            })
    }    
})
}
    


button.addEventListener('click', populate) 

