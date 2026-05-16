# Formspree + Google Sheets Setup Guide

This guide shows how to connect the membership and charter signatory forms to Formspree and Google Sheets.

## Step 1: Create Google Sheets

### Membership Applications Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet called `Civic Data Tech - Membership`
3. Add these column headers in row 1:
   - A: `Timestamp`
   - B: `Name`
   - C: `Email`
   - D: `Organization`
   - E: `Membership Tier`
   - F: `Message`

### Charter Signatories Sheet
1. Create another new sheet called `Civic Data Tech - Charter Signatories`
2. Add these column headers in row 1:
   - A: `Timestamp`
   - B: `Name`
   - C: `Email`
   - D: `Organization`
   - E: `Category`
   - F: `Role`
   - G: `Message`

## Step 2: Set Up Formspree

### For Membership Form:
1. Go to [formspree.io](https://formspree.io) and sign up (or log in)
2. Click **"New Form"**
3. Name it: `Membership Applications`
4. Select **"Google Sheets"** as the integration
5. Connect your Google account
6. Select the `Civic Data Tech - Membership` sheet
7. Click **Create**
8. Formspree will show you a **Form ID** (looks like `f/abc123xyz`)
9. Copy this Form ID

### For Charter Form:
1. Repeat the same process
2. Name it: `Charter Signatories`
3. Select the `Civic Data Tech - Charter Signatories` sheet
4. Copy the Charter **Form ID**

## Step 3: Update Your React Code

### In `client/src/pages/Membership.tsx`:
Find this line (around line 135):
```jsx
action="https://formspree.io/f/YOUR_FORM_ID"
```

Replace `YOUR_FORM_ID` with your actual Membership Form ID from Formspree:
```jsx
action="https://formspree.io/f/abcd1234xyz"
```

### In `client/src/pages/Charter.tsx`:
Find this line (around line 210):
```jsx
action="https://formspree.io/f/YOUR_CHARTER_FORM_ID"
```

Replace `YOUR_CHARTER_FORM_ID` with your actual Charter Form ID:
```jsx
action="https://formspree.io/f/defg5678xyz"
```

## Step 4: Test It Out

1. Run your dev server: `npm run dev`
2. Navigate to `/membership` and `/charter`
3. Click "Apply Now" (Membership) or "Sign the Charter" (Charter)
4. Fill out the form and submit
5. Check your Google Sheets—the data should appear automatically!

## Step 5: Customize Formspree Settings (Optional)

In the Formspree dashboard for each form, you can:

- **Add a confirmation email** to the submitter (e.g., "Thanks for signing!")
- **Set up alerts** when new submissions arrive
- **Customize the redirect URL** after form submission (e.g., `/thank-you`)
- **Add spam filtering** (reCAPTCHA)

### To Add a Confirmation Email:
1. Go to your form settings in Formspree
2. Under **"Emails"**, toggle on **"Send confirmation email to submitter"**
3. Customize the message (optional)
4. Save

### To Set a Post-Submission Redirect:
1. In form settings, find **"Redirect after submission"**
2. Set it to `https://civicdata.tech/thank-you`
3. (You can create a simple thank-you page if you want)

---

## How It Works

**Form Flow:**
1. User fills form on your site (membership or charter)
2. Form submits to Formspree via `POST`
3. Formspree receives the data and sends it to your Google Sheet
4. Data appears as a new row in your sheet automatically
5. Formspree can send you email alerts (optional)

**Benefits:**
- ✅ No backend code needed
- ✅ Data stored in familiar Google Sheets
- ✅ Non-technical team members can view/manage data
- ✅ Formspree handles spam protection and email notifications
- ✅ Completely free for reasonable usage

---

## Troubleshooting

**Form not submitting?**
- Check that you replaced `YOUR_FORM_ID` with the actual ID
- Make sure the form ID starts with `f/`
- Check your browser console for errors

**Data not appearing in Google Sheets?**
- Verify the Google Sheets integration is enabled in Formspree dashboard
- Check that column names match the form field names
- Wait a few seconds—sometimes there's a slight delay

**Getting too many spam submissions?**
- In Formspree settings, enable reCAPTCHA
- This adds a checkbox to prevent bots

---

## Next Steps

Once submissions start coming in:

1. **Monitor submissions** in your Google Sheets
2. **Reach out to applicants** at their provided emails
3. **Track membership status** (e.g., add a "Status" column: "Applied", "Approved", "Active")
4. **Export reports** from Google Sheets for team meetings

You're all set! 🎉
