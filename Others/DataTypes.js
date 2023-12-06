// VERİ TİPLERİ

// İlkel Veri Tipleri (Primitive)



// SAYILAR --- 2 TANE 
// Tam Sayılar --- Integer ---(sıfır dahil negatif ve pozitif) --- Örnek: -3, -2, -1, 0, 1, 2, 3 
// Ondalıklı Sayılar --- Float --- Decimal --- Örnek: -3.4, 0.0, 2.2
// Integer --- Float --- Decimal

// HARF ÖBEĞİ --- 1 TANE 
// String Veri Tipleri
// Tek tırnak, çift tırnak veya ters tırnak (backtick) arasında yer alan, bir veya daha fazla karakterden oluşan metinsel değerlerdir (Her türlü karakteri içerisinde barındırabilir.).
// Örnek:
// "a";
// "Asabeneh";
// 'SalihYurek';
// "Turkey-ATATÜRK";
// 'JavaScipt güzel bir programlama dilidir';
// "Öğrenmeyi Seviyorum";
// 'Unutma, ayrıca bir ters tırnak kullanarak bir dize de oluşturabiliriz';
// "(string veri türü, bir karakter kadar küçük, sayfalar kadar büyük olabilir)"

// BOLL VERİ TİPİ --- 1 TANE 
// true;
// false;


// TANIMSIZ 
// let
// JavaScript'te bir değişkene değer atamaz isek, değeri undefined olarak alır. Buna ek olarak, bir fonksiyon hiçbir şey döndürmüyorsa, döndereceği tanım 'undefined' olur.

let ismim = 56;
console.log(ismim);


// NULL --- BOŞ
// JavaScript'te 'null' boş bir değer anlamına gelir.
let bosDeger = null;

// VERİ TÜRLERİNİ KONTROL ETME
// Bir değişkenin veri türünü kontrol etmek için typeof operatörünü kullanırız
console.log(typeof "Asabeneh");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

console.log('\n\n\n\n') 
console.log(3 == 3) 

const now = new Date()

let num = prompt('Enter number');