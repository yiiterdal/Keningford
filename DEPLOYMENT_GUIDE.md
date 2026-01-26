# Keningford Website - Deployment Rehberi

## ADIM 1: GitHub Repository Oluşturma

### 1.1 GitHub'a Git
- Tarayıcıda https://github.com adresine git
- Eğer hesabın yoksa: "Sign up" → Email/şifre ile kayıt ol
- Eğer hesabın varsa: "Sign in" yap

### 1.2 Yeni Repository Oluştur
1. GitHub'da sağ üstte **"+"** ikonuna tıkla → **"New repository"**
2. Repository ayarları:
   - **Repository name**: `keningford-website` (veya istediğin isim)
   - **Description**: "Keningford Capital Advisory Website"
   - **Public** seç (veya Private, istersen)
   - **"Add a README file"** işaretleme (boş bırak)
   - **"Add .gitignore"** → "Node" seç
   - **"Choose a license"** → "None" (veya istersen MIT)
3. **"Create repository"** butonuna tıkla

### 1.3 Repository URL'ini Kopyala
- Oluşturduğun repository sayfasında yeşil **"Code"** butonuna tıkla
- HTTPS linkini kopyala (örnek: `https://github.com/KULLANICI_ADIN/keningford-website.git`)

---

## ADIM 2: Projeyi GitHub'a Yükleme

### 2.1 Terminal'de Proje Klasörüne Git
- Windows'ta PowerShell veya Command Prompt aç
- Şu komutu çalıştır:
```bash
cd "C:\GreyHawk Capital"
```

### 2.2 Git Repository Başlat
```bash
git init
```

### 2.3 Tüm Dosyaları Ekle
```bash
git add .
```

### 2.4 İlk Commit Yap
```bash
git commit -m "Initial commit - Keningford website"
```

### 2.5 GitHub Repository'ye Bağla
```bash
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/keningford-website.git
```
⚠️ **ÖNEMLİ**: `KULLANICI_ADIN` kısmını kendi GitHub kullanıcı adınla değiştir!

### 2.6 GitHub'a Yükle
```bash
git push -u origin main
```
- İlk kez yapıyorsan GitHub kullanıcı adı ve şifre isteyebilir
- Eğer iki faktörlü doğrulama varsa Personal Access Token gerekir

---

## ADIM 3: Vercel Hesabı Oluşturma

### 3.1 Vercel'e Git
- Tarayıcıda https://vercel.com adresine git

### 3.2 Hesap Oluştur
1. **"Sign Up"** butonuna tıkla
2. **"Continue with GitHub"** seç (en kolay yol)
3. GitHub hesabınla giriş yap
4. Vercel'e GitHub erişim izni ver

---

## ADIM 4: Vercel'e Deploy Etme

### 4.1 Yeni Proje Ekle
1. Vercel Dashboard'da **"Add New..."** → **"Project"** tıkla
2. GitHub repository'lerini göreceksin
3. **"keningford-website"** repository'sini bul ve **"Import"** tıkla

### 4.2 Proje Ayarları
- Vercel otomatik olarak Next.js'i algılar
- **Framework Preset**: Next.js (otomatik seçili)
- **Root Directory**: `./` (değiştirme)
- **Build Command**: `npm run build` (otomatik)
- **Output Directory**: `.next` (otomatik)
- **Install Command**: `npm install` (otomatik)

### 4.3 Environment Variables (Şimdilik gerek yok)
- Boş bırak, "Deploy" yap

### 4.4 Deploy Başlat
1. **"Deploy"** butonuna tıkla
2. 2-3 dakika bekle
3. Deploy tamamlandığında yeşil "Success" mesajı görürsün

### 4.5 İlk URL'i Al
- Deploy sonrası otomatik bir URL verilir
- Örnek: `keningford-website-abc123.vercel.app`
- Bu URL'yi kopyala (sonra domain bağlayacaksın)

---

## ADIM 5: Domain Satın Alma

