
// console.log(1 && 3); 
// console.log(1 && 0);
// console.log([] && 1);
// console.log(0 || false);
// console.log(0 || true);
// console.log(1 || true);
//if/else - ternary
// kullanıcıdan yaş değeri alan ve yaş >= 18 ise "You are ... years old and eligible to vote.", aksi halde "You are ... years old and not eligible to vote." uyarısı veren kodu if/else ve ternary kullanarak yazınız
// let yas =  19
// if(yas >18){
//     console.log(`You are ${yas} years old and eligible to vote. `);
// }else{
//     console.log(`You are ${yas} years old and not eligible to vote.`)
// }
// let result = yas >18 ? `You are ${yas} years old and eligible to vote. ` : `You are ${yas} years old and not eligible to vote.` ;
// console.log(result);

//functions
// kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

//  function yasHesapla(name,birthday) {
//     let tarih = new Date().getFullYear();

//     let hesapla = tarih - birthday

//     return (`${name}, ${hesapla}`)
// }
// console.log(yasHesapla("kerim", 1987))

// let x = ((name,birthday)=>{
//     let tarih = new Date().getFullYear();

//     let hesapla = tarih - birthday

//     return (`${name}, ${hesapla}`)

// })

// console.log(x("kerim", 1987));


//Array iterators
//  isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
//  const isimler = [
//   'Ahmet',
//   'mehmet',
//   'ismet',
//   'SAFFET',
//   'Can',
//   'Canan',
//   'Cavidan',
// ];

// let name= isimler.map((isim)=>{
// return isim.toLowerCase()
// })

// console.log(name)

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
// const fiyatlar = [100, 250, 50, 89];

// let fiyat= fiyatlar.filter((fiyat)=> fiyat < 250)

// console.log(fiyat)


//  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeleyiniz.
// const kisiler = [
//   {
//     name: 'Ahmet',
//     surname: 'Can',
//     job: 'developer',
//     age: 30,
//   },
//   {
//     name: 'Mehmet',
//     surname: 'Baki',
//     job: 'tester',
//     age: 35,
//   },
//   {
//     name: 'Nur',
//     surname: 'Ersan',
//     job: 'team lead',
//     age: 40,
//   },
//   {
//     name: 'Merve',
//     surname: 'Veli',
//     job: 'developer',
//     age: 26,
//   }
// ];

// let person = kisiler.filter(kisi => kisi.age<33).map(i => i.name);
// console.log(person)




// Spread
// araclar ve otomobiller dizilerini başka bir dizide birleştiriniz
// const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
// const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];

// console.log([...araclar , ...otomobiller])




// calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };

// let newObj ={...calisan, yas:35}
// console.log(newObj);



//Destructuring
// car objesinden brand, model,name,surname propertilerini destruct ediniz
// const car = {
//     brand: 'BMW',
//     model: 1990,
//     engine: 1.6,
//     owner:{
//       name: 'Ahmet',
//       surname: 'Can',
//   },
// };

// const{brand, model, owner:{name, surname}, owner, engine} = car;
// console.log(brand, model,name,surname, owner)






// Data fetching
// aşağıdaki url'den data çekerek first name değerini console'da gösteriniz
// let url= 'https://randomuser.me/api/'


const getApi = (async()=>{
    const url = "https://randomuser.me/api/";

    const response = await fetch(url);
    const data = await response.json();


console.log(data.results[0].name.first)



})

getApi();
