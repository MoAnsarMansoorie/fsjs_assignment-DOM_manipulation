// 1. Solution

document.querySelector(".crayons-card .crayons-subtitle-2").innerHTML = "iNeuron"
document.querySelector(".crayons-card .color-base-70").innerHTML = "I Write Code"


// 2. Solution

const lists = document.querySelectorAll(".as-imagegrid-item")
const results = []
lists.forEach((element)=>{
    const result = element.innerText.replace("Support", "")

    console.log(result)
})

// 3. Solution

const allFaq = document.querySelector(".accordion-homepage")

const section = document.createElement("section")
section.classList.add("parent")

const h3 = document.createElement("h3")
h3.innerText = "My New FAQ"

allFaq.appendChild(section)
section.appendChild(h3)


// 4. Solution

document.querySelector(".customer-support").firstElementChild.innerText = "+91999999999"

//5 . 

document.querySelector(".diwali-deals-product-sale-pro .diwali-deals-product-sale-btn").innerHTML = "checkout"

// 6.

const search = document.querySelector(".searchinput-wrapper___3YrvF .searchinput___19uW0")
search.addEventListener( "mouseover" , (event) => { 
    event.target.style.backgroundColor = "red";
}  )


// 7.

document.querySelector("#top-nav-search-input").value = "CSS selector"
document.querySelector(".homepage-hero .homepage-hero-search").click()

// 8.

let languages = document.querySelectorAll("#SIvCob a")
undefined
languages.forEach( (item, i) => {if(i%2==0) {
    item.remove();
}
} )

// 9.

document.querySelector(".display-heading-1").style.fontFamily = "monospace"
document.querySelector(".display-heading-1").style.color = "red"

// 10.

document.querySelector(".btn-cta-big .login-btn-text").style.backgroundColor = "red"

//                        or

let button = document.querySelector(".btn-cta-big .login-btn-text")
button.addEventListener( "mouseover" , (event) => {event.target.style.backgroundColor = "red"})


// 11.

ocument.querySelector(".logo").style.backgroundImage = "https://ineuron.ai/images/ineuron-logo.png"

// 12.

document.querySelector(".col-xl-4 .btn").style.backgroundColor = "blue"

// 13.

document.querySelector('.fl-heading-text').innerHTML = "JS BOOTCAMP"

// 14.

document.querySelector(" .HotDealsAll__Heading__2fIbe").style.fontSize = "80px"

// 15.

document.querySelector(".ps-title").style.textAlign = "right"

// 16.

document.querySelector(".section-title_title__VEDfK ").innerHTML = "Start With Scratch"

// 17.

document.querySelector(".btn-container a").innerHTML = new Date()

// 18.

document.querySelector(".p-footer").style.backgroundColor = "orange"
'orange'

// 19.

document.querySelector(".logo").src

// 20.

document.querySelector(".desc").style.color = "orange"
