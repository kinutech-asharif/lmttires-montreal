# LMT Tires Montreal - Deployment Documentation

**Domain:** lmttires-montreal.ca
**Deployed:** 2025-12-21
**Status:** ✅ LIVE

---

## 🌐 Live URLs

- **Production:** https://lmttires-montreal.ca
- **WWW:** https://www.lmttires-montreal.ca
- **GitHub Pages:** https://kinutech-asharif.github.io/lmttires-montreal/
- **GitHub Repo:** https://github.com/kinutech-asharif/lmttires-montreal

---

## 🏗️ Infrastructure

### Hosting
- **Platform:** GitHub Pages
- **Branch:** master
- **Path:** / (root)
- **Custom Domain:** lmttires-montreal.ca (via CNAME file)

### DNS & CDN
- **Provider:** Cloudflare
- **Zone ID:** 5b8def32380ddfdf61345202d827b0a6
- **Account ID:** 09a0acf915cb9b6089b37da1f7468bd4
- **Nameservers:**
  - rodrigo.ns.cloudflare.com
  - vera.ns.cloudflare.com

### DNS Records
```
Type: A
Name: @
Values:
  - 185.199.108.153 (Proxied ☁️)
  - 185.199.109.153 (Proxied ☁️)
  - 185.199.110.153 (Proxied ☁️)
  - 185.199.111.153 (Proxied ☁️)

Type: CNAME
Name: www
Value: kinutech-asharif.github.io (Proxied ☁️)
```

---

## 🔒 Security Configuration

### SSL/TLS Settings
- **Mode:** Full (Strict) ✅
- **Always Use HTTPS:** Enabled ✅
- **Minimum TLS Version:** 1.2
- **Automatic HTTPS Rewrites:** Enabled
- **Certificate:** GitHub Pages + Cloudflare Universal SSL

### Cloudflare Protection
- **Proxy Status:** Enabled (Orange Cloud ☁️)
- **github.io domain:** Hidden from visitors ✅
- **DDoS Protection:** Active
- **Web Application Firewall (WAF):** Available (Free tier)
- **Security Level:** Medium

---

## ⚡ Performance Optimization

### Cloudflare Features
- **Brotli Compression:** Enabled ✅
- **Auto Minify:**
  - HTML: Attempted (may require paid plan)
  - CSS: Attempted (may require paid plan)
  - JS: Attempted (may require paid plan)
- **Caching:** Cloudflare CDN caching active
- **HTTP/2:** Enabled
- **HTTP/3 (QUIC):** Available

### Cache Settings
- **Browser Cache TTL:** Respect Existing Headers
- **Caching Level:** Standard
- **Cache Everything:** Disabled (static site, not needed)

---

## 🔄 Deployment Workflow

### Making Updates

1. **Edit Files Locally**
   ```bash
   cd "C:\Users\User\Documents\Backup\Source\LMT Tires\lmttires-montreal"
   # Make your changes
   ```

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Your commit message

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
   ```

3. **Push to GitHub**
   ```bash
   git push
   ```

4. **GitHub Pages Auto-Deploy**
   - GitHub automatically rebuilds the site
   - Takes 1-2 minutes
   - Check: https://github.com/kinutech-asharif/lmttires-montreal/deployments

5. **Purge Cloudflare Cache** (Optional but Recommended)
   ```bash
   cd ..
   ./purge-cloudflare-cache.sh all
   ```

### Quick Deploy Script
```bash
#!/bin/bash
# Quick deploy script
cd "C:\Users\User\Documents\Backup\Source\LMT Tires\lmttires-montreal"

# Commit and push
git add .
git commit -m "Update: $(date +%Y-%m-%d)"
git push

# Wait for GitHub Pages
echo "Waiting for GitHub Pages deployment (30s)..."
sleep 30

# Purge cache
cd ..
./purge-cloudflare-cache.sh all

echo "✓ Deployment complete!"
echo "Site: https://lmttires-montreal.ca"
```

---

## 🧹 Cache Management

### Purge All Cache
```bash
cd "C:\Users\User\Documents\Backup\Source\LMT Tires"
./purge-cloudflare-cache.sh all
```

### Purge Specific Files
```bash
./purge-cloudflare-cache.sh files \
  https://lmttires-montreal.ca/index.html \
  https://lmttires-montreal.ca/indexFR.html
