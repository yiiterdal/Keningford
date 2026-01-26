# DNS Kayıtları Ekleme - Adım Adım

Görüntüdeki panelden DNS kayıtlarını eklemek için:

---

## 🎯 ADIM 1: Custom DNS Records'a Git

1. **"Custom DNS Records"** kartına tıkla (yeşil/teal renkli kart)
2. Veya üst menüden **"Dns Tools"** sekmesine tıkla
3. **"Custom DNS Records"** seçeneğini bul

---

## 📝 ADIM 2: A Record Ekle (kenningford.com için)

1. **"Add Record"** veya **"Create Record"** butonuna tıkla
2. **A Record** seç:
   - **Type:** `A`
   - **Name/Host:** `@` (veya boş bırak)
   - **Value/IP:** `216.198.79.1`
   - **TTL:** `3600` (veya otomatik)
3. **Save** veya **Add** butonuna tıkla

---

## 📝 ADIM 3: CNAME Record Ekle (www.kenningford.com için)

1. Tekrar **"Add Record"** veya **"Create Record"** butonuna tıkla
2. **CNAME Record** seç:
   - **Type:** `CNAME`
   - **Name/Host:** `www`
   - **Value/Target:** `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - ⚠️ **ÖNEMLİ:** Sonunda nokta var! (`.`)
   - **TTL:** `3600` (veya otomatik)
3. **Save** veya **Add** butonuna tıkla

---

## ✅ ADIM 4: Kayıtları Kontrol Et

Eklediğiniz kayıtlar listede görünmeli:

1. **A Record:**
   - Name: `@` (veya boş)
   - Type: `A`
   - Value: `216.198.79.1`

2. **CNAME Record:**
   - Name: `www`
   - Type: `CNAME`
   - Value: `f51e7d2acb0e6ff3.vercel-dns-017.com.`

---

## ⏱️ ADIM 5: Bekle ve Kontrol Et

1. **1-2 saat bekle** (DNS yayılımı için)
2. **DNS yayılımını kontrol et:**
   - https://dnschecker.org
   - Domain: `kenningford.com`
   - Record Type: `A`
   - Tüm sunucularda `216.198.79.1` görünmeli

3. **Vercel Dashboard'da kontrol et:**
   - Vercel → Settings → Domains
   - Domain durumu "Valid Configuration" olmalı

---

## 🎨 Panel Görünümü

Panelde şunları görebilirsiniz:
- Mevcut DNS kayıtlarının listesi
- "Add Record" veya "+" butonu
- Her kayıt için düzenleme/silme seçenekleri

---

## ⚠️ Önemli Notlar

1. **CNAME değerinin sonundaki nokta:** 
   - ✅ Doğru: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - ❌ Yanlış: `f51e7d2acb0e6ff3.vercel-dns-017.com` (nokta yok)

2. **A Record için @ işareti:**
   - Bazı panellerde `@` yerine boş bırakmanız gerekebilir
   - Her iki durumda da root domain'i (kenningford.com) temsil eder

3. **Eski kayıtları silin:**
   - Daha önce farklı DNS kayıtları varsa, onları silin
   - Sadece Vercel'den aldığınız kayıtlar kalmalı

---

## 🐛 Sorun Giderme

### "Custom DNS Records" Bulamıyorum
- Üst menüden **"Dns Tools"** sekmesine tıkla
- Veya **"My Account"** → **"DNS Management"** bölümüne bak

### Kayıt Eklenmiyor
- Tüm alanların doldurulduğundan emin ol
- CNAME değerinin sonunda nokta olduğundan emin
- Sayfayı yenile ve tekrar dene

### DNS Yayılmadı
- 24 saat bekle (genelde 1-2 saat yeterli)
- dnschecker.org'dan kontrol et
- Domain sağlayıcının destek ekibine sor

---

## 📞 Yardım

DNS kayıtlarını ekledikten sonra:
- ✅ 1-2 saat bekle
- ✅ Vercel otomatik olarak domain'i doğrular
- ✅ Site aktif olur!

**Detaylı rehber:** `DNS_AYARLARI.md` dosyasında.
