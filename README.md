# Tanık Denetim Saha Kaydı – iPhone Kurulum Rehberi

Bu klasör, uygulamanın bağımsız (PWA) sürümüdür. Bir web adresinde yayınlandıktan sonra iPhone'da
ana ekrana eklenir; tam ekran açılır ve internet olmadan da çalışır.

## Klasördeki dosyalar
| Dosya | Görevi |
|---|---|
| index.html | Uygulamanın kendisi (61 çeklist: 43 kaldırma-iletme, 8 basınçlı kap, 6 kazan, 4 asansör periyodik kontrol – EK-5/A, EK-5/B, EK-6/A, EK-6/B; Excel ve F701-056 şablonları içinde) |
| sw.js | Çevrimdışı çalışmayı sağlar |
| manifest.webmanifest | Uygulama adı, simge ve tam ekran ayarı |
| exceljs.min.js, jszip.min.js | Excel ve Word dosyası üretimi (internet gerekmeden) |
| icon-180/192/512.png | Ana ekran simgeleri |

Dosyaların hepsi aynı klasörde, aynı adlarla yüklenmelidir.

## 1. Yayınlama (bir kez yapılır)

Uygulama `https://` ile başlayan bir adreste çalışmalıdır (çevrimdışı çalışma yalnızca güvenli adreslerde etkinleşir).

### Seçenek A – GitHub Pages (ücretsiz)
1. github.com'da ücretsiz hesap açın ve giriş yapın.
2. Sağ üstteki **+** → **New repository**. Ad: `tanik-denetim`, görünürlük: **Public** → **Create repository**.
3. Açılan sayfada **uploading an existing file** bağlantısına tıklayın, bu klasördeki tüm dosyaları sürükleyip bırakın → **Commit changes**.
4. Depoda **Settings** → soldan **Pages** → *Source*: **Deploy from a branch**, *Branch*: **main**, klasör **/(root)** → **Save**.
5. 1–2 dakika sonra adres sayfanın üstünde görünür: `https://KULLANICIADI.github.io/tanik-denetim/`

Not: Ücretsiz planda depo herkese açıktır. Depoda yalnızca boş çeklist şablonları bulunur; denetim kayıtları
hiçbir zaman sunucuya gitmez, her kullanıcının kendi telefonunda kalır.

