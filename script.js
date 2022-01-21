const main = document.querySelector('#main');

for (let i = 0; i < 6; i++) {
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
    img.setAttribute('src' , 'https://toranjino.com/wp-content/uploads/2021/02/100-768x768.jpg');
    img.classList.add('card-img-top');
    // create card body
    cardBody.classList.add('card-body');
    // create card title
    h5.classList.add('card-title', 'text-center', 'mb-3');
    h5.innerHTML = 'سبزی آشی نیم کیلویی';
    cardBody.appendChild(h5);
    // create btn divition
    btnDiv.classList.add('d-flex', 'justify-content-between');
    shop.classList.add('btn', 'btn-outline-success');
    shop.innerHTML = 'خرید آنلاین';
    call.classList.add('btn', 'btn-success');
    call.innerHTML = 'سفارش سریع';
    btnDiv.appendChild(shop);
    btnDiv.appendChild(call);
    cardBody.appendChild(btnDiv);
    
    div.appendChild(img);
    div.appendChild(cardBody);

    main.append(div);  
}