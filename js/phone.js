const loadData=async()=>{
  const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  const data =await res.json()
  const phones=data.data;
//   console.log(phones)
display(phones)

}

const buttonHandler=()=>{
  console.log('arif')
}

const display=(phones)=>{
    // console.log(phones)
    const phoneContainer=document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard=document.createElement('div')
        phoneCard.classList='card w-96 bg-base-100 shadow-xl'
        phoneCard.innerHTML=`<div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Show details</button>
          </div>
        </div>
      </div>`
      phoneContainer.appendChild(phoneCard)
    });
}

loadData()