const docId = 'Wtbc3xyUly';
const tableIdOrName = 'grid-5yWlr9SKQp';
const token = 'e8034f3b-66bc-42e2-9916-4a4f2327f91e';
const url = `https://coda.io/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows`;
const titleId = 'c-TxzORDiyts';
const imageId = 'c-6rK19jk8yC';

const getData = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            return creatProduct(data.items);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
}

const main = document.querySelector('#main');

const creatProduct = (productInfo) => {
    for (let i = 0; i < productInfo.length; i++) {
        const title = productInfo[i].values[`${titleId}`];
        const image = productInfo[i].values[`${imageId}`];
        // create elements
        let div = document.createElement('div');
        let cardBody = document.createElement('div');
        let btnDiv = document.createElement('div');
        let img = document.createElement('img');
        let h5 = document.createElement('h5');
        let shop =  document.createElement('a');
        let call =  document.createElement('a');
    
        // create card
        div.classList.add('card', 'product', 'shadow-sm', 'm-1');
        // create image
        img.setAttribute('src' , image);
        img.classList.add('card-img-top');
        // create card body
        cardBody.classList.add('card-body');
        // create card title
        h5.classList.add('card-title', 'text-center', 'mb-3');
        h5.innerHTML = title;
        cardBody.appendChild(h5);
        // create btn divition
        btnDiv.classList.add('d-flex', 'justify-content-between');
        shop.classList.add('btn', 'btn-outline-success');
        shop.setAttribute('href' , 'https://toranjino.com');
        shop.innerHTML = 'خرید آنلاین';
        call.classList.add('btn', 'btn-success');
        call.setAttribute('href' , `tel:02537839529`);
        call.innerHTML = 'سفارش سریع';
        btnDiv.appendChild(shop);
        btnDiv.appendChild(call);
        cardBody.appendChild(btnDiv);
    
        div.appendChild(img);
        div.appendChild(cardBody);
    
        main.append(div);  
    }
}

getData();