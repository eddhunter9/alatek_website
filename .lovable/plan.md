
# ALATEK — Strona wizytówka firmy elektronicznej

## Ogólny styl
- Ciemny, technologiczny motyw (granatowo-niebieski) jak na obrazach referencyjnych
- Logo ALATEK (przesłane) w nagłówku i stopce
- Favicon z przesłanego pliku 512px.png
- Jedna strona (single-page), płynne przewijanie między sekcjami

## Sekcja 1: Hero / Nagłówek
- Pełnoekranowy baner z ciemnym tłem w stylu tech/elektroniki
- Logo ALATEK w lewym górnym rogu
- Nawigacja u góry (kotwice: Software, Products, Contact)
- Główny nagłówek i krótki slogan firmy
- Przycisk CTA kierujący do sekcji kontaktowej

## Sekcja 2: Software (4 karty)
- Nagłówek sekcji np. "Software Solutions"
- 4 karty w siatce, każda z:
  - Ikoną/obrazem tematycznym
  - Nazwą produktu
  - 1 podpunkt widoczny domyślnie
  - Przycisk "Show more" rozwijający 2 dodatkowe podpunkty

## Sekcja 3: Products / Hardware (4 karty)
- Nagłówek sekcji np. "Key ALATEK Products"
- 4 karty w kolorowym, dynamicznym stylu (jak na obrazie referencyjnym)
  - Nazwa produktu
  - 1 podpunkt widoczny domyślnie
  - Przycisk "Show more" rozwijający 2 kolejne podpunkty

## Sekcja 4: Formularz kontaktowy
- Nagłówek "Contact Us"
- Lewa strona: dane kontaktowe placeholderowe (email, telefon, adres)
- Prawa strona: formularz z polami Name, Email, Message i przycisk "Send"
- Formularz wymagający backendu — zostanie podłączony przez Lovable Cloud (edge function do obsługi wysyłki wiadomości e-mail)

## Sekcja 5: Stopka (Footer)
- Logo ALATEK + krótki opis firmy
- Kolumna "Company Details" z placeholderowymi danymi (adres, NIP, email, telefon)
- Kolumna "Social Media" z ikonami Facebook, Instagram, YouTube
- Pasek copyright na dole: "© 2026 Alatek, Inc. All Rights Reserved."

## Backend (Lovable Cloud)
- Edge function do wysyłania wiadomości z formularza kontaktowego (np. zapis do bazy lub wysyłka maila)
- Walidacja formularza po stronie klienta (zod) i serwera

## Produkty — zawartość
- Nazwy i opisy produktów zostaną dostarczone przez Ciebie po rozpoczęciu implementacji (8 produktów × 3 podpunkty każdy)
