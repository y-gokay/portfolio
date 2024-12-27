1. Tailwind

2. Renkler
   Tailwind, renkler için bir dizi yardımcı sınıf sunar. İşte bazı temel renk sınıfları:

Text Renkleri:
text-{color}: text-red-500, text-blue-700, vb.
Background Renkleri:
bg-{color}: bg-gray-200, bg-indigo-500, vb.
Border Renkleri:
border-{color}: border-green-500, border-gray-400, vb.

3. Kenarlıklar
   Border:
   border: Kenarlık ekler.
   border-{side}: border-t, border-b, border-l, border-r.
   Border Radius:
   rounded: rounded-sm, rounded-md, rounded-lg, vb.
   Border Width:
   border-{size}: border-2, border-4, border-8.

4. Flexbox ve Grid
   Flexbox:

flex: Flex konteyneri yapar.
flex-row, flex-col: Yön belirler.
justify-{content}: justify-start, justify-center, justify-between, vb.
items-{alignment}: items-center, items-end, vb.
gap-{size}: gap-4, gap-2, vb.
Grid:

grid: Grid konteyneri yapar.
grid-cols-{n}: grid-cols-1, grid-cols-3, vb.
grid-rows-{n}: grid-rows-2, grid-rows-3, vb.
gap-{size}: gap-2, gap-4, vb.

5. Spacing (Boşluklar)
   Padding:
   p-{size}, pt-{size}, pb-{size}, pl-{size}, pr-{size}.
   Margin:
   m-{size}, mt-{size}, mb-{size}, ml-{size}, mr-{size}.

6. Tipografi
   Font Size:
   text-{size}: text-sm, text-base, text-lg, vb.
   Font Weight:
   font-{weight}: font-light, font-semibold, font-bold.
   Line Height:
   leading-{size}: leading-tight, leading-normal, leading-loose.
   Text Alignment:
   text-{align}: text-left, text-center, text-right.
   Text Decoration:
   underline, line-through, no-underline.

7. Görünürlük ve Gizleme
   Visibility:

visible, invisible.
Display:

block, inline, inline-block, hidden.

8. Yönelim ve Boyut
   Width:

w-{size}: w-16, w-1/2, w-full.
Height:

h-{size}: h-16, h-1/2, h-full.
Max Width:

max-w-{size}: max-w-xs, max-w-md, max-w-full.

9. Durumlar ve Ekran
   Responsive:

sm:{class}, md:{class}, lg:{class}, xl:{class}.
Hover:

hover:{class}: hover:bg-blue-500.
Focus:

focus:{class}: focus:outline-none.
Active:

active:{class}: active:bg-blue-700.

10. Z-Index
    Z-Index:
    z-{index}: z-10, z-20, z-auto.

11. Arka Planlar ve Opaklık
    Background Opacity:
    bg-opacity-{value}: bg-opacity-50, bg-opacity-25, vb.
    Opacity:
    opacity-{value}: opacity-50, opacity-75.

12. Gölgeler
    Box Shadow:
    shadow, shadow-sm, shadow-md, shadow-lg, shadow-xl.

13. Animasyon ve Geçişler
    Transition:

transition-all, transition-colors, transition-transform.
Animation:

animate-spin, animate-ping, animate-bounce.

14. Farklı Ekran Boyutları İçin Özellikler
    Mobil ve Tablet Desteği:
    sm:, md:, lg:, xl: gibi sınıflar kullanarak farklı ekran boyutları için düzenlemeler yapılabilir.