### 5.1 Domain Sağlayıcı Seç
**Önerilen: Cloudflare Registrar** (en ucuz ve güvenli)
- https://www.cloudflare.com/products/registrar/ adresine git
- "Get started" → Hesap oluştur

**Alternatif: Namecheap**
- https://www.namecheap.com/ adresine git
- "Sign Up" → Hesap oluştur

### 5.2 Domain Ara ve Satın Al
1. Domain arama kutusuna `keningford.com` yaz
2. Müsaitse fiyatı gösterir (~$8-15/yıl)
3. Sepete ekle → Ödeme yap
4. Domain satın alma işlemi 5-10 dakika sürer

### 5.3 Domain Yönetim Paneline Git
- Satın aldıktan sonra domain yönetim paneline gir
- "DNS Settings" veya "Domain Settings" bölümünü bul

---

## ADIM 6: Domain'i Vercel'e Bağlama

### 6.1 Vercel'de Domain Ekle
1. Vercel Dashboard → Projen → **"Settings"** sekmesi
2. Sol menüden **"Domains"** seç
3. **"Add Domain"** butonuna tıkla
4. Domain'ini yaz: `keningford.com`
5. **"Add"** tıkla

### 6.2 DNS Ayarları Seçeneği
Vercel iki seçenek sunar:

**SEÇENEK A: Nameserver'ları Değiştir (ÖNERİLEN - En Kolay)**
1. Vercel'de "Nameservers" bölümünü gör
2. Şu nameserver'ları kopyala:
   ```
   dns1.vercel-dns.com
   dns2.vercel-dns.com
   ```
3. Domain sağlayıcına git → Nameserver ayarlarına gir
4. Vercel'den aldığın nameserver'ları yapıştır
5. Kaydet → 24 saat içinde aktif olur (genelde 1-2 saat)

**SEÇENEK B: DNS Kayıtlarını Ekle**
1. Vercel'de "DNS Records" bölümünü gör
2. Şu kayıtları domain sağlayıcına ekle:
   - **A Record**: 
     - Name: `@` veya boş
     - Value: `76.76.21.21`
     - TTL: 3600
   - **CNAME Record** (www için):
     - Name: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: 3600
3. Kaydet → 24 saat içinde aktif olur

### 6.3 SSL Sertifikası (Otomatik)
- Vercel otomatik olarak SSL ekler
- 5-10 dakika içinde `https://keningford.com` çalışır
- Vercel Dashboard'da "SSL" durumunu kontrol et

---

## ADIM 7: Test Etme

### 7.1 Domain'in Çalıştığını Kontrol Et
1. Tarayıcıda `https://keningford.com` adresine git
2. Site açılıyorsa başarılı! 🎉
3. Eğer açılmıyorsa:
   - DNS yayılması için 1-2 saat bekle
   - Vercel Dashboard'da domain durumunu kontrol et

### 7.2 www Versiyonunu Test Et
- `https://www.keningford.com` adresine de git
- Vercel otomatik olarak www'yi ana domain'e yönlendirir

---

## SORUN GİDERME

### DNS Yayılmadı
- 24 saat bekle (genelde 1-2 saat yeterli)
- https://dnschecker.org adresinden DNS yayılımını kontrol et

### SSL Sertifikası Gelmedi
- Vercel Dashboard → Settings → Domains → SSL sekmesi
- "Redeploy" veya "Retry" butonuna tıkla

### Site Açılmıyor
- Vercel Dashboard → Deployments sekmesi
- Son deployment'ın durumunu kontrol et
- Hata varsa logları incele

---

## SONRAKI ADIMLAR

1. ✅ Site yayında: `https://keningford.com`
2. ✅ Her GitHub push'unda otomatik deploy olur
3. ✅ Calendly linkini güncelle (gerçek link ile)
4. ✅ Email adresini güncelle (`info@keningford.com` gibi)
5. ✅ Google Analytics ekle (opsiyonel)
6. ✅ SEO optimizasyonu yap (opsiyonel)

---

## YARDIM

Sorun yaşarsan:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
