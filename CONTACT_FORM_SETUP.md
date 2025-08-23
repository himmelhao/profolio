# Contact Form Setup Guide

## How to Receive Messages from Your Contact Form

I've updated your contact page to hide your personal email and phone number from the public. Instead, visitors can send you messages through a contact form. Here's how to set it up to receive these messages:

## Option 1: Formspree (Recommended - Easy Setup)

1. **Sign up for Formspree:**
   - Go to https://formspree.io/
   - Create a free account (allows 50 submissions/month)

2. **Create a new form:**
   - Click "New Form"
   - Enter your email address (where you want to receive messages)
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update your code:**
   - Open `src/pages/Contact.jsx`
   - Find line with `'https://formspree.io/f/YOUR_FORM_ID'`
   - Replace `YOUR_FORM_ID` with your actual form ID from Formspree

4. **That's it!** Messages will be sent to your email automatically.

## Option 2: Netlify Forms (If hosting on Netlify)

1. **Add Netlify form attributes:**
   - Add `netlify` and `netlify-honeypot="bot-field"` to your form tag
   - Add a hidden input: `<input type="hidden" name="bot-field" />`

2. **Update the form submission to use Netlify's endpoint**

## Option 3: EmailJS (Alternative)

1. **Sign up for EmailJS:**
   - Go to https://www.emailjs.com/
   - Create account and configure email service

2. **Follow their React integration guide**

## Current Setup

The contact form now:
- ✅ Hides your email and phone number from public view
- ✅ Shows a professional contact form
- ✅ Includes loading states and success/error messages
- ✅ Has proper validation

## What Visitors See

- Your location (Gothenburg, Sweden) - still visible
- A contact form to send you messages
- No access to your personal email or phone

## To Test the Form

1. Set up one of the backend options above
2. Fill out the form on your contact page
3. Check your email for the message

## Security Features

- Form validation prevents spam
- No personal contact info exposed
- Messages go through secure third-party services
- Rate limiting available through form services

Choose Option 1 (Formspree) for the quickest setup!
