# DNS Ayarları - Kenningford.com

Vercel'den aldığınız DNS kayıtlarını domain sağlayıcınıza eklemeniz gerekiyor.

## 📋 Gerekli DNS Kayıtları

### 1. Root Domain (kenningford.com)
- **Tip:** A Record
- **Name:** `@` (veya boş bırak)
- **Value:** `216.198.79.1`
- **TTL:** 3600 (veya otomatik)

### 2. www Subdomain (www.kenningford.com)
- **Tip:** CNAME Record
- **Name:** `www`
- **Value:** `f51e7d2acb0e6ff3.vercel-dns-017.com.`
- **TTL:** 3600 (veya otomatik)

---

## 🔧 Domain Sağlayıcıya Göre Adımlar

### Cloudflare

1. **Cloudflare Dashboard** → Domain seç → **DNS** sekmesi
2. **"Add record"** tıkla
3. **A Record ekle:**
   - Type: `A`
   - Name: `@` (veya boş)
   - IPv4 address: `216.198.79.1`
   - Proxy status: **DNS only** (gri bulut) - ÖNEMLİ!
   - Save
4. **CNAME Record ekle:**
   - Type: `CNAME`
   - Name: `www`
   - Target: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - Proxy status: **DNS only** (gri bulut)
   - Save

### Namecheap

1. **Namecheap Dashboard** → **Domain List** → Domain seç
2. **"Advanced DNS"** sekmesi
3. **"Add New Record"** tıkla
4. **A Record ekle:**
   - Type: `A Record`
   - Host: `@`
   - Value: `216.198.79.1`
   - TTL: `Automatic` (veya 3600)
   - Save
5. **CNAME Record ekle:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - TTL: `Automatic` (veya 3600)
   - Save

### GoDaddy

1. **GoDaddy Dashboard** → **My Products** → Domain seç
2. **"DNS"** sekmesi
3. **"Add"** butonuna tıkla
4. **A Record ekle:**
   - Type: `A`
   - Name: `@`
   - Value: `216.198.79.1`
   - TTL: `600` (veya 3600)
   - Save
5. **CNAME Record ekle:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - TTL: `600` (veya 3600)
   - Save

### Google Domains

1. **Google Domains Dashboard** → Domain seç
2. **"DNS"** sekmesi
3. **"Custom records"** bölümünde **"Manage custom records"**
4. **A Record ekle:**
   - Host name: `@`
   - Type: `A`
   - Data: `216.198.79.1`
   - TTL: `3600`
   - Save
5. **CNAME Record ekle:**
   - Host name: `www`
   - Type: `CNAME`
   - Data: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - TTL: `3600`
   - Save

### Türkiye'deki Sağlayıcılar (Turhost, Natro, vs.)

1. **Domain yönetim paneline** gir
2. **"DNS Ayarları"** veya **"DNS Yönetimi"** bölümünü bul
3. **A Record ekle:**
   - Tip: `A`
   - Host/İsim: `@` (veya boş)
   - Değer/IP: `216.198.79.1`
   - TTL: `3600`
   - Kaydet
4. **CNAME Record ekle:**
   - Tip: `CNAME`
   - Host/İsim: `www`
   - Değer/Hedef: `f51e7d2acb0e6ff3.vercel-dns-017.com.`
   - TTL: `3600`
   - Kaydet

---

## ⏱️ Bekleme Süresi

- **DNS Yayılımı:** 1-24 saat (genelde 1-2 saat)
- **Vercel Doğrulama:** DNS yayıldıktan sonra 5-10 dakika
- **SSL Sertifikası:** Otomatik, 5-10 dakika

---

## ✅ Kontrol Etme

### DNS Yayılımını Kontrol
1. https://dnschecker.org adresine git
2. Domain adını yaz: `kenningford.com`
3. Record type: `A` seç
4. Tüm sunucularda `216.198.79.1` görünmeli

### Vercel'de Kontrol
1. Vercel Dashboard → Settings → Domains
2. Domain durumunu kontrol et
3. "Valid Configuration" görünene kadar bekle

---

## ⚠️ Önemli Notlar

1. **CNAME değerinin sonundaki nokta:** `f51e7d2acb0e6ff3.vercel-dns-017.com.` (sonunda nokta var, önemli!)
2. **A Record için @ işareti:** Bazı sağlayıcılarda `@` yerine boş bırakmanız gerekebilir
3. **Eski kayıtları silin:** Eğer daha önce farklı DNS kayıtları varsa, onları silin
4. **Cloudflare kullanıyorsanız:** Proxy'yi kapatın (gri bulut, turuncu değil)

---

## 🐛 Sorun Giderme

### DNS Yayılmadı
- 24 saat bekle
- https://dnschecker.org'dan kontrol et
- Domain sağlayıcının destek ekibine sor

### Vercel Hala "Invalid" Gösteriyor
- DNS kayıtlarının doğru eklendiğinden emin ol
- CNAME değerinin sonunda nokta olduğundan emin ol
- 1-2 saat bekle ve tekrar kontrol et

### Site Açılmıyor
- DNS yayılımını kontrol et (dnschecker.org)
- Vercel Dashboard'da domain durumunu kontrol et
- SSL sertifikasının geldiğini kontrol et

---

## 📞 Yardım

- **Vercel Docs:** https://vercel.com/docs/concepts/projects/domains
- **Vercel Support:** https://vercel.com/support
