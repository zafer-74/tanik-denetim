# Tanık Denetim Saha Kaydı – iPhone Kurulum Rehberi

Bu klasör, uygulamanın bağımsız (PWA) sürümüdür. Bir web adresinde yayınlandıktan sonra iPhone'da
ana ekrana eklenir; tam ekran açılır ve internet olmadan da çalışır.

## Klasördeki dosyalar
| Dosya | Görevi |
|---|---|
| index.html | Uygulamanın kendisi (57 çeklist: 43 kaldırma-iletme, 8 basınçlı kap, 6 kazan; Excel ve F701-056 şablonları içinde) |
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

## 3. Kullanım notları
- **Kayıtlar telefonda saklanır.** Başka cihaza aktarmak veya güvenceye almak için ana ekrandaki
  **Tüm kayıtları yedekle (JSON)** düğmesini kullanın ve dosyayı OneDrive'a / Dosyalar'a kaydedin.
  Geri yüklemek için **Yedekten geri yükle**.
- **Excel ve Word dosyaları** "Paylaş / Dosyalara kaydet" ile iPhone paylaşım menüsünden
  Dosyalar, Mail, OneDrive, WhatsApp vb. yerlere gönderilir.
- Uygulamayı iPhone'dan silmek, içindeki kayıtları da siler. Silmeden önce yedek alın.
- Fotoğraflar küçültülerek saklanır (yaklaşık 150–230 KB). Çok sayıda fotoğraf telefonda yer kaplar;
  kapanan denetimleri yedekleyip silebilirsiniz.

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
