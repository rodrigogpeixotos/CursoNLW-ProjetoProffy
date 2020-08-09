//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField()
{
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Para cada campo e limpar.
    fields.forEach(function(field)
    {
        //Pegar o field do momento e limpa ele
        field.value = ""
    })
        
    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}