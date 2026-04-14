let quantidades = [[22, 0], [26, 0], [29, 0], [5, 0], [8, 0]]

document.querySelector("#InputBasico").addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[0][1] = event.target.value
    increment_total()
})
document.querySelector("#InputDuplo").addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[1][1] = event.target.value
    increment_total()
})
document.querySelector("#InputSalada").addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[2][1] = event.target.value
    increment_total()
})
document.querySelector("#InputRefriP").addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[3][1] = event.target.value
    increment_total()
})
document.querySelector("#InputRefriG").addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[4][1] = event.target.value
    increment_total()
})

function increment_total() {
    let total = 0
    console.log("ok")
    quantidades.forEach((i, index) => {
        total += quantidades[index][0] * quantidades[index][1]
        console.log(quantidades[index][0])
        console.log(quantidades[index][1])
        console.log(total)
    })
    document.querySelector("#InputTotal").innerText = total.toFixed(2)
}