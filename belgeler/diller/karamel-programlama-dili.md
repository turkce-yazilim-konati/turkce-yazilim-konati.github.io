---
layout: temel
title: Karamel Programlama Dili
permalink: /diller/karamel-programlama-dili
---

# Karamel Programlama Dili

Karamel Programlama Dili, Türkçe tabanlı yazılım dilidir. Tüm Türkçe bilenlere yönelik geliştirilen, birçok amaç için kullanılabilir kodlama dili / programlama dili / yazılım dili olarak karşınızda.

Bilişim ve yazılım alanında, yeni başlayanlar ve eski topraklar için kullanımı kolay, öğrenmesi eğlenceli, işlek bir Türkçe tabanlı geliştirme ortamı sağlamak başta gelen amaçlarımızdır.

## Karamel
Gözde dillerde bulunan özelliklerden esinlenerek geliştirilmeye başlanan Karamel dili, bilinen iki işletim sistemi Windows ve MacOsX üzerinde sorunsuzca kullanılabilmektedir.

Kendine iye sanal düzenek üzerinde çalışır. Ayrıca birçok düzlemde bile çalıştırılabilir özelliktedir. Dinamik olarak değişken tanımlayabilir ve dahasını yapabilirsiniz.

Bütün dil, Rust Programlama Dili kullanılarak geliştirilmektedir. Kendi sanal düzeneği üzerinde çalışan dil olması yanısıra, WebAssembly yardımı ile ağ üzerinde de kullanılabilir.

## Kılavuzlar
Karamel programlama dilini kılavuzlar bölümünde yazılı olan bilgiler üzerinden öğrenebilir ve kullanmaya başlayabilirsiniz. Bilmeniz gereken tüm ayrıntıları anlaşılır biçimde sizlere sunuyoruz. Kılavuzlara gitmek için tıklayınız.

## İndirilebilir Durumda Mı?
Üzgünüz, henüz indirilebilir bir örneği yok. Ancak en kısa sürede ağ üzerinden çalışabilir bir sürümü yayınlamayı düşünüyoruz. Denemelik sürüme bir süreliğine şuradan erişebilirsiniz.

Canlı dene!: https://erhanbaris.github.io/karamel/karamelweb/src/www/

## Karamel Hangi Düzeyde?
Geliştirilme aşamasında olup emekleme sürecindedir.

Dört bir yandan gelecek düşünce, görüş ve kodlama gibi türlü yardımlara gerek duymaktadır.

Terim dağarcığında oturmamış konuları bulunmaktadır.

Sözdizimi üzerinde esnek tutum sergilense bile kömek yani yardım gerekmektedir.

## Karamel Hangi Ölçünlere Göre Geliştiriliyor?
Türkçe tabanlı yazılım dillerinde kullanılmak üzere oluşturulan kararlı ölçünler henüz bulunmuyor. Bu nedenle şimdilik böyle bir durum söz konusu değil. Ancak Türkçe Yazılım Konatı altında geliştirilmekte olan YAZILIMCA **ölçünlerini izliyor, uygun bulduğu yanlarını değerlendirip kullanıyor.

## Takıma Katıl
Karamel, Türkçe Yazılım Konatı altında birleşen kişilerle birlikte geliştiriliyor. Bu takımda yer almak için aşağıdaki yerlere başvurman yeterlidir.

Github'da Türkçe Yazılım Konatı'na katıl.
Discord'da Türkçe Yazılım Konatı'na katıl.
Facebook'ta Türkçe Yazılım Konatı'na katıl.

## Karamel Hakkında Bilmeniz Gerekenler
### Karamel Ne Tür Sanal Düzenek Kullanıyor?
KPD için Stack Machine adlı sanal makine mimarisini kullanıyoruz. Bunu kullanmamızın nedeni yeni özellikleri daha hızlı bir şekilde gömülü edebilmemizden dolayı. Diğer Register Machine yaklaşımına kıyasla daha yavaş olsa da ilk amacımız performanstan ziyade özellik ekleyip, stabil hâle getirmek.

### Stack Machine Ne Tür Çalışır?
Bu mimaride kullanılacak olan değişkenler bir yığın olarak üst üste istiflenir ve sonrasında LIFO (Last In First Out) yaklaşımına göre değişkenler istiflerden geri alınıp işleme tabii tutulur. Bu yapının avantajı kodlar en basit haline dönüştürülerek daha performanslı olarak çalışması sağlanmaktadır. Yazılımcının yazdığı yüksek seviyeli olan kodlar işlenerek ara kodlara dönüştürülmektedir. Dönüştürülen ara kodlar TPD sanal makinesinde çalıştırılmaktadır. Aslında Üst düzey yazmış olduğunuz kodlar ve sanal makinenin işledi kodlar olarak iki farklı programlama dili içermektedir.

### Başka diller kullanıyor mu?
Python, PHP, Ruby gibi oldukça gözde olan diller Stack Machine yaklaşımını kullanmaktadırlar.

## Temel Tipler
Tam Sayı (1024, 1_204, 2048)
Noktalı Sayı (1.234, 1_234.56789, 123.4e+4, 1_230.4e+4)
Yazı ("Merhaba Dünya", 'Merhaba Dünya')
Bool (doğru, yanlış)
Atom (:bilgi, :başarılı, :hatalı)
Liste ([1,2,3], [], [:kayıt_başarılı, 'Kullanıcı Bilgisi'])
Sözlük ({'ad':'erhan', 'soyad':'barış'})
```
Döngü
kayıt = 10
toplam = 0
döngü kayıt iken:
    gç::satıryaz(kayıt)
    kayıt -= 1
    toplam += 1
hataayıklama::doğrula(toplam, 10)
hataayıklama::doğrula(kayıt, 0)
sonsuz:
    gç::satıryaz("Sonsuza kadar devam")
Döngü kontrolü için devam, continue, kır, break.
Sorgulama
eğer a == b:  
    gç::satıryaz('a eşittir b')
yoksa a == c:  
    gç::satıryaz('a eşittir c')
yoksa:  
    gç::satıryaz('a hiçbirine eşit değil')
Fonksiyon tanımlama
fonk metod_1(a):
    gç::yaz(a)

fonk merhaba_dünya:
    gç::yaz('Merhaba dünya')

fonk metod_1(a):
    gç::yaz(a)

fonk faktoriyel(sayı):    
    eğer sayı==1 veya sayı==0:
        döndür 1
    yoksa:
        döndür sayı * faktoriyel(sayı - 1)

faktoriyel_sonucu = faktoriyel(10)
gç::satıryaz('faktoriyel 10 => ', faktoriyel_sonucu)
```