### Seçenek B – Netlify (sürükle-bırak)
1. app.netlify.com adresinde ücretsiz hesap açın.
2. **Add new site** → **Deploy manually**; bu klasörü sayfaya sürükleyip bırakın.
3. Verilen `https://....netlify.app` adresini kullanın (Site settings'ten adı değiştirilebilir).

### Seçenek C – Kurumun web sunucusu
Klasörü sunucuda bir dizine (örn. `https://kurum.gov.tr/tanik/`) olduğu gibi kopyalayın. HTTPS zorunludur.

## 2. iPhone'a kurulum (her uzman kendi telefonunda)
1. Adresi **Safari** ile açın (Chrome veya başka tarayıcıyla değil).
2. Alttaki **Paylaş** düğmesine (kare içinde yukarı ok) dokunun.
3. Listeyi aşağı kaydırıp **Ana Ekrana Ekle**'yi seçin → **Ekle**.
4. Ana ekrandaki **Tanık Denetim** simgesiyle açın. Bundan sonra internet olmadan da çalışır.

## 2a. Android telefona kurulum
1. Adresi **Chrome** ile açın.
2. Sağ üstteki **⋮** menüsü → **Uygulamayı yükle** (bazı telefonlarda **Ana ekrana ekle**) → **Yükle**.
3. Uygulama ana ekranda ve uygulama listesinde görünür; tam ekran açılır ve internet olmadan da çalışır.
   Excel / Word / JSON dosyaları Android paylaşım menüsüyle Drive, OneDrive, Gmail, WhatsApp vb. yerlere gönderilir.

## 2b. Windows bilgisayara kurulum (masaüstü uygulaması)
1. Adresi **Microsoft Edge** veya **Google Chrome** ile açın.
2. Adres çubuğunun sağındaki **Uygulamayı yükle** simgesine tıklayın
   (görünmüyorsa: **⋯ menü → Uygulamalar → Bu siteyi uygulama olarak yükle**) → **Yükle**.
3. Uygulama kendi penceresinde açılır; Başlat menüsünde ve isterseniz masaüstünde / görev çubuğunda kısayolu olur.
   İnternet olmadan da çalışır. Güncellemeler için ana ekrandaki **Güncellemeleri denetle** düğmesini kullanın.

### Yan yana iki denetim (yalnız bilgisayar)
Ana ekrandaki **Yan yana iki denetim** düğmesi ekranı ikiye böler; her bölmede ayrı bir denetim açılıp doldurulabilir
(şifre bir kez sorulur). Aynı denetim iki bölmede birden açılırsa üstte uyarı çıkar. **Tek görünüme dön** ile normal
görünüme geçilir; **Çıkış** her iki bölmeyi kaydedip uygulamayı kilitler.

### Telefon ↔ bilgisayar arasında denetim aktarma
Kayıtlar her cihazın kendi içinde saklanır; aktarım JSON yedeğiyle yapılır.
1. **Telefonda:** denetimi açın → **Özet** sekmesi → JSON yedeği (veya ana ekranda **Tüm kayıtları yedekle**)
   → Paylaş ile OneDrive'a / e-postaya kaydedin.
2. **Bilgisayarda:** ana ekranda **Yedekten geri yükle** → JSON dosyasını seçin. Denetim fotoğraflarıyla birlikte gelir;
   düzeltmeleri yapın, Excel / F701-056 Word çıktısını alın (dosyalar **İndirilenler** klasörüne kaydedilir).
3. Düzeltilmiş hâli telefona geri almak için bilgisayarda yeniden JSON yedeği alıp telefonda **Yedekten geri yükle** yapın.
- Aynı denetim iki cihazda da varsa **son düzenlenen** sürüm korunur: cihazdaki kayıt yedekteki kayıttan daha yeniyse
  o kayıt atlanır ve uygulama bunu bildirir. Bu sayede eski bir yedek yeni düzeltmelerin üzerine yazılmaz.

## 3. Kullanım notları
- **Kayıtlar telefonda saklanır.** Başka cihaza aktarmak veya güvenceye almak için ana ekrandaki
  **Tüm kayıtları yedekle (JSON)** düğmesini kullanın ve dosyayı OneDrive'a / Dosyalar'a kaydedin.
  Geri yüklemek için **Yedekten geri yükle**.
- **Excel ve Word dosyaları** "Paylaş / Dosyalara kaydet" ile iPhone paylaşım menüsünden
  Dosyalar, Mail, OneDrive, WhatsApp vb. yerlere gönderilir.
- Uygulamayı iPhone'dan silmek, içindeki kayıtları da siler. Silmeden önce yedek alın.
- Fotoğraflar küçültülerek saklanır (yaklaşık 150–230 KB). Çok sayıda fotoğraf telefonda yer kaplar;
  kapanan denetimleri yedekleyip silebilirsiniz.

## 3b. Uygulama şifresi (cihaz kilidi)
- İlk açılışta her kullanıcı kendi cihazı için **en az 6 karakterli** bir şifre belirler. Denetim kayıtları ve fotoğraflar
  cihazda bu şifreyle **şifrelenerek** (AES-256) saklanır; mevcut kayıtlar şifre belirlenirken otomatik şifrelenir.
- Uygulama her açılışta ve **5 dakikadan uzun** arka planda kaldıktan sonra şifre ister. Ana ekrandaki **Çıkış**
  düğmesiyle (ana ekranın sağ üstünde ve altında **Çıkış**) hemen çıkılır, **Şifreyi değiştir** ile şifre değiştirilebilir.
- Şifre yalnızca o cihazdadır ve **kurtarılamaz**. Unutulursa giriş ekranındaki **Şifremi unuttum** ile o cihazdaki
  kayıtlar silinip yeni şifre belirlenir; kayıtlar ancak daha önce alınmış JSON yedeğinden geri gelir. Düzenli yedek alın.
- JSON yedek dosyası şifresizdir; OneDrive vb. güvenli bir yerde saklayın.

## 4. Güncelleme
1. Yeni `index.html` (ve değişen diğer dosyaları) aynı yere yükleyin.
2. `sw.js` dosyasının ilk satırlarındaki `SURUM` değerini artırın (örn. `tanik-v1` → `tanik-v2`) ve yükleyin.
3. Telefonlar uygulamayı internet varken açtığında yeni sürümü alır. Hemen almak için ana ekranın üstündeki
   **Güncellemeleri denetle** düğmesine dokunun (internet gerekir); yanında yüklü sürüm numarası görünür.
   Kayıtlar güncellemeden etkilenmez.

## 5. Yapay zekâ (isteğe bağlı)
Uygulamadaki yapay zekâ özellikleri:
- **Her maddede "YZ" düğmesi:** ham not ve fotoğraftan resmi bulgu metni, "Neye bakmalıyım?" önerisi, maddeye özel soru.
- **Özet sekmesi:** kanaat taslağı ve sonuç önerisi.
- **Rapor sekmesi:** F701-056 yorumlarını resmi dile çevirme, genel değerlendirme taslağı.
- **Üst köşedeki yıldız düğmesi:** formun tamamı hakkında asistanla sohbet.

Kurulum:
1. console.anthropic.com adresinde hesap açın, ödeme yöntemi ekleyin ve **API Keys** bölümünden bir anahtar oluşturun.
2. Uygulamada ana ekrandaki **Yapay zekâ ayarları**'na anahtarı yapıştırın → **Bağlantıyı dene** → **Kaydet**.

Notlar:
- Anahtar yalnızca o telefonda saklanır; her kullanıcı kendi anahtarını girer. Anahtarı başkalarıyla paylaşmayın.
- Kullanım ücreti API hesabına yansır. Haiku modeli en ekonomik seçenektir.
- Yapay zekâ internet gerektirir; çevrimdışıyken diğer tüm özellikler çalışmaya devam eder.
- Yapay zekâ yanıtları hatalı olabilir; rapora geçmeden önce kontrol edin.

## 6. Asansör periyodik kontrol çeklistleri (7.A)
Ana ekranda **7.A Asansörler (Periyodik Kontrol)** grubu altında dört çeklist bulunur:
- **7.A.1.A / 7.A.1.B** – Elektrik tahrikli asansörler, Asansör İşletme, Bakım ve Periyodik Kontrol Yönetmeliği EK-5 ve EK-5/A (TS EN 81-1+A3 & TS EN 81-80) / EK-5/B (TS EN 81-20)
- **7.A.2.A / 7.A.2.B** – Hidrolik tahrikli asansörler, EK-6 ve EK-6/A (TS EN 81-2+A3 & TS EN 81-80) / EK-6/B (TS EN 81-20)

Bölüm C'de listenin her ana maddesi bir satırdır; "Tamamını oku" ile kusur sınıfı, kontrol türü, örnekleme önceliği,
tanıkta doğrulanacak husus ve yönetmelikteki alt kriterlerin tam metni açılır. İzlenmeyen maddeler **G (Gözlenmedi)** işaretlenir.
