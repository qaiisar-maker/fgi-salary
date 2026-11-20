FGI SALARY SYSTEM v18 — README
==============================
Faisal Goraya Industry, Ali Pur Chattha | Tayyar: 20-11-2026
Repo: github.com/qaiisar-maker/fgi-salary (GitHub Pages)

1. ZIP MEIN KYA HAI
  index.html   poori app
  sw.js        service worker (CACHE 'fgi-salary-v18')
  manifest.json + icons/   asli install (PNG icons)
  lib/         jsPDF, autotable, html2canvas (koi CDN nahi)
  fonts/       Nunito + Playfair Display
  README.txt, FGI Salary v18 Test Report.txt

2. GITHUB PAR UPLOAD
  1) Pehle PURANI app se Settings > Export / Backup karke JSON mehfooz karein.
  2) Repo > Add file > Upload files.
  3) ZIP ke andar ki SAARI cheezein drag karein — lib/, fonts/, icons/ folders lazmi.
  4) Commit. 2-3 minute baad app kholein, 1-2 dafa band karke dobara kholein.
  5) Pehli dafa kholne par app purana data khud v18 mein shift karti hai
     (aur purane data ki copy "v18 se pehle ka data" ke naam se rakh leti hai).

3. NAYA KYA HAI
  * Tabs: Entry | Advance | Mid Month | Workers | Reports | Backle | Calc | Settings
  * WORKERS: Join date, auto code FGI-01, FGI-02 ... (kabhi dobara kisi ko nahi milta,
    worker delete ho jaye tab bhi), Joining Advance + wajah (optional),
    "Kaam chhor gaya" tick + date → active list se hat jata hai, record mehfooz.
  * ADVANCE page: kabhi bhi advance — date, worker, raqam, wajah (optional).
  * MID MONTH: mahine mein jitni dafa bhi kharcha, sab JUD jata hai.
  * SALARY ENTRY: wahi form, wahi formula. Prev Advance, New Advance (is mahine ke
    saare advance) aur Mid Month (is mahine ke saare kharche) KHUD aate hain.
    Deduction aap likhte hain; advance se zyada ho to save nahi hoti.
    Ek worker ki ek mahine mein sirf EK entry — dobara chunein to wahi Edit mein khulti hai.
    Neeche "is mahine ki entries" + baqi workers ki list; har entry Edit / Delete.
  * REPORTS > Worker Report: Kaam kar rahe / Chhor gaye. Worker chunein → advance kab,
    kitna, kyun; kitna wapas kata; mid month kab kitna; salary record.
    HD Image + PDF dono.
  * PDF: sab PDF ab Black & White print ke liye — safed background, kaala bold text,
    saaf lines. All Workers report ek page (pehle Page 2 khali aata tha).
  * Har jagah Edit + Delete; double tap se duplicate nahi banta.

4. HISAAB (formula bilkul wahi)
  overDays=floor(OT/8), OH=OT%8, OHP=Basic/30/8×OH, totalDays=Days+overDays,
  mSalary=Basic/30×totalDays+OHP, remSalary=mSalary−MidMonth,
  TotalAdv=PrevAdv+NewAdv, remAdv=TotalAdv−Deduction, totalRemSalary=remSalary−Deduction
  Prev Advance = is mahine se pehle ke saare advance − pehle ki saari katautiyan.
  Purana mahina edit karein to agle mahine khud theek ho jate hain.

5. PURANA DATA
  * 15 workers aap ki tarteeb se FGI-01..FGI-15. Tayyab Ali, Wahab Arshad,
    Sufayan Malik (2) = "Chhor gaye" (FGI-16..FGI-19).
  * Har worker ka baqi advance bilkul wahi jo pehle tha (Opening balance).
  * Ek worker + ek mahine ki duplicate entries mein se aakhri rakhi, baqi 8 ARCHIVE
    mein (Settings > Archive Download) — kuch delete nahi hua.
  * Purani backup JSON bhi import ho jati hai (khud v18 mein shift).
