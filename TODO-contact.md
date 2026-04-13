# Fix Contact Form - EmailJS Error (Something went wrong)

## Current Issue
- Form submit → \"Something went wrong\" alert
- Console: ERROR: {} (EmailJS config failure)

## Plan Steps (Total: 5)
- [x] Step 1: Create .env.local with NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- [x] Step 2: Edit app/components/Contact.jsx - Add emailjs.init(), use env var, better error logs
- [ ] Step 3: Restart dev server (npm run dev)
- [ ] Step 4: Test form submit - check Console/Network (emailjs.com requests 200?)
- [ ] Step 5: User verify EmailJS dashboard (service_6skgt3x active?)

## Notes
- Verify keys at dashboard.emailjs.com
- Fallback: WhatsApp if EmailJS fails

**Progress: Steps 1-2 complete. Next: Restart dev server & test.**

**Next: User check if created OK → proceed Step 1**
