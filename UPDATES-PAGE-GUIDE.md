# Updates Page Guide - How to Add News & Updates

## 📍 Page Location

**URL:** `/updates`  
**File:** `/app/updates/page.tsx`  
**Layout:** `/app/updates/layout.tsx`

## 🎯 Features

✅ **Blog-style layout** for news and updates  
✅ **Bilingual content** (English + Urdu) with toggle  
✅ **Category filtering** (All, News, Update, Event)  
✅ **SEO optimized** with structured data  
✅ **Responsive design** (mobile-friendly)  
✅ **Easy to update** - just edit the updates array

## 📝 How to Add New Updates

### Step 1: Open the Updates File

Edit: `/app/updates/page.tsx`

### Step 2: Find the Updates Array

Look for the `updates` constant (around line 20-80)

### Step 3: Add a New Update Object

```typescript
{
  id: 4,  // Next number in sequence
  date: "2025-01-30",  // YYYY-MM-DD format
  category: "News",  // Options: "News", "Update", "Event"
  title: {
    en: "Your English Title Here",
    ur: "آپ کا اردو عنوان یہاں"
  },
  excerpt: {
    en: "Short English description (1-2 sentences)",
    ur: "مختصر اردو تفصیل (1-2 جملے)"
  },
  content: {
    en: "Full English content paragraph",
    ur: "مکمل اردو مواد کا پیراگراف"
  },
  tags: ["Tag1", "Tag2", "Tag3"]  // Relevant tags
}
```

### Step 4: Save and Rebuild

```bash
npm run build
```

## 📋 Update Template

Copy this template for new updates:

```typescript
{
  id: [NEXT_ID],
  date: "YYYY-MM-DD",
  category: "News" | "Update" | "Event",
  title: {
    en: "English Title",
    ur: "اردو عنوان"
  },
  excerpt: {
    en: "English excerpt (1-2 sentences)",
    ur: "اردو خلاصہ (1-2 جملے)"
  },
  content: {
    en: "Full English content",
    ur: "مکمل اردو مواد"
  },
  tags: ["Tag1", "Tag2"]
}
```

## 🎨 Categories

- **News**: General news and announcements
- **Update**: System updates and feature releases
- **Event**: Upcoming events and campaigns

## 🔍 SEO Features

- ✅ Blog schema (JSON-LD)
- ✅ NewsArticle schema for each post
- ✅ Proper date formatting
- ✅ Category tags
- ✅ Bilingual content
- ✅ Meta tags in layout.tsx

## 📱 Display Features

- **Language Toggle**: Switch between English/Urdu
- **Category Filter**: Filter by News/Update/Event
- **Date Display**: Formatted dates
- **Tags**: Clickable tag system
- **Responsive Cards**: Mobile-friendly layout

## 🚀 Future Enhancements (Optional)

### Move to JSON File:
You can move the updates array to `/public/data/updates.json` and fetch it:

```typescript
// In page.tsx
const [updates, setUpdates] = useState<Update[]>([]);

useEffect(() => {
  fetch("/data/updates.json")
    .then((res) => res.json())
    .then((data) => setUpdates(data));
}, []);
```

### Add Pagination:
For many updates, add pagination controls

### Add Search:
Add search functionality for updates

### Add RSS Feed:
Create `/app/feed.xml` for RSS subscribers

## 📊 Current Sample Updates

The page includes 3 sample updates:
1. New E-Challan System in Punjab (News)
2. Karachi PSID Generation (Update)
3. Islamabad Awareness Campaign (Event)

## ✅ Checklist for New Updates

- [ ] Add new update object to array
- [ ] Include both English and Urdu content
- [ ] Set correct date (YYYY-MM-DD)
- [ ] Choose appropriate category
- [ ] Add relevant tags
- [ ] Test language toggle
- [ ] Verify category filter works
- [ ] Rebuild site
- [ ] Check display on mobile

## 🎉 Summary

The Updates page is ready to use! Simply:
1. Edit `/app/updates/page.tsx`
2. Add new update objects to the array
3. Rebuild the site
4. New content appears automatically

**No backend needed - all updates are static and easy to manage!**
