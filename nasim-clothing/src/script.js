 const openSearch = document.getElementById('openSearch');
        const mobileSearch = document.getElementById('mobileSearch');
        openSearch?.addEventListener('click', () => mobileSearch.classList.toggle('hidden'));

        const range = document.getElementById("range");
        const price = document.getElementById("price");
        function updatePrice() {
            let val = +range.value, min = +range.min, max = +range.max;
            let percent = (val - min) / (max - min);
            let sliderWidth = range.offsetWidth;
            price.style.left = (percent * sliderWidth) + "px";
            price.textContent = val.toLocaleString("fa-IR") + " تومان";
        }
        range.addEventListener("input", () => { updatePrice(); listShop(); });
        updatePrice();

        const shop = {
            pajama: [
                { price: '200000', images: ['chosss/1.png', 'chosss/2.png'], info: 'لباس خواب' },
                { price: '350000', images: ['chosss/3.png', 'chosss/4.png'], info: 'لباس خواب' },
                { price: '150000', images: ['chosss/5.png', 'chosss/6.png'], info: 'لباس خواب' },
            ],
            dress: [],
            accessory: [],
            sports: []
        };

        function listShop() {
            const select = document.getElementById("shop");
            const container = document.getElementById("product-container");
            const maxPrice = parseInt(range.value);
            container.innerHTML = '';

            const items = shop[select.value] || [];
            const filtered = items.filter(p => parseInt(p.price) <= maxPrice);

            if (!filtered.length) {
                container.innerHTML = '<div class="col-span-full text-center text-gray-400">محصولی یافت نشد</div>';
                return;
            }

            filtered.forEach(product => {
                const div = document.createElement("div");
                div.className = "flex flex-col items-center p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition";

                const imgWrapper = document.createElement("div");
                imgWrapper.className = "relative w-32 h-40 sm:w-40 sm:h-52 mb-3";

                const img1 = document.createElement("img");
                img1.src = product.images[0];
                img1.className = "absolute inset-0 w-full h-full object-contain transition";
                const img2 = document.createElement("img");
                img2.src = product.images[1];
                img2.className = "absolute inset-0 w-full h-full object-contain hidden";

                imgWrapper.addEventListener("mouseenter", () => {
                    img1.classList.add("hidden");
                    img2.classList.remove("hidden");
                });
                imgWrapper.addEventListener("mouseleave", () => {
                    img1.classList.remove("hidden");
                    img2.classList.add("hidden");
                });

                imgWrapper.append(img1, img2);
                div.appendChild(imgWrapper);

                const info = document.createElement("p");
                info.textContent = product.info;
                info.className = "text-sm text-gray-600 mb-2";
                div.appendChild(info);

                const btn = document.createElement("button");
                btn.className = "flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-200 to-pink-50 text-pink-600 font-bold hover:from-pink-500 hover:to-pink-400 hover:text-white transition";
                btn.textContent = parseInt(product.price).toLocaleString('fa-IR') + " تومان";
                div.appendChild(btn);

                container.appendChild(div);
            });
        }

        document.getElementById("shop").addEventListener("change", listShop);
        listShop();