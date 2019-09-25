import printToDom from '../helpers/utilities.js';

const cheese = [
    {
    id :'cheese1',
    name : 'swiss',
    price : '50',
    },
    {
    id :'cheese2',
    name : 'colby',
    price : '2',
    },
    {
    id :'cheese3',
    name : 'cheddar',
    price : '5',
    },
    {
    id :'cheese4',
    name : 'bleu',
    price : '3',
    },
]


const cheeseMaker = () => {
    let domString = '';
    for (let i=0; i < cheese.length; i++){
        domString +=`
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id=${cheese[i].id}>
    <label class="form-check-label" for=${cheese[i].id}>${cheese[i].name}</label>
    </div>`;
    }
    printToDom.printToDom('cheese-counter',domString)

}



export default { cheeseMaker }