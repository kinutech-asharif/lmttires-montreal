# Laval Mobile Tire - Website Documentation

---

## 🚨 NEXT SESSION REMINDER 🚨

**📋 PENDING PROJECT:** LMT Tires Montreal - v2 Website

**TODO File:** `../TODO-v2-lmttires-montreal.md`

**Quick Start Next Session:**
Just say: **"Check TODO-v2"** or **"Let's work on the v2 project"**

**Target Domain:** lmttires-montreal.ca
**Status:** Waiting to start (domain registration required first)

---

## Project Overview

**Laval Mobile Tire** is a mobile tire service company website serving Laval and the Greater Montreal region. The website offers:

- Mobile tire installation and repair services
- Emergency roadside assistance
- Tire sales from various manufacturers
- Online appointment booking system
- Bilingual support (English/French)

**Technology Stack:**
- HTML5
- CSS3 with Bootstrap 3.x
- jQuery for interactivity
- Custom JavaScript for UI functionality
- Mobile-responsive design

**Key Features:**
- Animated preloader with company logo
- Fixed header with language switcher (EN/FR)
- Slide-out navigation sidebar
- Smooth scrolling to page sections
- Service pricing table
- Tire brand showcase
- Appointment request form
- Newsletter subscription

---

## 🎯 VISUAL TESTING & VERIFICATION

### ⚠️ CRITICAL: Always Use Playwright for Styling Verification

**DO NOT** manually take screenshots or visually compare sites in your browser. This is time-consuming, inconsistent, and error-prone.

**ALWAYS** use the automated Playwright comparison tool located in `../testing-tools/`

### Why Playwright?

✅ **Automated** - No manual screenshots needed
✅ **Consistent** - Same viewport, same timing, same conditions
✅ **Comprehensive** - Captures full-page screenshots automatically
✅ **Side-by-side** - Generates visual comparison reports
✅ **Reliable** - Catches missing assets, CSS differences, and visual regressions
✅ **Fast** - Complete comparison in under 30 seconds

### Quick Start: Verify Styling

```bash
# Navigate to testing tools
cd ../testing-tools

# Run automated comparison
npm run compare

# View results (opens automatically in browser)
# File: testing-tools/screenshots/comparison.html
```

### What It Compares

The Playwright tool automatically captures and compares:

1. **Original Site** - https://www.lavalmobiletire.ca
2. **Localhost** - http://localhost:8000
3. **GitHub Pages** - https://kinutech-asharif.github.io/lavalmobiletire

Both English and French versions are tested.

### When to Run

**Run Playwright comparison:**
- ✅ After downloading/updating any assets
- ✅ Before committing CSS changes
- ✅ After fixing visual bugs
- ✅ Before deploying to GitHub Pages
- ✅ When verifying the site matches the original
- ✅ After any styling or layout modifications

### Common Issues Detected

The tool has already detected and helped fix:
- ❌ Missing background images (banner1.png, header.jpg, etc.)
- ❌ CSS file 404 errors
- ❌ Missing assets causing visual differences
- ❌ Layout inconsistencies

### Testing Workflow

```bash
# 1. Make changes to the site
# 2. Start localhost if not running
python -m http.server 8000

# 3. Run Playwright comparison
cd ../testing-tools && npm run compare

# 4. Review comparison report (opens automatically)
# 5. If differences found, investigate and fix
# 6. Re-run comparison to verify fix
# 7. Commit and push when verified
```

### Tool Location

**Repository:** `../testing-tools/` (separate from website)
**Main Script:** `compare-sites.js`
**Documentation:** `../testing-tools/README.md`
**Screenshots:** `../testing-tools/screenshots/`

---

## File Structure

