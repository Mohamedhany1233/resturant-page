function createcard(cards) {
    let parent = document.getElementById('parent');
    parent.innerHTML = ''; // Clear previous content in #parent'
    // div of cards 
    cards.forEach(function(item) {
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.style = 'width:18rem; border:solid 1px black; padding:10px;  border-radius:10px; overflow: hidden;  margin-left:20px; margin-bottom:10px;';
        parent.appendChild(divCard);
        //imagre code 
        let image = document.createElement('img');
        image.src = item.photo;
        image.style = 'border-radius:8px; height:250px; width:100%;';
        image.classList.add('card-img-top');
        divCard.appendChild(image);
        //heading code
        let heading5 = document.createElement('h5');
        heading5.classList.add('card-title');
        heading5.innerHTML = item.head;
        heading5.style = 'font-size: 25px; color: black; font-weight:900; font-style:italic; margin-top: 10px;';
        divCard.appendChild(heading5);
        //button code
        let button = document.createElement('a');
        button.classList.add('BtnADDtoCard')
        let count = document.getElementById('count');
        let countValue =  parseInt(localStorage.getItem('count')) || 0 ;
        button.onclick = function() {
            console.log(countValue);
            countValue = countValue + 1;
            count.innerHTML= countValue
            localStorage.setItem('count' , countValue)
            AddToCart(item) 
           
        }
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-card');
        button.innerHTML = 'Add to Cart';
        button.style = 'width:160px; margin-top: 30px; background-color:#938464; font-size:24px; font-style:italic; margin-left:60px; border-color:#938464;';
        divCard.appendChild(button);
    });
}


let count = document.getElementById('count')
let countValue = parseInt(localStorage.getItem('count')) || 0 ;
count.innerHTML = countValue
console.log(countValue);
//
function AddToCart(item) {
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    let filter = cards.filter(function(element , index){
        if (item.id == element.id)
        {
            cards[index].amount+=1 
            return element
        }
    })
    if (filter.length <=0)
    {
        item.amount = 1
        cards.push(item);
        let ContentCart = document.getElementById('content-cards')
        ContentCart.appendChild(createCartItem(item))
    }
    localStorage.setItem('cards', JSON.stringify(cards));
}

//steak cards 
let steakCards = [
    {
        photo: 'https://images.pexels.com/photos/6605642/pexels-photo-6605642.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 15$',
        id : '1',
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/blog-img-3.jpg',
        head: 'Steak 25$',
        id : '2',
    },
    {
        photo: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 20$',
        id : '3',
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_8.jpg',
        head: 'Steak 30$',
        id : '4',
    },
    {
        photo: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        head: 'Steak 25$',
        id : '5'
    }
];

let steakButton = document.getElementById('steak-btn');

console.log(steakButton);
steakButton.onclick = function() {
    createcard(steakCards);
};



//pasta cards
let pastaCards = [
    {
        id : '6',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta1.jpg',
        head: 'Pasta 15$'
    },
    {
        id : '7',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta2.jpg',
        head: 'Pasta 25$'
    },
    {
        id : '8',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta5.jpg',
        head: 'Pasta 20$'
    },
    {
        id : '9',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta6.jpg',
        head: 'Pasta 30$'
    },
];

let pastaButton =  document.getElementById("pasta-btn")
console.log(pastaButton);
pastaButton.onclick =function(){
    createcard(pastaCards)
}


let pizzaCards = [
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-1.jpg',
        head: 'Pizza 15$',
          id : '10'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza8.jpg',
        head: 'Pizza 25$',
        id : '11'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-2.jpg',
        head: 'Pizza 20$',
        id : '12'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-7.jpg',
        head: 'Pizza 30$',
        id : '13'
    },
];

let pizzaButton =  document.getElementById("pizza-btn")
console.log(pizzaButton);
pizzaButton.onclick =function(){
    createcard(pizzaCards)
}