```

### When to Purge Cache
- ✅ After pushing major content updates
- ✅ After changing CSS or JavaScript
- ✅ After updating images
- ✅ When changes aren't visible immediately
- ❌ Not needed for every small update (Cloudflare auto-refreshes)

**Note:** Cache purge requires a Cloudflare API token with "Cache Purge" permissions.
You may need to create an additional token for this purpose.

---

## 📊 Monitoring & Analytics

### GitHub Pages Status
- **Dashboard:** https://github.com/kinutech-asharif/lmttires-montreal/settings/pages
- **Deployments:** https://github.com/kinutech-asharif/lmttires-montreal/deployments
- **Build Logs:** Available in Actions tab

### Cloudflare Analytics
- **Dashboard:** https://dash.cloudflare.com/
- Navigate to: lmttires-montreal.ca → Analytics & Logs
- **Metrics Available:**
  - Requests/bandwidth
  - Unique visitors
  - Threats blocked
  - Cache performance
  - Response times

### DNS Check
```bash
nslookup lmttires-montreal.ca
dig lmttires-montreal.ca
```

---

## 🔐 API Tokens Used

Located in: `../.cloudflare-credentials`

1. **DNS Token** - Managing DNS records
2. **Security Token** - SSL/TLS, HTTPS, compression settings
3. **Workers Token** - Future use for form handling
4. **Page Rules Token** - Future use for advanced routing

**Additional Token Needed:**
- **Cache Purge Token** - For automated cache purging
  - Permissions: Zone.Cache Purge
  - Create at: https://dash.cloudflare.com/profile/api-tokens

---

## 🐛 Troubleshooting

### Site Not Loading
1. Check DNS: `nslookup lmttires-montreal.ca`
2. Check GitHub Pages status
3. Verify Cloudflare proxy is enabled (orange cloud)
4. Check SSL certificate status in Cloudflare

### Changes Not Visible
1. Wait 1-2 minutes for GitHub Pages rebuild
2. Purge Cloudflare cache: `./purge-cloudflare-cache.sh all`
3. Clear browser cache (Ctrl+Shift+R)
4. Try incognito/private window

### SSL Certificate Errors
1. GitHub Pages generates cert within 24 hours
2. Check: GitHub repo → Settings → Pages → "HTTPS" checkbox
3. Verify Cloudflare SSL mode is "Full (Strict)"
4. Wait for cert propagation (up to 24 hours)

### 404 Errors
1. Verify CNAME file exists in repo root
2. Check file is committed and pushed
3. Verify custom domain in GitHub Pages settings
4. Check DNS records point to correct IPs

---

## 📝 Maintenance Tasks

### Regular (As Needed)
- [ ] Update content
- [ ] Test forms functionality
- [ ] Check for broken links
- [ ] Update contact information

### Monthly
- [ ] Review Cloudflare analytics
- [ ] Check for security updates
- [ ] Verify SSL certificate validity
- [ ] Test site on multiple browsers/devices

### Quarterly
- [ ] Review and rotate API tokens
- [ ] Audit Cloudflare security settings
- [ ] Performance optimization review
- [ ] Backup repository

---

## 🎯 Future Enhancements

### Planned
- [ ] Replace mailto: forms with Cloudflare Workers
- [ ] Add Cloudflare Turnstile (CAPTCHA alternative)
- [ ] Implement form data storage in Workers KV
- [ ] Add email notifications via Workers
- [ ] Set up automated backups

### Under Consideration
- [ ] Add Google Analytics
- [ ] Implement A/B testing
- [ ] Add customer testimonials section
- [ ] Create blog section
- [ ] Multi-language SEO optimization

---

## 📚 Related Documentation

- [CLAUDE.md](CLAUDE.md) - Original v1 documentation
- [../TODO-v2-lmttires-montreal.md](../TODO-v2-lmttires-montreal.md) - Project planning
- [../CLOUDFLARE-API-TOKENS-GUIDE.md](../CLOUDFLARE-API-TOKENS-GUIDE.md) - API token reference
- [../.cloudflare-credentials](../.cloudflare-credentials) - Secure credentials (not in git)
- [../purge-cloudflare-cache.sh](../purge-cloudflare-cache.sh) - Cache purge utility

---

**Last Updated:** 2025-12-21
**Deployed By:** Claude Code
**Version:** v2.0
