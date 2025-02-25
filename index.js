let inputElement = document.getElementById('num-input')
let convertBtn = document.getElementById('convert-btn')

let lengthElement = document.getElementById('length-text')
let volumeElement = document.getElementById('volume-text')
let massElement = document.getElementById('mass-text')


convertBtn.addEventListener('click', ()=>{
    let conversions = convertNumbers(inputElement.value)
    render(conversions, inputElement.value)
})

function convertNumbers(num){
    return {
        meters: (num * 0.3048).toFixed(3),
        liters: (num * 3.78541).toFixed(3),
        kilograms: (num * 0.453592).toFixed(3),
        feet: (num * 3.28084).toFixed(3),
        gallons: (num * 0.264172).toFixed(3),
        pounds: (num * 2.20462).toFixed(3)
    };

}

function render(conversions, num){
    lengthElement.textContent = `${num} feet = ${conversions.meters} meters | ${num} meters = ${conversions.feet} feet`
    volumeElement.textContent = `${num} gallons = ${conversions.liters} liters | ${num} liters = ${conversions.gallons} gallons`
    massElement.textContent = `${num} pounds = ${conversions.kilograms} kilograms | ${num} kilograms = ${conversions.pounds} pounds`
}