let drinkesCards = [
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_7.jpg',
        head: 'drink 15$',
        id : '14'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_6.jpg',
        head: 'drink 6$',
        id : '15'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_5.jpg',
        head: 'drink  12$',
        id : '16'
    },
    
];

let drinkesButton =  document.getElementById("drinkes-btn")
console.log(drinkesButton);
drinkesButton.onclick =function(){
    createcard(drinkesCards)
}



let allCards = [
    {
        id : '1',
        photo: 'https://images.pexels.com/photos/6605642/pexels-photo-6605642.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 15$'
    },
    {
        id : '2',
        photo: 'https://eman-m0hamed.github.io/resturant/images/blog-img-3.jpg',
        head: 'Steak 25$'
    },
    {
        id : '3',
        photo: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 20$'
    },
    {
        id : '4',
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_8.jpg',
        head: 'Steak 30$'
    },
    {
        id : '5',
        photo: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        head: 'Steak 25$'
    },
    {
        id : '6',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta1.jpg',
        head: 'Pasta 15$'
    },
    {
        id : '7',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta2.jpg',
        head: 'Pasta 25$'
    },
    {
        id : '8',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta5.jpg',
        head: 'Pasta 20$'
    },
    {
        id : '9',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta6.jpg',
        head: 'Pasta 30$'
    },
    {
        id : '10',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-1.jpg',
        head: 'Pizza 15$'
    },
    {
        id : '11',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza8.jpg',
        head: 'Pizza 25$'
    },
    {
        id : '12',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-2.jpg',
        head: 'Pizza 20$'
    },
    {
        id : '13',
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-7.jpg',
        head: 'Pizza 30$'
    },
    {
        id : '14',
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_7.jpg',
        head: 'drink 15$'
    },
    {
        id : '15',
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_6.jpg',
        head: 'drink 6$'
    },
    {
        id : '16',
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_5.jpg',
        head: 'drink  12$'
    },
];



allCards.forEach(function(){
    createcard(allCards)
})

let AllButton = document.getElementById("all-btn")

AllButton.onclick = function(){
    
    createcard(allCards)
}
//cards ends here
let ContentCart = document.getElementById('content-cards')
ContentCart.style='display:none;'
let cardsItem = JSON.parse(localStorage.getItem('cards')) || []

cardsItem.forEach(function(item){
  let element =    createCartItem(item)
    ContentCart.appendChild(element)
})


function createCartItem(item) {
    let divItems = document.createElement('div');
    divItems.classList.add('gap-3', 'align-items-center');
    divItems.style.zIndex = '0';

    let image = document.createElement('img');
    image.style.width = '100%';
    image.style.height = '250px';
    image.src = item.photo;
    divItems.appendChild(image);

    let headingCart = document.createElement('h2');
    headingCart.style.textAlign = 'center';
    headingCart.innerHTML = item.head;
    divItems.appendChild(headingCart);

    let amount = document.createElement('p');
    amount.innerHTML = item.amount;
    divItems.appendChild(amount);

    let divIcons = document.createElement('div');
    divIcons.classList.add('d-flex', 'gap-3', 'align-items-center');
    divItems.appendChild(divIcons);

    return divItems;
}

let cardnav = document.getElementById('cardnav');

cardnav.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default action (page reload)
    if (ContentCart.style.display === 'none') {
        ContentCart.style.display = 'block';  // Show the content
    } else {
        ContentCart.style.display = 'none';  // Hide the content
    }
});

document.addEventListener('click', function(event) {
    if (!ContentCart.contains(event.target) && event.target !== cardnav) {
        ContentCart.style.display = 'none';  // Hide the content if click outside ContentCart and not on cardnav
    }
});




    // <div class=" gap-3 align-items-center">
    //       <img src="https://eman-m0hamed.github.io/resturant/images/res_img_5.jpg" alt="" width="100px">
    //       <h2>stick 20$</h2>
    //       <div class="d-flex gap-3 align-items-center">
    //         <span id="increament" class="count-icon">+</span>
    //         <span id="decreament" class="count-icon">-</span>
    //       </div>
    //     </div>