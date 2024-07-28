document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/20220705_180453.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/20230329_133049.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/ACT-Roofing.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Brand-Works_Signage.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Brew_Dog_Built_Up_Brand_Works.jpeg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Career_Cabin_Signage.JPG',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Chef-Jono_2.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/corrugated.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Ewe_Move_Edit_2.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Farmer_Copleys_1.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Farmer_Copleys_4.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Farmer_Copleys_honey.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Featherstone_Lions.jpeg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Flying Tiger_Signage.jpeg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Hospital_Childrens.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/NewColds-Wakefield-facility-Oct-2021.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Van_Part Wrap.jpg',
        'http://localhost:10099/wp-content/themes/brand-works/assets/images/assets/images/our-work/load-more/Morris_Vauxhall_2.jpg',
    ];

    let currentIndex = 2;
    const itemsPerLoad = 8;

    const loadMore = document.getElementById('load-more');

    if (loadMore) {
        loadMore.addEventListener('click', () => {
            const gallery = document.getElementById('image-gallery');
            for (let i = 0; i < itemsPerLoad; i++) {
                if (currentIndex >= images.length) {
                    document.getElementById('load-more').style.display = 'none';
                    break;
                }
                const imgSrc = images[currentIndex];
                const imgDiv = document.createElement('div');
                imgDiv.className =
                    'col-span-1 overflow-hidden h-[260px] md:h-[416px]';
                imgDiv.innerHTML = `<img src="${imgSrc}" alt="Image" class="object-cover object-center w-full h-full hover:scale-110 duration-300 ease-in-out">`;
                gallery.appendChild(imgDiv);
                currentIndex++;
            }
        });
    }
});
