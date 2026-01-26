# GitHub Repository Oluşturma - Adım Adım

## 🚀 Hızlı Adımlar

### 1. GitHub'da Repository Oluştur

1. **GitHub'a git:** https://github.com
2. **Giriş yap** (yiiterdal hesabınla)
3. **Sağ üstte "+" ikonuna tıkla** → **"New repository"**

### 2. Repository Ayarları

- **Repository name:** `Keninngford` (veya istediğin isim)
- **Description:** "GreyHawk Capital Website" (opsiyonel)
- **Public** seç (veya Private, istersen)
- ⚠️ **"Add a README file"** işaretleme (boş bırak)
- ⚠️ **"Add .gitignore"** işaretleme (zaten var)
- ⚠️ **"Choose a license"** → "None" (veya istersen MIT)
- **"Create repository"** butonuna tıkla

### 3. Repository Oluşturulduktan Sonra

Repository oluşturulduktan sonra, terminalde şu komutu çalıştır:

```bash
git push -u origin main
```

Eğer authentication hatası alırsan:
- GitHub kullanıcı adı ve şifre isteyebilir
- Eğer 2FA (iki faktörlü doğrulama) aktifse, **Personal Access Token** gerekir

---

## 🔑 Personal Access Token Oluşturma (2FA için)

Eğer iki faktörlü doğrulama aktifse:

1. **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. **"Generate new token" → "Generate new token (classic)"**
3. **Token ayarları:**
   - Note: "Vercel Deploy" (açıklama)
   - Expiration: 90 days (veya istediğin süre)
   - Scopes: **repo** işaretle (tüm repo izinleri)
4. **"Generate token"** tıkla
5. **Token'ı kopyala** (bir daha gösterilmez!)

### Token ile Push Yapma

```bash
git push -u origin main
```

Kullanıcı adı: `yiiterdal`
Şifre: **Token'ı yapıştır** (şifre değil!)

---

## ✅ Alternatif: GitHub CLI Kullan

Daha kolay bir yol:

```bash
# GitHub CLI yükle (eğer yoksa)
winget install GitHub.cli

# GitHub'a giriş yap
gh auth login

# Repository oluştur ve push et
gh repo create Keninngford --public --source=. --remote=origin --push
```

---

## 🎯 Sonraki Adım: Vercel'e Deploy

Repository GitHub'da olduktan sonra:

1. **Vercel'e git:** https://vercel.com
2. **GitHub ile giriş yap**
3. **"Add New Project"** → Repository'ni seç
4. **Deploy** tıkla
5. **Domain ekle** (Settings → Domains)

---

## ❓ Sorun mu var?

- **Repository bulunamadı:** GitHub'da repository oluşturduğundan emin ol
- **Authentication hatası:** Personal Access Token kullan
- **Permission denied:** Token'da "repo" scope'u olduğundan emin ol
