var models = [
    {
        name: 'Volvo-XC60',
        img: 'img/Volvo-XC60.jpg',
        link: 'https://www.volvocars.com/tr/v/cars/xc60?gclsrc=aw.ds&&gclid=CjwKCAjwxZqSBhAHEiwASr9n9F8JtwDWXoL4N0JcRLa0xkglLZYW0D4prRG_PEcLRSVrwhMfAXQHZxoCAuAQAvD_BwE'
    },
    {
        name: 'Fiat500',
        img: 'img/Fiat500.jpg',
        link: 'https://otomobil.fiat.com.tr/fiat-500-500c-modelleri'
    },
    {
        name: 'Mercedes-benz',
        img: 'img/Mercedes-benz.jpg',
        link: 'https://www.mercedes-benz.com.tr/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE'
    }
]

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration: '2000',
    random: false,
}
//showSlide(index); // artık direk bunu çalıştırmana gerek yok
init(settings);


document.querySelector('.bi-arrow-left-circle-fill').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});


document.querySelector('.bi-arrow-right-circle-fill').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })

})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);

    })
})
//denemeler
document.querySelector('.card-img-top').addEventListener('mouseenter',function(){
    clearInterval(interval);
})
    
document.querySelector('.card-img-top').addEventListener('mouseleave',function(){
   init(settings);
})
// denemeler bitti
function init(set) {
    var prev;
   interval= setInterval(function () {
        if (settings.random) {
            //do-while sebebi random sayı üretilirken aynı sayı üretilmesin
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
            //random index üret
            //0-2 arası index üretir slaytCount =3 çünkü 
            //yani biz 0 1 2 istiyoruz random 2. küsüratlı gelebiliri floor ile alt tabana cekeriz

        } else {
            // yukarıda rastgele indexe göre rastgele resimler dönüyor çünkü random true
            // burda random false yani kesni sırasında 2 saniyede bir dönsün son resme gelince 2 sanyiye sonra 
            // tekrar ilk resme dönsün
            //artan index üret

            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
         
    }, set.duration);

}


function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].img);
    document.querySelector('.card-link').setAttribute('href', models[index].link);

}




