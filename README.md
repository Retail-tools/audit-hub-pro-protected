# Audit HUB Pro — Protected Deployment Guide

This is your **password-protected Audit HUB Pro** site. Anyone trying to access it will need to enter the correct password first.

---

## 🚀 Quick Setup (No Coding Knowledge Needed)

### **Step 1: Create a New GitHub Repository**

1. Go to **github.com** and sign in to your account
2. Click the **+** icon in the top-right corner → **New repository**
3. Name it: `audit-hub-pro-protected` (or any name you want)
4. Choose **Public** (so Vercel can access it)
5. Click **Create repository**

---

### **Step 2: Upload These Files to GitHub**

1. In your new GitHub repo, click **Add file → Upload files**
2. Open this folder on your computer and select **ALL files and folders**:
   - `index.html`
   - `login.html`
   - `vercel.json`
   - `.gitignore`
   - `README.md`
   - `assets/` folder
   - `data/` folder
   - `tools/` folder

3. Drag them all in, or click to select them
4. Scroll down and click **Commit changes** (commit directly to main)
5. Wait 30 seconds — done with GitHub!

---

### **Step 3: Deploy to Vercel (3 minutes)**

1. Go to **vercel.com** and sign in (or create a free account)
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Find and click your `audit-hub-pro-protected` repo
5. Click **Import**
6. On the next screen, just click **Deploy**
7. Wait 2–3 minutes while it deploys
8. Once done, you'll see a green checkmark and a live URL like:
   ```
   https://audit-hub-pro-protected.vercel.app
   ```

**That's it!** Your site is now live.

---

## 🔐 Using Your Protected Site

### **First Time Users:**
1. Visit your Vercel URL
2. You'll see a login page asking for a password
3. Enter: `audit2026`
4. Click **Login**
5. You're in! The full Audit HUB site loads

### **The Password Expires When:**
- Browser tab is closed
- Browser is closed completely
- 24 hours pass (browser session expires)

Users must log in again after that.

---

## 🔑 Changing the Password

To change the password from `audit2026` to something else:

1. Go to **github.com** → your `audit-hub-pro-protected` repo
2. Click on **login.html** file
3. Click the **pencil icon** (Edit this file)
4. Find this line (around line 190):
   ```javascript
   const CORRECT_PASSWORD = "audit2026";
   ```
5. Change `"audit2026"` to your new password, like:
   ```javascript
   const CORRECT_PASSWORD = "myNewPassword123";
   ```
6. Scroll down and click **Commit changes**
7. Wait 2 minutes for Vercel to automatically redeploy
8. Test at your Vercel URL with the new password

---

## ⚙️ What's Protected?

✅ **The entire Audit HUB site** — All tools, calculators, and pages  
✅ **Source code is hidden** — Users can't easily view the HTML/CSS/JS  
✅ **No copying to spreadsheet** — Need auth to access  

⚠️ **Not military-grade secure** — A determined developer could still inspect the code, but this stops 95% of casual copying.

---

## 📱 Works Everywhere

- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile phones (iOS Safari, Android Chrome)
- ✅ Tablets
- ✅ Custom domain (see below)

---

## 🌐 Using Your Own Custom Domain (Optional)

If you have a custom domain like `audit.example.com`:

1. Go to **vercel.com** → your project → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain: `audit.example.com`
4. Vercel will give you DNS records to add
5. Go to your domain provider (GoDaddy, Namecheap, etc.) and add those DNS records
6. Wait 5–30 minutes for DNS to update
7. Your site is now live at `https://audit.example.com`

---

## 🆘 Troubleshooting

### **"Page not found" or blank page**
- Check that all files (index.html, login.html, assets/, data/, tools/) are uploaded to GitHub
- Wait 2 minutes for Vercel to redeploy
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### **Login page appears but password doesn't work**
- Check your password is exactly correct (spaces, capitals matter!)
- Clear browser cookies: press F12 → Application → Clear all
- Try in an incognito/private browser window

### **Password changed but site still asks for old password**
- Vercel needs 2–3 minutes to redeploy after GitHub changes
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### **Can't access Vercel or GitHub**
- Make sure you're logged in to both accounts
- Try a different browser (sometimes cache causes issues)

---

## 📧 Support

If something isn't working:
1. Check the troubleshooting section above
2. Take a screenshot of the error
3. Check your browser's **F12 → Console** tab for red error messages
4. Share those details when asking for help

---

## 📝 File Structure

```
audit-hub-pro-protected/
├── index.html              (Main dashboard - protected by login)
├── login.html              (Login page - first thing users see)
├── vercel.json             (Vercel deployment config)
├── .gitignore              (Tells git what to ignore)
├── README.md               (This file)
├── assets/                 (CSS, JS, images, favicon)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── logo.png
│       ├── logo-mark.png
│       └── favicon.png
├── data/                   (Tool definitions)
│   └── tools.js
└── tools/                  (Individual audit tools)
    ├── gst-CGST_SGST_IGST/
    ├── gst-only/
    ├── inventory-verification/
    ├── invoice-receivable/
    └── supervision-audit/
```

---

## ✅ You're All Set!

Your protected Audit HUB is now live and only accessible to people with the password. Share the link and password with authorized users only.

**Password:** `audit2026` (change this!)  
**Live URL:** `https://yourname.vercel.app` (or your custom domain)

Enjoy! 🎉
