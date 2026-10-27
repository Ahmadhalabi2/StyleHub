# StyleHub — Home / Explore Screen

واجهة مستخدم مبنية بـ React + TypeScript، مستوحاة من تصميم تطبيق موبايل لحجز صالونات الحلاقة والتجميل.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **CSS Modules** — تنسيق معزول لكل component
- **Plus Jakarta Sans** — خط Google Fonts مطبق على كل العناصر

---

## هيكلية المشروع

```
task/
├── index.html                  ← نقطة الدخول، فيها رابط Google Font
├── src/
│   ├── main.tsx                ← تهيئة React وربطه بالـ DOM
│   ├── App.tsx                 ← الـ layout الرئيسي، يجمع كل الـ components
│   ├── App.css                 ← styles خاصة بـ App wrapper
│   ├── index.css               ← global reset + font-family
│   ├── assets/
│   │   ├── icons/              ← ملفات SVG للأيقونات (Logo, Bell, Search, Filter, Categories, Nav)
│   │   ├── images/             ← صور الصالونات (photo.jpg, photo1.jpg)
│   │   └── hero.png            ← صورة البانر الرئيسية
│   └── components/
│       ├── Header.tsx          ← اللوغو + زر الإشعارات
│       ├── SearchBar.tsx       ← حقل البحث + زر الفلتر
│       ├── ExclusiveDeals.tsx  ← البانر البنفسجي مع العروض
│       ├── PopularCategories.tsx ← أيقونات الفئات الأفقية
│       ├── HighestRatedSalons.tsx ← كاردات الصالونات الأعلى تقييماً
│       └── BottomNav.tsx       ← شريط التنقل السفلي
```

---

## طريقة تقسيم الـ Components

كل قسم من الواجهة تحول لـ component مستقل بملف TSX وملف CSS Module خاص فيه.

### Header
يعرض لوغو StyleHub على اليسار وزر الإشعارات على اليمين.
الأيقونات مستوردة مباشرة كـ SVG assets.

### SearchBar
حقل input مع أيقونة بحث على اليسار وزر فلتر على اليمين.
لا يوجد state — عرض فقط في هذه المرحلة.

### ExclusiveDeals
بانر بخلفية بنفسجية `#6c3ef4` يحتوي:
- نص العرض + عنوان كبير
- زر "Book Now" بـ border أبيض شفاف
- صورة floating داخل البانر مع margin من الجوانب

### PopularCategories
قائمة أفقية قابلة للتمرير (scroll)، كل عنصر يحتوي أيقونة SVG داخل دائرة بنفسجية فاتحة ونص تحتها.

### HighestRatedSalons
كاردات أفقية قابلة للتمرير. كل كارد يحتوي:
- صورة بـ padding وborder radius من الداخل
- اسم الصالون + تقييم بالنجوم
- زر سهم رمادي

### BottomNav
شريط تنقل سفلي بـ 4 عناصر: Home, Booking, Favorite, Profile.
يستخدم `useState` في `App.tsx` لتتبع التبويب النشط.
العنصر النشط يتغير لونه للبنفسجي، الباقين رماديين.

---

## كيف يعمل الـ CSS Modules

كل component عنده ملف `.module.css` خاص فيه. هذا يعني:
- لا تعارض بين أسماء الـ classes
- كل style معزول بالكامل داخل الـ component
- يُستورد كـ object: `import styles from './Header.module.css'`
- يُستخدم هيك: `className={styles.header}`

---

## الأصول (Assets)

### الأيقونات المستخدمة من مجلد `/icons`

| الملف | الاستخدام |
|---|---|
| `Logo Container.svg` | لوغو StyleHub في الـ Header |
| `style=doutone.svg` | أيقونة الجرس (Notifications) |
| `Frame (8).svg` | أيقونة البحث |
| `Frame (9).svg` | أيقونة الفلتر |
| `Frame.svg` | كاتيغوري Haircut |
| `Frame (1).svg` | كاتيغوري Make Up |
| `Frame (2).svg` | كاتيغوري Shaving |
| `Frame (3).svg` | كاتيغوري Coloring |
| `Frame (7).svg` | كاتيغوري Styling |
| `Frame (4).svg` | تبويب Home في الـ BottomNav |
| `Frame (5).svg` | تبويب Booking |
| `Group.svg` | تبويب Favorite + أيقونة القلب في الكاردات |
| `Frame (6).svg` | تبويب Profile |

---

## تشغيل المشروع

```bash
# تثبيت الـ dependencies
npm install --legacy-peer-deps

# تشغيل بيئة التطوير
npm run dev

# بناء النسخة النهائية
npm run build
```
