const addButton = document.querySelector('.add-button');
const inputUser = document.querySelector('input');
const ul = document.querySelector('ul');
const sortDown = document.querySelector('.image');



addButton.addEventListener('click', () => {
    if(inputUser.value == ""){
        addButton = false;
    }else{
        let div = document.createElement('li');
       
        div.innerHTML = 
        `${inputUser.value}
        <div class="cross">
            <p class="cross-text"> × </p>    
        </div> 
        `      
        div.querySelector('.cross').addEventListener('click', (e)=>{
            e.target.parentElement.parentElement.remove();
        });
        document.querySelector('ul').append(div);
        inputUser.value = '';
    }

})

const sortButton = document.querySelector('.block-sorting');


let order = 1;
sortButton.addEventListener('click', () => {
    const rows = [...document.querySelectorAll('li')];
    let rowsArray = Array.from(rows);
    rowsArray.sort((a,b) => {
        return a.textContent.localeCompare(b.textContent) * (order);

    });
    ul.innerHTML = null;
    rowsArray.forEach(e => {
        ul.append(e);
    })

    order *= (-1);
    switch(order) {
        case 1:
            sortDown.src = 'images/Group 34.png';
            sortDown.addEventListener('mouseover', (e) => {
                e.target.src = './images/GroupBlack73.png';
            });
            sortDown.addEventListener('mouseout', (e) => {
                e.target.src = './images/Group 34.png';
            })
        break;
        case -1:
            sortDown.src = 'images/Group 90.png';
            sortDown.addEventListener('mouseover', (e) => {
                e.target.src = './images/Group 91.png';
            });
            sortDown.addEventListener('mouseout', (e) => {
                e.target.src = './images/Group 90.png';
            })
        break;
    }

});

sortDown.addEventListener('mouseover', (e) => {
    e.target.src = './images/GroupBlack73.png';
});
sortDown.addEventListener('mouseout', (e) => {
    e.target.src = './images/Group 34.png';
})