```
lavalmobiletire/
├── index.html              # Main English homepage
├── indexFR.html            # French version homepage
├── CLAUDE.md              # This documentation file
│
├── css/
│   ├── bootstrap.min.css                # Bootstrap framework (137KB)
│   ├── style.css                        # Main custom styles (15.6KB)
│   ├── responsive.css                   # Responsive breakpoints (2.7KB)
│   └── jquery.mCustomScrollbar.min.css  # Custom scrollbar styles (42.8KB)
│
├── js/
│   ├── jquery.min.js                           # jQuery 3.x (87KB)
│   ├── jquery-3.0.0.min.js                     # Additional jQuery version (11.3KB)
│   ├── bootstrap.bundle.min.js                 # Bootstrap JS with Popper (70.8KB)
│   ├── jquery.mCustomScrollbar.concat.min.js   # Custom scrollbar plugin (45.5KB)
│   └── custom.js                               # Custom website scripts (2KB)
│
└── images/
    ├── fevicon.png          # Favicon (1.2KB)
    ├── loading.gif          # Animated loader (35.5KB)
    ├── smLMTlogo.png        # Small logo for header (103KB)
    ├── FR_flag.png          # French flag icon (13.6KB)
    ├── CA_flag.png          # Canadian flag icon (9.2KB)
    ├── menu_icon.png        # Hamburger menu icon (974B)
    ├── mobile-truck.jpeg    # Service truck photo 1 (178KB)
    ├── mobile-truck2.jpeg   # Service truck photo 2 (427KB)
    │
    └── tireco_logos/        # Tire brand logos (24 files)
        ├── bridgestone.jpg
        ├── continental.jpg
        ├── dunlop.jpg
        ├── federal.jpg
        ├── goodyear.jpg
        ├── yokohama.jpg
        ├── michelin.jpg
        ├── nexen.jpg
        ├── alliance.jpg
        ├── bfgoodrich.jpg
        ├── carlisle.jpg
        ├── delta.jpg
        ├── fierce.jpg
        ├── firestone.jpg
        ├── fuzion.jpg
        ├── generaltire.jpg
        ├── herculestire.jpg
        ├── jetzon.jpg
        ├── kenda.jpg
        ├── kleber.jpg
        ├── pirelli.jpg
        ├── procomp.jpg
        └── sumitomo.jpg
```

---

## Local Development & Testing

### Preview Website Locally

