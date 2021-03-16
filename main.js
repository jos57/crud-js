
let form = document.querySelector('form')

let submit = document.getElementById('go')
let into = document.querySelectorAll('.into')
let cont = 0

let fragment = new DocumentFragment()
let tbody = document.getElementById('tbody')
let valor =-1
let values = Array.from(form)
let values2 = values.slice(1,5)

//comprobacion de campos vacios-----------

submit.addEventListener('click', (e)=> {
        e.preventDefault()
        let fa = 0
        values2.map((fo)=> { if(fo.value=="") {
            fa++
        } 
    })

    if(fa > 0) {alert(`Hay ${fa} campos sin rellenar`)}
    else {cont++
        valor++
    let val = document.querySelector('.cont')
    
    val.value = Math.ceil(Math.random()*100)

    let tr = document.createElement('tr')
    for (value in values) {
        if(value < 5) {
            let td = document.createElement('td')
            td.textContent = values[value].value
            tr.append(td)
        if(value == 0) {td.textContent= `0000-${values[value].value}`}
        
        
    }}
        let valueClient = tr.children[0].textContent
        bt = document.createElement('button')
        bt.textContent = 'Delete'
     
        let btChange = document.createElement('button')
        btChange.textContent = 'Change' 

    fragment.append(tr)
    tr.append(bt)
    tr.append(btChange)
    tbody.append(fragment)
    form.reset()
    comprobar(tr.children, valor,tr,btChange,valueClient)}

       

        
        
})

let tr = tbody.children
//función que asigna valores al boton y la fila para poder borrar el correcto----

let comprobar = (trSons,valor,tr,btChange,valueClient)=> {

    let buttonForDelete = trSons[5]
    buttonForDelete.value = valor  //el = button value='1 o 2 o 3...'
    tr.setAttribute('id', valor) 
//creación de boton change----------------------
    let buttonForChange = btChange
    buttonForChange.value = valor
    
  
    buttonForDelete.addEventListener('click', ()=> {
        let q = confirm(`¿Desea eliminar el cliente N°: ${valueClient}?`)
        if(q) {tbody.removeChild(tr); cont--}
        
        
    })

    buttonForChange.addEventListener('click', ()=> {
  
        let campo = prompt(`Ingrese el campo que desea modificar en el cliente N°:${valueClient}
        
        A= Name
        B= Lastname
        C= Email
        D= Phone`).toUpperCase()

        switch (campo){
            case "A": let newName = prompt('Ingrese el nuevo nombre: ')
                console.log(newName)
                    if(newName.length==0){alert('no se realizo ningun cambio')}
                    else {tr.children[1].textContent = newName
                        alert('El campo name fue cambiado con exito')}
                      
                break
            case "B": let newLastname = prompt('Ingrese el nuevo Lastname: ')
                        if(newLastname.length==0) {alert('No se realizo ningun cambio')}
                        else { tr.children[2].textContent = newLastname
                            alert('El campo Lastname fue cambiado con exito')}
                break
            case "C": let newEmail = prompt('Ingrese el nuevo Email: ')
                            if(newEmail.length==0) {alert('No se realizo ningun cambio')}
                            else { tr.children[3].textContent = newEmail
                                alert('El campo Email fue cambiado con exito')}
                break
            case "D": let newPhone = prompt('Ingrese el nuevo Phone: ')
                                if(newPhone.length > 0) { tr.children[4].textContent = newPhone
                                    alert('El campo Phone fue cambiado con exito')}
                                else { alert("No se realizo ningun cambio")}
                       
                break
            default:
                    alert('No se realizó ningun cambio')
       }
    })

}










