# Domain Etkinleştirme Rehberi

Domain'inizin aktif olması için DNS kayıtlarını eklemeniz ve Vercel'in doğrulamasını beklemeniz gerekiyor.

---

## 🚀 Adım Adım Domain Etkinleştirme

### ADIM 1: DNS Kayıtlarını Ekle (Domain Sağlayıcıda)

1. **Domain sağlayıcınızın yönetim paneline** giriş yapın
2. **DNS ayarları** bölümüne gidin
3. **İki kayıt ekleyin:**

   **A Record (kenningford.com için):**
   - Tip: `A`
   - Name: `@` (veya boş)
   - Value: `216.198.79.1`
   - TTL: 3600

   **CNAME Record (www.kenningford.com için):**
   - Tip: `CNAME`
   - Name: `www`
   - Value: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - TTL: 3600

4. **Kaydedin**

---

### ADIM 2: DNS Yayılımını Bekle

- **Süre:** 1-24 saat (genelde 1-2 saat yeterli)
- **Kontrol:** https://dnschecker.org
  - Domain: `kenningford.com`
  - Record Type: `A`
  - Tüm sunucularda `216.198.79.1` görünmeli

---

### ADIM 3: Vercel Otomatik Doğrulama

DNS kayıtları yayıldıktan sonra **Vercel otomatik olarak:**
1. ✅ Domain'i doğrular
2. ✅ SSL sertifikası ekler (5-10 dakika)
3. ✅ Domain'i aktif eder

**Manuel bir şey yapmanıza gerek YOK!** Vercel otomatik yapar.

---

## 📊 Vercel'de Durum Kontrolü

### Vercel Dashboard'da Kontrol

1. **Vercel Dashboard** → Projen → **Settings** → **Domains**
2. Domain durumunu kontrol et:

   - ❌ **"Invalid Configuration"** = DNS kayıtları henüz yayılmadı veya yanlış
   - ⏳ **"Pending"** = DNS yayılıyor, bekleniyor
   - ✅ **"Valid Configuration"** = Domain aktif ve çalışıyor!

---

## 🔍 Domain Durumunu Kontrol Etme

### 1. DNS Yayılımını Kontrol

**dnschecker.org ile:**
1. https://dnschecker.org adresine git
2. Domain: `kenningford.com` yaz
3. Record Type: `A` seç
4. "Search" tıkla
5. Tüm sunucularda `216.198.79.1` görünmeli

### 2. Vercel Dashboard'da Kontrol

1. Vercel → Settings → Domains
2. Domain'in yanında:
   - ✅ Yeşil tik = Aktif
   - ⚠️ Sarı uyarı = Bekleniyor
   - ❌ Kırmızı hata = Sorun var

### 3. Tarayıcıda Test

1. `https://kenningford.com` adresine git
2. Site açılıyorsa = ✅ Aktif!
3. SSL hatası varsa = SSL henüz eklenmedi (5-10 dakika bekle)

---

## ⏱️ Süreç Ne Kadar Sürer?

| Adım | Süre |
|------|------|
| DNS kayıtlarını ekleme | 5 dakika |
| DNS yayılımı | 1-24 saat (genelde 1-2 saat) |
| Vercel doğrulama | 5-10 dakika (DNS yayıldıktan sonra) |
| SSL sertifikası | 5-10 dakika (otomatik) |
| **TOPLAM** | **1-2 saat** (genelde) |

---

## ✅ Domain Aktif Olduğunda

Domain aktif olduğunda:
- ✅ Vercel Dashboard'da "Valid Configuration" görünür
- ✅ `https://kenningford.com` çalışır
- ✅ `https://www.kenningford.com` çalışır (otomatik yönlendirme)
- ✅ SSL sertifikası aktif (yeşil kilit ikonu)

---

## 🐛 Sorun Giderme

### DNS Yayılmadı (24 saatten fazla)

1. **DNS kayıtlarını kontrol et:**
   - A Record doğru mu? (`216.198.79.1`)
   - CNAME doğru mu? (`f51e7d2acb0e6ff3.vercel-dns-017.com.`)
   - CNAME'in sonunda nokta var mı?

2. **Eski kayıtları sil:**
   - Daha önce farklı DNS kayıtları varsa silin

3. **Domain sağlayıcının destek ekibine sor**

### Vercel Hala "Invalid" Gösteriyor

1. **DNS yayılımını kontrol et** (dnschecker.org)
2. **1-2 saat bekle** (DNS yayılımı zaman alabilir)
3. **Vercel Dashboard'da "Refresh"** veya sayfayı yenile
4. **DNS kayıtlarının doğru olduğundan emin ol**

### SSL Sertifikası Gelmedi

1. **Vercel Dashboard** → Settings → Domains → SSL sekmesi
2. **"Redeploy"** veya **"Retry"** butonuna tıkla
3. **5-10 dakika bekle**

### Site Açılmıyor

1. **DNS yayılımını kontrol et** (dnschecker.org)
2. **Vercel Dashboard'da deployment durumunu kontrol et**
3. **Tarayıcı cache'ini temizle** (Ctrl+F5)
4. **Farklı tarayıcıda dene**

---

## 📝 Özet Checklist

- [ ] DNS kayıtlarını domain sağlayıcıya ekledim
- [ ] DNS yayılımını kontrol ettim (dnschecker.org)
- [ ] Vercel Dashboard'da domain durumunu kontrol ettim
- [ ] "Valid Configuration" görünüyor
- [ ] Site açılıyor (`https://kenningford.com`)
- [ ] SSL aktif (yeşil kilit ikonu)

---

## 🎯 Sonuç

**Domain etkinleştirme otomatiktir!** 

Yapmanız gereken tek şey:
1. ✅ DNS kayıtlarını eklemek
2. ⏳ Beklemek (1-2 saat)
3. ✅ Vercel otomatik olarak aktif eder

**Manuel bir "etkinleştirme" butonu yok!** DNS kayıtları doğru eklendikten sonra Vercel otomatik yapar.

---

## 📞 Yardım

- **Vercel Docs:** https://vercel.com/docs/concepts/projects/domains
- **Vercel Support:** https://vercel.com/support
- **DNS Checker:** https://dnschecker.org