**Important:** JavaScript features require a proper HTTP server to function correctly. Simply opening `index.html` directly in a browser (file:// protocol) may cause some features to fail.

### Option 1: Python HTTP Server (Recommended)

If you have Python installed (Python 3.x):

```bash
cd lavalmobiletire
python -m http.server 8000
```

Then open your browser to:
- **English:** http://localhost:8000/index.html
- **French:** http://localhost:8000/indexFR.html

**To stop the server:** Press `Ctrl+C` in the terminal

### Option 2: Node.js http-server

If you have Node.js installed:

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run the server
cd lavalmobiletire
http-server -p 8000 -o
```

The `-o` flag automatically opens your default browser.



### Option 3: VS Code Live Server Extension

If you use Visual Studio Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Testing Checklist

When previewing locally, verify:
- [ ] Page loads without console errors
- [ ] Navigation sidebar opens/closes properly
- [ ] Smooth scrolling to sections works
- [ ] Language switcher links work (EN/FR)
- [ ] Forms display correctly (even if mailto: doesn't work in production)
- [ ] All images load properly
- [ ] Tire brand logos display
- [ ] Mobile responsive design (test at different screen sizes)

**Note:** The `mailto:` form action will open your email client when testing locally. This is expected behavior but won't work well in production.

---

## External CDN Dependencies

### CSS Libraries
1. **Font Awesome 4.0.3**
   - URL: `https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css`
   - Used for: Icon fonts (phone, envelope, map marker, etc.)

2. **FancyBox 2.1.5**
   - URL: `https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css`
   - Used for: Lightbox/modal functionality

3. **BaguetteBox CSS**
   - URL: `https://rawgit.com/LeshikJanz/libraries/master/Bootstrap/baguetteBox.min.css`
   - Used for: Image gallery lightbox

### JavaScript Libraries
1. **BaguetteBox JS 1.8.1**
   - URL: `https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js`
   - Used for: Image gallery functionality

### Google Fonts
Imported via `style.css`:
1. **Rajdhani** - `https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700`
2. **Poppins** - `https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`
3. **Raleway** - `https://fonts.googleapis.com/css?family=Raleway:100,400,600,700,900&display=swap`
4. **Lato** - `https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap`

### Legacy IE Support
1. **HTML5Shiv 3.7.3**
   - URL: `https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js`
   - Conditional: Only loads for IE < 9

2. **Respond.js 1.4.2**
   - URL: `https://oss.maxcdn.com/respond/1.4.2/respond.min.js`
   - Conditional: Only loads for IE < 9

---

## Form Elements Analysis

### 1. Appointment Request Form
**Location:** `index.html` line 356
**ID:** `request`
**Action:** `mailto:RDV@lavalmobiletire.ca`
**Method:** `POST`
**Encoding:** `text/plain`

#### Form Fields:
- **Name** (text input) - `name=" Name"`
- **Phone Number** (text input) - `name="Phone Number"`
- **Email** (text input) - `name="Email"`
- **Address** (text input) - `name="Address"`
- **City** (text input) - `name="City"`
- **Postal Code** (text input) - `name="Postal Code"`
- **Number of Vehicles** (select dropdown, required)
  - Options: 1-6
  - `name="num_vehicles"`
- **Appointment Choice 1** (select dropdown, required)
  - Options: Weekday/Weekend
  - `name="appt_choice1"`
- **Time Choice 1** (select dropdown, required)
  - Options: AM(7-10), Mid(10-13), Afternoon(13-16), Eve(16-19), Late after 19
  - `name="time_choice_1"`
- **Appointment Choice 2** (select dropdown, required)
  - Options: Weekday/Weekend
  - `name="appt_choice2"`
- **Time Choice 2** (select dropdown)
  - Options: Same as Time Choice 1
  - `name="time_choice_2"`
- **Service Required** (radio buttons, required)
  - `already_mounted`: "On Rims - My Tires have their own wheels"
  - `need_mounting`: "Mount and Balancing - Remove old tire, install new tires and balancing"
  - `name="tire_mounting"`
- **Comments** (textarea)
  - `Message="Comments"`
  - Default text: "Comments"

**Submit Button:** "Send"

### 2. Newsletter Subscription Form
**Location:** `index.html` line 456
**Action:** `mailto:RDV@lavalmobiletire.ca`
**Method:** `POST`
**Encoding:** `text/plain`

#### Form Fields:
- **Email** (text input)
  - Class: `newsltter`
  - Placeholder: "enter your email"
  - `name="enter your email"`

**Submit Button:** "SUBSCRIBE"

---

## Important Notes

### Security & Privacy Concerns

**Third-Party Tracking Script Detected:**
- **Location:** `js/custom.js` line 40
- **Script:** Makes AJAX call to `leostop.com/tracking/tracking.js`
- **Risk:** Unknown third-party tracking code
- **Recommendation:** Review or remove this tracking script before deployment

### Form Issues

1. **mailto: Forms Not Production-Ready**
   - Both forms use `mailto:` which opens email clients
   - This is NOT a reliable form submission method
   - **Recommendation:** Implement server-side form processing (PHP, Node.js, etc.)

2. **Form Validation Issues**
   - Limited client-side validation
   - Required fields only enforced via HTML5 `required` attribute
   - **Recommendation:** Add JavaScript validation

3. **Duplicate Form Tag**
   - Line 456-457 in `index.html` has nested `<form>` tags
   - **Fix Required:** Remove duplicate form declaration

### Missing Local Assets

The following assets are referenced in `style.css` but NOT present locally:
- `animate.min.css`
- `normalize.css`
- `icomoon.css`
- `font-awesome.min.css`
- `meanmenu.css`
- `owl.carousel.min.css`
- `swiper.min.css`
- `slick.css`
- `jquery.fancybox.min.css`
- `jquery-ui.css`
- `nice-select.css`

These are imported via `@import` in `style.css` (lines 18-28) but files don't exist in the `css/` directory.

**Impact:** Some features may not work properly without these files.

### Background Images ✅ FIXED

~~Referenced in `style.css` but not downloaded~~ **NOW INCLUDED:**
- ✅ `images/header.jpg` (line 260) - Downloaded (14.5KB)
- ✅ `images/banner1.png` (line 323) - Downloaded (482KB)
- ✅ `images/bg_about.png` (line 506) - Downloaded (243KB)
- ✅ `images/contact_bg.jpg` (line 649) - Downloaded (153KB)

**Status:** All background images are now present and working correctly.
**Verified:** Using Playwright screenshot comparison (2025-12-20)

---

## GitHub Pages Deployment

### 🎉 DEPLOYED!

This website is now live on GitHub Pages:

- **Live Site:** https://kinutech-asharif.github.io/lavalmobiletire/
- **English:** https://kinutech-asharif.github.io/lavalmobiletire/index.html
- **French:** https://kinutech-asharif.github.io/lavalmobiletire/indexFR.html
- **Repository:** https://github.com/kinutech-asharif/lavalmobiletire

**Deployment Details:**
- Branch: `master`
- Source: `/` (root)
- HTTPS Enforced: Yes
- Status: Active

### Prerequisites (Already Completed ✓)
- [x] Created GitHub repository
- [x] All local paths are relative
- [x] Initial commit created
- [x] Pushed to GitHub
- [x] GitHub Pages enabled

### Deployment Steps (Already Completed)

1. **Pushed to GitHub:** ✓
   ```bash
   git init
   git config user.name "kinutech-asharif"
   git config user.email "a.sharif@kinutech.com"
   git add .
   git commit -m "Initial commit: Laval Mobile Tire website"
   gh repo create lavalmobiletire --public --source=. --push
   ```

2. **Enabled GitHub Pages:** ✓
   ```bash
   gh api repos/kinutech-asharif/lavalmobiletire/pages -X POST \
     -f source[branch]=master -f source[path]=/
   ```

3. **Site is Live:** ✓
   - Main page: https://kinutech-asharif.github.io/lavalmobiletire/
   - Build typically completes in 1-2 minutes after push

### Pre-Deployment Checklist

**🎯 CRITICAL - Visual Verification:**
- [x] **Run Playwright comparison** (`cd ../testing-tools && npm run compare`)
- [x] **Verify localhost matches original site** (no visual differences)
- [ ] **Run Playwright before EVERY deployment** (establish baseline)

**Code Quality:**
- [ ] Remove or verify third-party tracking script (`custom.js` line 40)
- [ ] Download missing CSS files referenced in `style.css` (optional)
- [x] ~~Download missing background images~~ ✅ COMPLETED
- [ ] Replace `mailto:` forms with proper form processing
- [ ] Fix duplicate form tag (line 456-457)
- [ ] Add proper form validation

**Testing:**
- [x] **Automated visual regression testing with Playwright** ✅
- [ ] Test all links and navigation manually
- [ ] Verify mobile responsiveness (can use Playwright with mobile viewports)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Cross-browser compatibility check

**Optimization:**
- [ ] Optimize images for web (current images are quite large)
- [ ] Remove duplicate jQuery version
- [ ] Minify CSS/JS for production

**SEO & Analytics:**
- [ ] Add proper meta descriptions for SEO
- [ ] Add Google Analytics (optional)
- [ ] Update contact email if needed
- [ ] Verify Open Graph tags for social sharing

**⚠️ IMPORTANT:** Always run `npm run compare` in testing-tools before deploying to catch visual regressions!

### Performance Optimization

**Current Issues:**
- Multiple jQuery versions loaded (unnecessary)
- Large uncompressed images (mobile-truck2.jpeg is 427KB)
- Many unused CSS frameworks loaded

**Recommendations:**
1. Use only one jQuery version (remove duplicate)
2. Compress/optimize all JPEG images
3. Implement lazy loading for tire brand logos
4. Remove unused CSS imports
5. Minify custom CSS/JS

### CDN Alternatives for Offline Support

If you want the site to work completely offline, download these CDN resources:

```bash
# Font Awesome
curl -o css/font-awesome.min.css https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css

# Download Font Awesome fonts as well
mkdir fonts
# (Fonts need to be extracted from Font Awesome package)

# BaguetteBox
curl -o css/baguetteBox.min.css https://rawgit.com/LeshikJanz/libraries/master/Bootstrap/baguetteBox.min.css
curl -o js/baguetteBox.min.js https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js

# FancyBox
curl -o css/jquery.fancybox.min.css https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css
```

Then update HTML to reference local copies instead of CDN URLs.

---

## Contact Information

**Business Details:**
- **Company:** Laval Mobile Tire (LMT)
- **Email:** rdv@lavalmobiletire.ca
- **Phone:** +1 514-909-8473 (514-909-TIRE)
- **Service Area:** Laval and Western Montreal
- **Website:** https://lavalmobiletire.com (referenced in copyright)

---

## Browser Compatibility

**Supported Browsers:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 9+ (with included polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** IE8 and below NOT supported despite HTML5shiv/Respond.js

---

## License & Copyright

Copyright 2019 All Rights Reserved - LMT (Laval Mobile Tire)

---

## Additional Resources

- Bootstrap Documentation: https://getbootstrap.com/docs/3.4/
- jQuery Documentation: https://api.jquery.com/
- Font Awesome 4 Icons: https://fontawesome.com/v4/icons/

---

**Documentation Generated:** 2025-12-20
**Last Updated:** 2025-12-20
**Original Website:** https://www.lavalmobiletire.ca/
**GitHub Repository:** https://github.com/kinutech-asharif/lavalmobiletire
**GitHub Pages (Live):** https://kinutech-asharif.github.io/lavalmobiletire/
**Local Preview:** http://localhost:8000 (Python HTTP server)
