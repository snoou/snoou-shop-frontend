const openSearch = document.getElementById('openSearch');
openSearch.addEventListener('click', () => {
  mobileSearch.classList.toggle('hidden');
}
);


const range = document.getElementById("range");
const price = document.getElementById("price");

function updatePrice() {
  let val = range.value;
  let min = range.min;
  let max = range.max;
  let percent = (val - min) / (max - min)

  let sliderWidth = range.offsetWidth

  price.style.left = (percent * sliderWidth) + "px"
  price.textContent = parseInt(val).toLocaleString("fa-IR") + "تومان"
}
updatePrice()
range.addEventListener("input", updatePrice);


const shop = {
  pajama: [
    {
      price: '200000',
      images: ['chosss/1-removebg-preview.png', 'chosss/2-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '350000',
      images: ['chosss/3-removebg-preview.png', 'chosss/4-removebg-preview.png'],
      info: 'لباس خواب'

    },
    {
      price: '150000',
      images: ['chosss/5-removebg-preview.png', 'chosss/6-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '150000',
      images: ['chosss/7-removebg-preview.png', 'chosss/8-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '200000',
      images: ['chosss/1-removebg-preview.png', 'chosss/2-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '350000',
      images: ['chosss/3-removebg-preview.png', 'chosss/4-removebg-preview.png'],
      info: 'لباس خواب'

    },
    {
      price: '150000',
      images: ['chosss/5-removebg-preview.png', 'chosss/6-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '350000',
      images: ['chosss/3-removebg-preview.png', 'chosss/4-removebg-preview.png'],
      info: 'لباس خواب'

    },
    {
      price: '150000',
      images: ['chosss/5-removebg-preview.png', 'chosss/6-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '150000',
      images: ['chosss/5-removebg-preview.png', 'chosss/6-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '150000',
      images: ['chosss/5-removebg-preview.png', 'chosss/6-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '200000',
      images: ['chosss/1-removebg-preview.png', 'chosss/2-removebg-preview.png'],
      info: 'لباس خواب'
    },
    {
      price: '150000',
      images: ['chosss/5-removebg-preview.png', 'chosss/6-removebg-preview.png'],
      info: 'لباس خواب'
    },
  ],
  dress: [],
  accessory: [],
  sports: []
};


function listShop() {
  const select = document.getElementById("shop");
  const container = document.getElementById("product-container");
  const maxPrice = parseInt(range.value);
  container.innerHTML = ''
  if (shop[select.value] != undefined && shop[select.value].length > 0) {
    const filterPrice = shop[select.value].filter(product => {
      return parseInt(product.price) <= maxPrice;
    })

    if (filterPrice.length > 0) {
      filterPrice.forEach(product => {

        const productDiv = document.createElement("div");
        productDiv.className = "flex flex-1 min-w-[200px] my-6 flex-col items-center";

        const innerDiv = document.createElement("div");
        innerDiv.className = "flex flex-col hover:shadow-md p-2 rounded-lg";

        const imgWrapper = document.createElement("div");
        imgWrapper.className = "relative w-44 h-56";

        const img1 = document.createElement("img");
        img1.className = "absolute top-0 left-0 w-full h-full object-contain block";
        img1.src = product.images[0];

        const img2 = document.createElement("img");
        img2.className = "absolute top-0 left-0 w-full h-full object-contain hidden";
        img2.src = product.images[1];

        imgWrapper.addEventListener("mouseenter", () => {
          img1.classList.add("hidden");
          img2.classList.remove("hidden");
        });
        imgWrapper.addEventListener("mouseleave", () => {
          img1.classList.remove("hidden");
          img2.classList.add("hidden");
        });

        const info = document.createElement('p')
        info.textContent = product.info
        info.className = 'text-center opacity-70 font-semibold my-4'

        const button = document.createElement("a");
        button.href = '#'
        button.className =
          "mt-2 p-2 px-4 flex items-center gap-2 justify-center text-pink-600 font-extrabold rounded-[10px] bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 hover:from-pink-500 hover:via-pink-400 hover:to-pink-300 hover:text-white transition-colors ease-in-out duration-200";
        button.textContent = `${parseInt(product.price).toLocaleString('fa-IR')} تومان`;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "w-5 h-5");
        svg.setAttribute("viewBox", "0 0 24 24");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "currentColor");
        path.setAttribute(
          "d",
          "M7 18a2 2 0 1 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 18M7.2 14h9.45a2.5 2.5 0 0 0 2.42-1.87l1.5-6A1.5 1.5 0 0 0 19.12 4H6.3l-.3-1A1.5 1.5 0 0 0 4.55 2H3a1 1 0 0 0 0 2h1.2l3 9a2.5 2.5 0 0 0 2 1"
        );
        svg.appendChild(path);
        button.appendChild(svg);

        imgWrapper.appendChild(img1);
        imgWrapper.appendChild(img2);
        innerDiv.appendChild(imgWrapper);
        innerDiv.appendChild(info)
        innerDiv.appendChild(button);
        productDiv.appendChild(innerDiv);
        container.appendChild(productDiv);
      });
    } else {
      container.innerHTML = '<img src="gif/____-ezgif.com-video-to-gif-converter.gif" alt="هیچی"> '

    }
  } else {
    container.innerHTML = '<img src="gif/____-ezgif.com-video-to-gif-converter.gif" alt="هیچی"> '

  }
}

document.getElementById("shop").addEventListener('change', listShop)
range.addEventListener("input", listShop)
listShop()