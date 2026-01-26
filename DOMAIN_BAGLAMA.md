# Domain Bağlama Rehberi - Hızlı Başlangıç

Domain'inizi aldıysanız, siteyi yayınlamak için şu adımları izleyin:

## 🚀 Hızlı Yol: Vercel ile Deploy (Önerilen)

### ADIM 1: Projeyi GitHub'a Yükle

1. **GitHub'da yeni repository oluştur:**
   - https://github.com → "New repository"
   - Repository adı: `greyhawk-site` (veya istediğin isim)
   - Public seç
   - "Create repository" tıkla

2. **Projeyi GitHub'a yükle:**
```bash
cd C:\greyhawkdevam
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/greyhawk-site.git
git push -u origin main
```
⚠️ `KULLANICI_ADIN` kısmını kendi GitHub kullanıcı adınla değiştir!

---

### ADIM 2: Vercel'e Deploy Et

1. **Vercel'e git:**
   - https://vercel.com → "Sign Up"
   - "Continue with GitHub" seç
   - GitHub hesabınla giriş yap

2. **Projeyi import et:**
   - Dashboard'da "Add New..." → "Project"
   - GitHub repository'ni seç → "Import"
   - Ayarları değiştirme (Next.js otomatik algılanır)
   - "Deploy" tıkla

3. **İlk URL'i al:**
   - Deploy tamamlandığında bir URL verilir
   - Örnek: `greyhawk-site-abc123.vercel.app`
   - Bu URL'yi not al

---

### ADIM 3: Domain'i Bağla

1. **Vercel'de domain ekle:**
   - Vercel Dashboard → Projen → "Settings" → "Domains"
   - "Add Domain" tıkla
   - Domain'ini yaz (örn: `greyhawk.com`)
   - "Add" tıkla

2. **DNS Ayarları - İki Seçenek:**

#### ✅ SEÇENEK A: Nameserver Değiştir (EN KOLAY - ÖNERİLEN)

**Vercel'den nameserver'ları al:**
- Vercel'de domain ekledikten sonra nameserver'ları gösterir:
  ```
  dns1.vercel-dns.com
  dns2.vercel-dns.com
  ```

**Domain sağlayıcında değiştir:**
- Domain'i aldığın yere git (Namecheap, GoDaddy, Cloudflare, vs.)
- Domain yönetim paneline gir
- "Nameservers" veya "DNS" bölümünü bul
- Vercel'den aldığın nameserver'ları yapıştır
- Kaydet

**Bekle:**
- 1-24 saat içinde aktif olur (genelde 1-2 saat)
- SSL otomatik eklenir (5-10 dakika)

#### SEÇENEK B: DNS Kayıtları Ekle

Eğer nameserver değiştirmek istemiyorsan:

**Vercel'den DNS kayıtlarını al:**
- Vercel'de domain ekledikten sonra DNS kayıtlarını gösterir

**Domain sağlayıcına ekle:**
- A Record:
  - Name: `@` veya boş
  - Value: `76.76.21.21`
  - TTL: 3600
- CNAME Record (www için):
  - Name: `www`
  - Value: `cname.vercel-dns.com`
  - TTL: 3600

---

### ADIM 4: Test Et

1. **Domain'in çalıştığını kontrol et:**
   - Tarayıcıda `https://greyhawk.com` adresine git
   - Site açılıyorsa başarılı! 🎉

2. **www versiyonunu test et:**
   - `https://www.greyhawk.com` adresine git
   - Vercel otomatik yönlendirir

---

## 🔧 Alternatif: Netlify ile Deploy

Eğer Vercel yerine Netlify kullanmak istersen:

1. **Netlify'e git:** https://netlify.com
2. **"Add new site" → "Import an existing project"**
3. **GitHub repository'ni seç**
4. **Build ayarları:**
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **"Deploy site" tıkla**
6. **Domain ekle:** Site settings → Domain management → Add custom domain
7. **DNS ayarları:** Netlify'den verilen nameserver'ları domain sağlayıcına ekle

---

## 🌐 Domain Sağlayıcıya Göre Nameserver Değiştirme

### Cloudflare
1. Cloudflare Dashboard → Domain seç
2. "DNS" sekmesi → "Nameservers" bölümü
3. Vercel nameserver'larını yapıştır
4. Kaydet

### Namecheap
1. Namecheap Dashboard → Domain List → Domain seç
2. "Nameservers" bölümü → "Custom DNS" seç
3. Vercel nameserver'larını ekle
4. "Save" tıkla

### GoDaddy
1. GoDaddy Dashboard → My Products → Domain seç
2. "DNS" sekmesi → "Nameservers" bölümü
3. "Change" tıkla → "Custom" seç
4. Vercel nameserver'larını ekle
5. "Save" tıkla

### Türkiye'deki Sağlayıcılar (Turhost, Natro, vs.)
1. Domain yönetim paneline gir
2. "DNS Ayarları" veya "Nameserver" bölümünü bul
3. Vercel nameserver'larını ekle
4. Kaydet

---

## ⚠️ Sorun Giderme

### DNS Yayılmadı
- 24 saat bekle (genelde 1-2 saat yeterli)
- https://dnschecker.org adresinden kontrol et
- Domain adını yaz → "A" kaydını kontrol et

### SSL Sertifikası Gelmedi
- Vercel Dashboard → Settings → Domains → SSL
- "Redeploy" veya "Retry" tıkla
- 5-10 dakika bekle

### Site Açılmıyor
- Vercel Dashboard → Deployments → Son deployment'ı kontrol et
- Hata varsa logları incele
- Build başarılı mı kontrol et

### Nameserver Değişikliği Çalışmıyor
- Domain sağlayıcıda kaydettiğinden emin ol
- 1-2 saat bekle (DNS yayılması zaman alır)
- Domain sağlayıcının destek ekibine sor

---

## ✅ Başarı Kontrol Listesi

- [ ] Proje GitHub'da
- [ ] Vercel'de deploy edildi
- [ ] Domain Vercel'e eklendi
- [ ] Nameserver'lar değiştirildi
- [ ] DNS yayıldı (dnschecker.org'dan kontrol)
- [ ] SSL aktif (https:// çalışıyor)
- [ ] Site açılıyor
- [ ] www versiyonu çalışıyor

---

## 📞 Yardım

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **DNS Checker:** https://dnschecker.org
