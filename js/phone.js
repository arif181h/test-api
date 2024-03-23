const loadData=async(inputText)=>{
  const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
  
  const data =await res.json()
  const phones=data.data;
//   console.log(phones)
display(phones)

}

const buttonHandler=()=>{
  const inputField=document.getElementById('input-field')
  const inputText=inputField.value;
  console.log(inputText)
  loadData(inputText)
}

const display=(phones)=>{
    // console.log(phones)
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent='';
    const showAllcontainer=document.getElementById('show-all-container')
    if(phones.length>12){
      showAllcontainer.classList.remove('hidden')
    }
    else{
      showAllcontainer.classList.add('hidden')
    }
    phones=phones.slice(0,12)
    
    phones.forEach(phone => {
        // console.log(phone)
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
