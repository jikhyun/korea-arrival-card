// Korea Arrival Card — field translations for 155 languages
// Field order matches the physical paper form exactly
// Fields: surname, givenName, gender, nationality, dob, occupation,
//         addressInKorea, purposeOfVisit, departureDate, departureFlightNo, signature

const FORM_DATA = {

  // ── Korean (original) ──────────────────────────────────────────
  ko: {
    formTitle: "입국신고서", country: "대한민국", travelerInfo: "작성 안내", langCode: "KO", rtl: false,
    fields: {
      surname:           { label: "성 (Family Name)",        hint: "여권에 기재된 성 (영문)" },
      givenName:         { label: "이름 (Given Name)",        hint: "여권에 기재된 이름 (영문)" },
      gender:            { label: "성별",                    options: ["남 Male", "여 Female"] },
      nationality:       { label: "국적",                    hint: "여권에 기재된 국적" },
      dob:               { label: "생년월일",                 hint: "년(Y) 월(M) 일(D) 순서로 기재" },
      occupation:        { label: "직업",                    hint: "본국에서의 직업 또는 직종" },
      addressInKorea:    { label: "한국 내 체류 주소",         hint: "호텔명·숙소명 또는 상세 주소 필수 기재\n예) 서울 ○○ 호텔 / 서울시 중구 명동길 1" },
      purposeOfVisit:    { label: "입국 목적",
        options: ["관광", "개별 여행", "단체 관광", "비즈니스", "외교/공무", "질병치료/의료", "가족·친지·지인 방문", "회의/행사", "취업", "학업", "스포츠 경기", "기타"] },
      departureDate:     { label: "출발일자",                 hint: "한국 출국 예정일" },
      departureFlightNo: { label: "출발 편명·선박명",          hint: "선택 사항 (Optional)" },
      signature:         { label: "서명",                    hint: "여권상 서명" },
    }
  },

  // ── English ────────────────────────────────────────────────────
  en: {
    formTitle: "Arrival Card", country: "KOREA", travelerInfo: "How to fill in", langCode: "EN", rtl: false,
    fields: {
      surname:           { label: "Family Name",             hint: "As shown on your passport" },
      givenName:         { label: "Given Name",              hint: "As shown on your passport" },
      gender:            { label: "Gender",                  options: ["Male", "Female"] },
      nationality:       { label: "Nationality",             hint: "Country of citizenship" },
      dob:               { label: "Date of Birth",           hint: "Fill in order: Year / Month / Day" },
      occupation:        { label: "Occupation",              hint: "Your job or profession in your country" },
      addressInKorea:    { label: "Address in Korea",        hint: "Fill in detail — hotel name, full address, or sponsor company\ne.g. Seoul Grand Hotel / 1 Myeongdong-gil, Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Purpose of Visit",
        options: ["Tour", "Individual Travel", "Group Tour", "Business", "Diplomatic / Official", "Medical Treatment", "Visit family / relatives / friends", "Conference / Event", "Employment", "Study", "Sports Event", "Others"] },
      departureDate:     { label: "Departure Date",          hint: "Planned date of departure from Korea" },
      departureFlightNo: { label: "Departure Flight / Vessel No.", hint: "Optional" },
      signature:         { label: "Signature",               hint: "Sign as in your passport" },
    }
  },

  // ── Chinese Simplified ─────────────────────────────────────────
  "zh-CN": {
    formTitle: "入境申报单", country: "韩国", travelerInfo: "填写说明", langCode: "ZH", rtl: false,
    fields: {
      surname:           { label: "姓",                      hint: "与护照完全一致" },
      givenName:         { label: "名",                      hint: "与护照完全一致" },
      gender:            { label: "性别",                    options: ["男", "女"] },
      nationality:       { label: "国籍",                    hint: "护照上的国籍" },
      dob:               { label: "出生日期",                 hint: "按顺序填写：年 / 月 / 日" },
      occupation:        { label: "职业",                    hint: "您在本国的职业" },
      addressInKorea:    { label: "韩国住址",                 hint: "请填写详细地址——酒店名称、完整地址或担保公司\n例）首尔○○酒店 / 首尔市中区明洞街1号" },
      purposeOfVisit:    { label: "访问目的",
        options: ["观光", "个人旅行", "团体旅行", "商务", "外交/公务", "医疗", "探亲/访友", "会议/活动", "就业", "学习", "体育赛事", "其他"] },
      departureDate:     { label: "出发日期",                 hint: "预计离开韩国的日期" },
      departureFlightNo: { label: "出发航班/船次号",           hint: "选填" },
      signature:         { label: "签名",                    hint: "与护照签名一致" },
    }
  },

  // ── Chinese Traditional ────────────────────────────────────────
  "zh-TW": {
    formTitle: "入境申報單", country: "韓國", travelerInfo: "填寫說明", langCode: "ZH-TW", rtl: false,
    fields: {
      surname:           { label: "姓",                      hint: "與護照完全一致" },
      givenName:         { label: "名",                      hint: "與護照完全一致" },
      gender:            { label: "性別",                    options: ["男", "女"] },
      nationality:       { label: "國籍",                    hint: "護照上的國籍" },
      dob:               { label: "出生日期",                 hint: "按順序填寫：年 / 月 / 日" },
      occupation:        { label: "職業",                    hint: "您在本國的職業" },
      addressInKorea:    { label: "韓國住址",                 hint: "請填寫詳細地址——飯店名稱、完整地址或擔保公司\n例）首爾○○飯店 / 首爾市中區明洞街1號" },
      purposeOfVisit:    { label: "訪問目的",
        options: ["觀光", "個人旅行", "團體旅行", "商務", "外交/公務", "醫療", "探親/訪友", "會議/活動", "就業", "學習", "體育賽事", "其他"] },
      departureDate:     { label: "出發日期",                 hint: "預計離開韓國的日期" },
      departureFlightNo: { label: "出發航班/船次號",           hint: "選填" },
      signature:         { label: "簽名",                    hint: "與護照簽名一致" },
    }
  },

  // ── Spanish ────────────────────────────────────────────────────
  es: {
    formTitle: "Tarjeta de llegada", country: "COREA", travelerInfo: "Instrucciones", langCode: "ES", rtl: false,
    fields: {
      surname:           { label: "Apellido",                hint: "Tal como aparece en el pasaporte" },
      givenName:         { label: "Nombre",                  hint: "Tal como aparece en el pasaporte" },
      gender:            { label: "Sexo",                    options: ["Masculino", "Femenino"] },
      nationality:       { label: "Nacionalidad",            hint: "País de ciudadanía" },
      dob:               { label: "Fecha de nacimiento",     hint: "En orden: Año / Mes / Día" },
      occupation:        { label: "Ocupación",               hint: "Su trabajo o profesión en su país" },
      addressInKorea:    { label: "Dirección en Corea",      hint: "Complete detalladamente — nombre del hotel, dirección completa o empresa patrocinadora\nEj.) Hotel Grand Seúl / Calle Myeongdong 1, Jung-gu, Seúl" },
      purposeOfVisit:    { label: "Motivo de visita",
        options: ["Turismo", "Viaje individual", "Viaje en grupo", "Negocios", "Diplomático / Oficial", "Tratamiento médico", "Visita a familia / amigos", "Conferencia / Evento", "Empleo", "Estudio", "Evento deportivo", "Otros"] },
      departureDate:     { label: "Fecha de salida",         hint: "Fecha prevista de salida de Corea" },
      departureFlightNo: { label: "N° de vuelo/barco salida",hint: "Opcional" },
      signature:         { label: "Firma",                   hint: "Firme como en su pasaporte" },
    }
  },

  // ── Hindi ──────────────────────────────────────────────────────
  hi: {
    formTitle: "आगमन कार्ड", country: "कोरिया", travelerInfo: "भरने के निर्देश", langCode: "HI", rtl: false,
    fields: {
      surname:           { label: "उपनाम (Family Name)",     hint: "पासपोर्ट के अनुसार" },
      givenName:         { label: "पहला नाम (Given Name)",    hint: "पासपोर्ट के अनुसार" },
      gender:            { label: "लिंग",                    options: ["पुरुष", "महिला"] },
      nationality:       { label: "राष्ट्रीयता",              hint: "नागरिकता का देश" },
      dob:               { label: "जन्म तिथि",                hint: "क्रम में भरें: वर्ष / माह / दिन" },
      occupation:        { label: "व्यवसाय",                  hint: "अपने देश में आपका काम या पेशा" },
      addressInKorea:    { label: "कोरिया में पता",            hint: "विस्तार से भरें — होटल का नाम, पूरा पता\nउदा.) सियोल ग्रैंड होटल / 1 म्योंगदोंग-गिल, जुंग-गु, सियोल" },
      purposeOfVisit:    { label: "यात्रा का उद्देश्य",
        options: ["पर्यटन", "व्यक्तिगत यात्रा", "समूह पर्यटन", "व्यापार", "राजनयिक / आधिकारिक", "चिकित्सा उपचार", "परिवार / मित्र से मिलना", "सम्मेलन / कार्यक्रम", "रोजगार", "अध्ययन", "खेल आयोजन", "अन्य"] },
      departureDate:     { label: "प्रस्थान तिथि",            hint: "कोरिया से प्रस्थान की नियोजित तिथि" },
      departureFlightNo: { label: "प्रस्थान उड़ान/पोत संख्या", hint: "वैकल्पिक" },
      signature:         { label: "हस्ताक्षर",               hint: "पासपोर्ट के अनुसार हस्ताक्षर" },
    }
  },

  // ── Arabic ─────────────────────────────────────────────────────
  ar: {
    formTitle: "بطاقة الوصول", country: "كوريا", travelerInfo: "تعليمات التعبئة", langCode: "AR", rtl: true,
    fields: {
      surname:           { label: "اسم العائلة",             hint: "كما هو مدوّن في جواز السفر" },
      givenName:         { label: "الاسم الأول",             hint: "كما هو مدوّن في جواز السفر" },
      gender:            { label: "الجنس",                   options: ["ذكر", "أنثى"] },
      nationality:       { label: "الجنسية",                 hint: "دولة المواطنة" },
      dob:               { label: "تاريخ الميلاد",           hint: "بالترتيب: السنة / الشهر / اليوم" },
      occupation:        { label: "المهنة",                  hint: "عملك أو مهنتك في بلدك" },
      addressInKorea:    { label: "العنوان في كوريا",         hint: "يُملأ بالتفصيل — اسم الفندق أو العنوان الكامل\nمثال: فندق سيول جراند / شارع ميونغدونغ 1، جونغ-غو، سيول" },
      purposeOfVisit:    { label: "غرض الزيارة",
        options: ["سياحة", "سفر فردي", "جولة جماعية", "أعمال", "دبلوماسي / رسمي", "علاج طبي", "زيارة العائلة / الأصدقاء", "مؤتمر / فعالية", "توظيف", "دراسة", "فعالية رياضية", "أخرى"] },
      departureDate:     { label: "تاريخ المغادرة",          hint: "تاريخ المغادرة المخطط من كوريا" },
      departureFlightNo: { label: "رقم رحلة/سفينة المغادرة",  hint: "اختياري" },
      signature:         { label: "التوقيع",                 hint: "وقّع كما في جواز سفرك" },
    }
  },

  // ── Bengali ────────────────────────────────────────────────────
  bn: {
    formTitle: "আগমন কার্ড", country: "কোরিয়া", travelerInfo: "পূরণের নির্দেশ", langCode: "BN", rtl: false,
    fields: {
      surname:           { label: "পদবি (Family Name)",      hint: "পাসপোর্ট অনুযায়ী" },
      givenName:         { label: "নাম (Given Name)",        hint: "পাসপোর্ট অনুযায়ী" },
      gender:            { label: "লিঙ্গ",                   options: ["পুরুষ", "মহিলা"] },
      nationality:       { label: "জাতীয়তা",                hint: "নাগরিকত্বের দেশ" },
      dob:               { label: "জন্ম তারিখ",              hint: "ক্রমে লিখুন: বছর / মাস / দিন" },
      occupation:        { label: "পেশা",                    hint: "আপনার দেশে আপনার কাজ বা পেশা" },
      addressInKorea:    { label: "কোরিয়ায় ঠিকানা",          hint: "বিস্তারিত লিখুন — হোটেলের নাম বা পূর্ণ ঠিকানা\nযেমন: সিউল গ্র্যান্ড হোটেল / ১ ম্যোংডং-গিল, জুং-গু, সিউল" },
      purposeOfVisit:    { label: "ভ্রমণের উদ্দেশ্য",
        options: ["পর্যটন", "ব্যক্তিগত ভ্রমণ", "দলীয় ভ্রমণ", "ব্যবসা", "কূটনৈতিক / সরকারি", "চিকিৎসা", "পরিবার / বন্ধু পরিদর্শন", "সম্মেলন / অনুষ্ঠান", "কর্মসংস্থান", "অধ্যয়ন", "ক্রীড়া ইভেন্ট", "অন্যান্য"] },
      departureDate:     { label: "প্রস্থান তারিখ",           hint: "কোরিয়া ছাড়ার পরিকল্পিত তারিখ" },
      departureFlightNo: { label: "প্রস্থান ফ্লাইট/জাহাজ নং", hint: "ঐচ্ছিক" },
      signature:         { label: "স্বাক্ষর",                hint: "পাসপোর্ট অনুযায়ী স্বাক্ষর" },
    }
  },

  // ── Portuguese ─────────────────────────────────────────────────
  pt: {
    formTitle: "Cartão de Chegada", country: "COREIA", travelerInfo: "Instruções de preenchimento", langCode: "PT", rtl: false,
    fields: {
      surname:           { label: "Sobrenome",               hint: "Conforme no passaporte" },
      givenName:         { label: "Nome",                    hint: "Conforme no passaporte" },
      gender:            { label: "Sexo",                    options: ["Masculino", "Feminino"] },
      nationality:       { label: "Nacionalidade",           hint: "País de cidadania" },
      dob:               { label: "Data de nascimento",      hint: "Na ordem: Ano / Mês / Dia" },
      occupation:        { label: "Ocupação",                hint: "Seu trabalho ou profissão em seu país" },
      addressInKorea:    { label: "Endereço na Coreia",      hint: "Preencha com detalhes — nome do hotel ou endereço completo\nEx.) Hotel Grand Seul / Rua Myeongdong 1, Jung-gu, Seul" },
      purposeOfVisit:    { label: "Motivo da visita",
        options: ["Turismo", "Viagem individual", "Viagem em grupo", "Negócios", "Diplomático / Oficial", "Tratamento médico", "Visita a familiares / amigos", "Conferência / Evento", "Emprego", "Estudos", "Evento esportivo", "Outros"] },
      departureDate:     { label: "Data de partida",         hint: "Data prevista de saída da Coreia" },
      departureFlightNo: { label: "N° voo/navio de saída",   hint: "Opcional" },
      signature:         { label: "Assinatura",              hint: "Assine como no passaporte" },
    }
  },

  // ── Indonesian ─────────────────────────────────────────────────
  id: {
    formTitle: "Kartu Kedatangan", country: "KOREA", travelerInfo: "Petunjuk pengisian", langCode: "ID", rtl: false,
    fields: {
      surname:           { label: "Nama Keluarga",           hint: "Sesuai yang tertera di paspor" },
      givenName:         { label: "Nama Depan",              hint: "Sesuai yang tertera di paspor" },
      gender:            { label: "Jenis Kelamin",           options: ["Laki-laki", "Perempuan"] },
      nationality:       { label: "Kewarganegaraan",         hint: "Negara kewarganegaraan" },
      dob:               { label: "Tanggal Lahir",           hint: "Urutan: Tahun / Bulan / Tanggal" },
      occupation:        { label: "Pekerjaan",               hint: "Pekerjaan atau profesi Anda di negara asal" },
      addressInKorea:    { label: "Alamat di Korea",         hint: "Isi dengan lengkap — nama hotel atau alamat lengkap\nContoh: Hotel Grand Seoul / Jl. Myeongdong 1, Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Tujuan Kunjungan",
        options: ["Wisata", "Perjalanan individu", "Tur kelompok", "Bisnis", "Diplomatik / Resmi", "Perawatan medis", "Kunjungi keluarga / teman", "Konferensi / Acara", "Pekerjaan", "Studi", "Acara olahraga", "Lainnya"] },
      departureDate:     { label: "Tanggal Keberangkatan",   hint: "Tanggal rencana meninggalkan Korea" },
      departureFlightNo: { label: "No. Penerbangan/Kapal",   hint: "Opsional" },
      signature:         { label: "Tanda Tangan",            hint: "Tanda tangani seperti di paspor" },
    }
  },

  // ── French ─────────────────────────────────────────────────────
  fr: {
    formTitle: "Carte d'arrivée", country: "CORÉE", travelerInfo: "Instructions de remplissage", langCode: "FR", rtl: false,
    fields: {
      surname:           { label: "Nom de famille",          hint: "Tel qu'indiqué sur le passeport" },
      givenName:         { label: "Prénom",                  hint: "Tel qu'indiqué sur le passeport" },
      gender:            { label: "Sexe",                    options: ["Masculin", "Féminin"] },
      nationality:       { label: "Nationalité",             hint: "Pays de citoyenneté" },
      dob:               { label: "Date de naissance",       hint: "Dans l'ordre : Année / Mois / Jour" },
      occupation:        { label: "Profession",              hint: "Votre travail ou métier dans votre pays" },
      addressInKorea:    { label: "Adresse en Corée",        hint: "À remplir en détail — nom de l'hôtel ou adresse complète\nEx.) Hôtel Grand Séoul / 1 rue Myeongdong, Jung-gu, Séoul" },
      purposeOfVisit:    { label: "Motif du séjour",
        options: ["Tourisme", "Voyage individuel", "Voyage en groupe", "Affaires", "Diplomatique / Officiel", "Traitement médical", "Visite famille / amis", "Conférence / Événement", "Emploi", "Études", "Événement sportif", "Autres"] },
      departureDate:     { label: "Date de départ",          hint: "Date prévue de départ de Corée" },
      departureFlightNo: { label: "N° vol/bateau départ",    hint: "Facultatif" },
      signature:         { label: "Signature",               hint: "Signez comme sur votre passeport" },
    }
  },

  // ── German ─────────────────────────────────────────────────────
  de: {
    formTitle: "Einreisekarte", country: "KOREA", travelerInfo: "Ausfüllhinweise", langCode: "DE", rtl: false,
    fields: {
      surname:           { label: "Nachname",                hint: "Wie im Reisepass angegeben" },
      givenName:         { label: "Vorname",                 hint: "Wie im Reisepass angegeben" },
      gender:            { label: "Geschlecht",              options: ["Männlich", "Weiblich"] },
      nationality:       { label: "Staatsangehörigkeit",     hint: "Land der Staatsbürgerschaft" },
      dob:               { label: "Geburtsdatum",            hint: "In der Reihenfolge: Jahr / Monat / Tag" },
      occupation:        { label: "Beruf",                   hint: "Ihre Arbeit oder Ihr Beruf in Ihrem Land" },
      addressInKorea:    { label: "Adresse in Korea",        hint: "Bitte ausführlich ausfüllen — Hotelname oder vollständige Adresse\nBsp.) Grand Hotel Seoul / Myeongdong-gil 1, Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Reisezweck",
        options: ["Tourismus", "Individualreise", "Gruppenreise", "Geschäft", "Diplomatisch / Offiziell", "Medizinische Behandlung", "Familienbesuch / Freunde besuchen", "Konferenz / Veranstaltung", "Beschäftigung", "Studium", "Sportveranstaltung", "Sonstiges"] },
      departureDate:     { label: "Abreisedatum",            hint: "Geplantes Abreisedatum aus Korea" },
      departureFlightNo: { label: "Abflug-/Schiffsnummer",   hint: "Optional" },
      signature:         { label: "Unterschrift",            hint: "Unterschreiben Sie wie im Reisepass" },
    }
  },

  // ── Italian ────────────────────────────────────────────────────
  it: {
    formTitle: "Scheda di arrivo", country: "COREA", travelerInfo: "Istruzioni per la compilazione", langCode: "IT", rtl: false,
    fields: {
      surname:           { label: "Cognome",                 hint: "Come riportato nel passaporto" },
      givenName:         { label: "Nome",                    hint: "Come riportato nel passaporto" },
      gender:            { label: "Sesso",                   options: ["Maschio", "Femmina"] },
      nationality:       { label: "Nazionalità",             hint: "Paese di cittadinanza" },
      dob:               { label: "Data di nascita",         hint: "In ordine: Anno / Mese / Giorno" },
      occupation:        { label: "Occupazione",             hint: "Il tuo lavoro o professione nel tuo paese" },
      addressInKorea:    { label: "Indirizzo in Corea",      hint: "Compilare dettagliatamente — nome dell'hotel o indirizzo completo\nEs.) Hotel Grand Seoul / Via Myeongdong 1, Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Motivo della visita",
        options: ["Turismo", "Viaggio individuale", "Tour di gruppo", "Affari", "Diplomatico / Ufficiale", "Cure mediche", "Visita a familiari / amici", "Conferenza / Evento", "Impiego", "Studio", "Evento sportivo", "Altro"] },
      departureDate:     { label: "Data di partenza",        hint: "Data prevista di partenza dalla Corea" },
      departureFlightNo: { label: "N° volo/nave partenza",   hint: "Facoltativo" },
      signature:         { label: "Firma",                   hint: "Firmare come nel passaporto" },
    }
  },

  // ── Turkish ────────────────────────────────────────────────────
  tr: {
    formTitle: "Varış Kartı", country: "KORE", travelerInfo: "Doldurma talimatları", langCode: "TR", rtl: false,
    fields: {
      surname:           { label: "Soyadı",                  hint: "Pasaportunuzdaki gibi" },
      givenName:         { label: "Adı",                     hint: "Pasaportunuzdaki gibi" },
      gender:            { label: "Cinsiyet",                options: ["Erkek", "Kadın"] },
      nationality:       { label: "Uyruk",                   hint: "Vatandaşlık ülkesi" },
      dob:               { label: "Doğum Tarihi",            hint: "Sırayla doldurun: Yıl / Ay / Gün" },
      occupation:        { label: "Meslek",                  hint: "Ülkenizdeki işiniz veya mesleğiniz" },
      addressInKorea:    { label: "Kore'deki Adres",         hint: "Ayrıntılı doldurun — otel adı veya tam adres\nÖrn.) Seoul Grand Hotel / Myeongdong-gil 1, Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Ziyaret Amacı",
        options: ["Turizm", "Bireysel seyahat", "Grup turu", "İş", "Diplomatik / Resmi", "Tıbbi tedavi", "Aile / arkadaş ziyareti", "Konferans / Etkinlik", "İstihdam", "Eğitim", "Spor etkinliği", "Diğer"] },
      departureDate:     { label: "Ayrılış Tarihi",          hint: "Kore'den ayrılmayı planladığınız tarih" },
      departureFlightNo: { label: "Gidiş Uçuş/Gemi No.",    hint: "İsteğe bağlı" },
      signature:         { label: "İmza",                    hint: "Pasaportunuzdaki gibi imzalayın" },
    }
  },

  // ── Polish ─────────────────────────────────────────────────────
  pl: {
    formTitle: "Karta przybycia", country: "KOREA", travelerInfo: "Instrukcja wypełniania", langCode: "PL", rtl: false,
    fields: {
      surname:           { label: "Nazwisko",                hint: "Zgodnie z paszportem" },
      givenName:         { label: "Imię",                    hint: "Zgodnie z paszportem" },
      gender:            { label: "Płeć",                    options: ["Mężczyzna", "Kobieta"] },
      nationality:       { label: "Obywatelstwo",            hint: "Kraj obywatelstwa" },
      dob:               { label: "Data urodzenia",          hint: "W kolejności: Rok / Miesiąc / Dzień" },
      occupation:        { label: "Zawód",                   hint: "Twoja praca lub zawód w Twoim kraju" },
      addressInKorea:    { label: "Adres w Korei",           hint: "Wypełnij szczegółowo — nazwa hotelu lub pełny adres\nNp.) Hotel Grand Seul / ul. Myeongdong 1, Jung-gu, Seul" },
      purposeOfVisit:    { label: "Cel wizyty",
        options: ["Turystyka", "Podróż indywidualna", "Wycieczka grupowa", "Biznes", "Dyplomatyczny / Urzędowy", "Leczenie medyczne", "Wizyta u rodziny / przyjaciół", "Konferencja / Wydarzenie", "Zatrudnienie", "Nauka", "Wydarzenie sportowe", "Inne"] },
      departureDate:     { label: "Data wyjazdu",            hint: "Planowana data opuszczenia Korei" },
      departureFlightNo: { label: "Nr lotu/statku wylot",    hint: "Opcjonalnie" },
      signature:         { label: "Podpis",                  hint: "Podpisz jak w paszporcie" },
    }
  },

  // ── Hungarian ──────────────────────────────────────────────────
  hu: {
    formTitle: "Érkezési kártya", country: "KOREA", travelerInfo: "Kitöltési útmutató", langCode: "HU", rtl: false,
    fields: {
      surname:           { label: "Vezetéknév",              hint: "Az útlevélben szereplő módon" },
      givenName:         { label: "Keresztnév",              hint: "Az útlevélben szereplő módon" },
      gender:            { label: "Nem",                     options: ["Férfi", "Nő"] },
      nationality:       { label: "Állampolgárság",          hint: "Állampolgárság szerinti ország" },
      dob:               { label: "Születési dátum",         hint: "Sorrendben: Év / Hónap / Nap" },
      occupation:        { label: "Foglalkozás",             hint: "Az Ön munkája vagy szakmája saját országában" },
      addressInKorea:    { label: "Koreai cím",              hint: "Részletesen töltse ki — szálloda neve vagy teljes cím\nPl.) Seoul Grand Hotel / Myeongdong-gil 1., Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Látogatás célja",
        options: ["Turizmus", "Egyéni utazás", "Csoportos kirándulás", "Üzlet", "Diplomáciai / Hivatalos", "Orvosi kezelés", "Rokon / barát látogatása", "Konferencia / Esemény", "Foglalkoztatás", "Tanulás", "Sporteseménye", "Egyéb"] },
      departureDate:     { label: "Indulás dátuma",          hint: "Koreából való tervezett indulás dátuma" },
      departureFlightNo: { label: "Induló járat/hajó száma", hint: "Opcionális" },
      signature:         { label: "Aláírás",                 hint: "Az útlevélben szereplő módon írja alá" },
    }
  },

  // ── Vietnamese ─────────────────────────────────────────────────
  vi: {
    formTitle: "Thẻ nhập cảnh", country: "HÀN QUỐC", travelerInfo: "Hướng dẫn điền", langCode: "VI", rtl: false,
    fields: {
      surname:           { label: "Họ (Family Name)",        hint: "Như trong hộ chiếu" },
      givenName:         { label: "Tên (Given Name)",        hint: "Như trong hộ chiếu" },
      gender:            { label: "Giới tính",               options: ["Nam", "Nữ"] },
      nationality:       { label: "Quốc tịch",               hint: "Quốc gia công dân" },
      dob:               { label: "Ngày sinh",               hint: "Theo thứ tự: Năm / Tháng / Ngày" },
      occupation:        { label: "Nghề nghiệp",             hint: "Công việc hoặc nghề của bạn tại quê nhà" },
      addressInKorea:    { label: "Địa chỉ tại Hàn Quốc",    hint: "Điền chi tiết — tên khách sạn hoặc địa chỉ đầy đủ\nVd.) Khách sạn Grand Seoul / Số 1 Myeongdong-gil, Jung-gu, Seoul" },
      purposeOfVisit:    { label: "Mục đích nhập cảnh",
        options: ["Du lịch", "Du lịch cá nhân", "Du lịch đoàn", "Kinh doanh", "Ngoại giao / Chính thức", "Điều trị y tế", "Thăm gia đình / bạn bè", "Hội nghị / Sự kiện", "Việc làm", "Học tập", "Sự kiện thể thao", "Khác"] },
      departureDate:     { label: "Ngày khởi hành",          hint: "Ngày dự kiến rời Hàn Quốc" },
      departureFlightNo: { label: "Số chuyến bay/tàu đi",    hint: "Không bắt buộc" },
      signature:         { label: "Chữ ký",                  hint: "Ký như trong hộ chiếu" },
    }
  },

  // ── Thai ───────────────────────────────────────────────────────
  th: {
    formTitle: "บัตรขาเข้า", country: "เกาหลี", travelerInfo: "คำแนะนำการกรอก", langCode: "TH", rtl: false,
    fields: {
      surname:           { label: "นามสกุล",                 hint: "ตามที่ระบุในหนังสือเดินทาง" },
      givenName:         { label: "ชื่อ",                    hint: "ตามที่ระบุในหนังสือเดินทาง" },
      gender:            { label: "เพศ",                     options: ["ชาย", "หญิง"] },
      nationality:       { label: "สัญชาติ",                  hint: "ประเทศสัญชาติ" },
      dob:               { label: "วันเกิด",                  hint: "กรอกตามลำดับ: ปี / เดือน / วัน" },
      occupation:        { label: "อาชีพ",                   hint: "งานหรืออาชีพของคุณในประเทศบ้านเกิด" },
      addressInKorea:    { label: "ที่อยู่ในเกาหลี",           hint: "กรอกรายละเอียด — ชื่อโรงแรมหรือที่อยู่เต็ม\nเช่น โรงแรมแกรนด์โซล / เลขที่ 1 ถนนเมียงดง กูจองกู โซล" },
      purposeOfVisit:    { label: "วัตถุประสงค์การเข้าประเทศ",
        options: ["ท่องเที่ยว", "เดินทางส่วนตัว", "ท่องเที่ยวกลุ่ม", "ธุรกิจ", "การทูต / ราชการ", "การรักษาพยาบาล", "เยี่ยมครอบครัว / เพื่อน", "ประชุม / งาน", "การจ้างงาน", "การศึกษา", "กิจกรรมกีฬา", "อื่นๆ"] },
      departureDate:     { label: "วันที่เดินทางออก",          hint: "วันที่วางแผนจะออกจากเกาหลี" },
      departureFlightNo: { label: "เที่ยวบิน/เรือขาออก",       hint: "ไม่บังคับ" },
      signature:         { label: "ลายเซ็น",                 hint: "เซ็นชื่อเหมือนในหนังสือเดินทาง" },
    }
  },

  // ── Russian ────────────────────────────────────────────────────
  ru: {
    formTitle: "Карта прибытия", country: "КОРЕЯ", travelerInfo: "Инструкция по заполнению", langCode: "RU", rtl: false,
    fields: {
      surname:           { label: "Фамилия",                 hint: "Как указано в паспорте" },
      givenName:         { label: "Имя",                     hint: "Как указано в паспорте" },
      gender:            { label: "Пол",                     options: ["Мужской", "Женский"] },
      nationality:       { label: "Гражданство",             hint: "Страна гражданства" },
      dob:               { label: "Дата рождения",           hint: "В порядке: Год / Месяц / День" },
      occupation:        { label: "Профессия",               hint: "Ваша работа или профессия в вашей стране" },
      addressInKorea:    { label: "Адрес в Корее",           hint: "Заполните подробно — название отеля или полный адрес\nПр.) Отель Grand Seoul / Мёндон-гиль 1, Чунг-гу, Сеул" },
      purposeOfVisit:    { label: "Цель визита",
        options: ["Туризм", "Индивидуальное путешествие", "Групповой тур", "Бизнес", "Дипломатический / Официальный", "Медицинское лечение", "Визит к родственникам / друзьям", "Конференция / Мероприятие", "Трудоустройство", "Учёба", "Спортивное мероприятие", "Другое"] },
      departureDate:     { label: "Дата отбытия",            hint: "Запланированная дата выезда из Кореи" },
      departureFlightNo: { label: "Рейс/судно отправления",  hint: "По желанию" },
      signature:         { label: "Подпись",                 hint: "Подпишитесь как в паспорте" },
    }
  },

  // ── Japanese ───────────────────────────────────────────────────
  ja: {
    formTitle: "入国申告書", country: "韓国", travelerInfo: "記入のご案内", langCode: "JA", rtl: false,
    fields: {
      surname:           { label: "姓（ファミリーネーム）",    hint: "パスポート記載の通り" },
      givenName:         { label: "名（ファーストネーム）",    hint: "パスポート記載の通り" },
      gender:            { label: "性別",                    options: ["男性", "女性"] },
      nationality:       { label: "国籍",                    hint: "パスポートの国籍" },
      dob:               { label: "生年月日",                 hint: "順番に記入: 年 / 月 / 日" },
      occupation:        { label: "職業",                    hint: "本国でのお仕事または職業" },
      addressInKorea:    { label: "韓国内の滞在先",           hint: "詳しく記入 — ホテル名または住所\n例）グランドソウルホテル / ソウル市中区明洞ギル1" },
      purposeOfVisit:    { label: "入国目的",
        options: ["観光", "個人旅行", "グループツアー", "ビジネス", "外交・公務", "医療", "家族・知人訪問", "会議・イベント", "就労", "学業", "スポーツイベント", "その他"] },
      departureDate:     { label: "出発日",                  hint: "韓国からの出発予定日" },
      departureFlightNo: { label: "出発便名・船名",           hint: "任意（Optional）" },
      signature:         { label: "署名",                    hint: "パスポートと同じ署名" },
    }
  },

  // ── Tier 2 languages (compact — new fields added) ──────────────
  tl: { formTitle: "Arrival Card", country: "KOREA", travelerInfo: "Paano punan", langCode: "TL", rtl: false,
    fields: { surname: { label: "Apelyido", hint: "Ayon sa pasaporte" }, givenName: { label: "Pangalan", hint: "Ayon sa pasaporte" }, gender: { label: "Kasarian", options: ["Lalaki", "Babae"] }, nationality: { label: "Nasyonalidad", hint: "Bansang kinabibilangan" }, dob: { label: "Petsa ng Kapanganakan", hint: "Taon / Buwan / Araw" }, occupation: { label: "Hanapbuhay", hint: "Trabaho sa iyong bansa" }, addressInKorea: { label: "Address sa Korea", hint: "Hotel o lugar ng tirahan — detalyado" }, purposeOfVisit: { label: "Layunin ng Pagbisita", options: ["Tour", "Indibidwal na paglalakbay", "Grupo", "Negosyo", "Diplomatiko / Opisyal", "Medikal", "Bisita ng pamilya / kaibigan", "Kumperensya / Kaganapan", "Trabaho", "Pag-aaral", "Palakasan", "Iba pa"] }, departureDate: { label: "Petsa ng Pag-alis", hint: "Planong araw ng pag-alis mula Korea" }, departureFlightNo: { label: "Bilang ng Eroplano / Barko", hint: "Opsyonal" }, signature: { label: "Pirma", hint: "Lagda ayon sa pasaporte" } } },
  ms: { formTitle: "Kad Ketibaan", country: "KOREA", travelerInfo: "Cara mengisi", langCode: "MS", rtl: false,
    fields: { surname: { label: "Nama Keluarga", hint: "Seperti dalam pasport" }, givenName: { label: "Nama Pertama", hint: "Seperti dalam pasport" }, gender: { label: "Jantina", options: ["Lelaki", "Perempuan"] }, nationality: { label: "Kewarganegaraan", hint: "Negara warganegara" }, dob: { label: "Tarikh Lahir", hint: "Tahun / Bulan / Hari" }, occupation: { label: "Pekerjaan", hint: "Kerja di negara anda" }, addressInKorea: { label: "Alamat di Korea", hint: "Hotel atau penginapan — terperinci" }, purposeOfVisit: { label: "Tujuan Lawatan", options: ["Pelancongan", "Perjalanan individu", "Pelancongan kumpulan", "Perniagaan", "Diplomatik / Rasmi", "Rawatan perubatan", "Kunjungi keluarga / rakan", "Persidangan / Acara", "Pekerjaan", "Pengajian", "Acara sukan", "Lain-lain"] }, departureDate: { label: "Tarikh Berlepas", hint: "Tarikh perlepasan dari Korea" }, departureFlightNo: { label: "No. Penerbangan / Kapal", hint: "Pilihan" }, signature: { label: "Tandatangan", hint: "Tandatangan seperti dalam pasport" } } },
  nl: { formTitle: "Aankomstkaart", country: "KOREA", travelerInfo: "Invulinstructies", langCode: "NL", rtl: false,
    fields: { surname: { label: "Achternaam", hint: "Zoals vermeld in paspoort" }, givenName: { label: "Voornaam", hint: "Zoals vermeld in paspoort" }, gender: { label: "Geslacht", options: ["Man", "Vrouw"] }, nationality: { label: "Nationaliteit", hint: "Land van staatsburgerschap" }, dob: { label: "Geboortedatum", hint: "Jaar / Maand / Dag" }, occupation: { label: "Beroep", hint: "Werk in uw land" }, addressInKorea: { label: "Adres in Korea", hint: "Hotel of verblijfplaats — gedetailleerd" }, purposeOfVisit: { label: "Doel van bezoek", options: ["Toerisme", "Individuele reis", "Groepsreis", "Zakelijk", "Diplomatiek / Officieel", "Medische behandeling", "Bezoek familie / vrienden", "Conferentie / Evenement", "Werk", "Studie", "Sportevenement", "Overig"] }, departureDate: { label: "Vertrekdatum", hint: "Geplande vertrekdatum uit Korea" }, departureFlightNo: { label: "Vluchtnr. / Schip vertrek", hint: "Optioneel" }, signature: { label: "Handtekening", hint: "Teken zoals in paspoort" } } },
  sv: { formTitle: "Ankomstkort", country: "KOREA", travelerInfo: "Ifyllnadsinstruktioner", langCode: "SV", rtl: false,
    fields: { surname: { label: "Efternamn", hint: "Som i passet" }, givenName: { label: "Förnamn", hint: "Som i passet" }, gender: { label: "Kön", options: ["Man", "Kvinna"] }, nationality: { label: "Nationalitet", hint: "Medborgarskapsland" }, dob: { label: "Födelsedatum", hint: "År / Månad / Dag" }, occupation: { label: "Yrke", hint: "Arbete i ditt land" }, addressInKorea: { label: "Adress i Korea", hint: "Hotell eller boende — detaljerat" }, purposeOfVisit: { label: "Syfte med besök", options: ["Turism", "Individuell resa", "Gruppreisa", "Affärer", "Diplomatiskt / Officiellt", "Medicinsk behandling", "Besök familj / vänner", "Konferens / Evenemang", "Anställning", "Studier", "Sportevenemang", "Övrigt"] }, departureDate: { label: "Avresedatum", hint: "Planerat avresedatum från Korea" }, departureFlightNo: { label: "Avgångsflygning / Fartyg", hint: "Valfritt" }, signature: { label: "Underskrift", hint: "Signera som i passet" } } },
  no: { formTitle: "Ankomstkort", country: "KOREA", travelerInfo: "Utfyllingsinstruksjoner", langCode: "NO", rtl: false,
    fields: { surname: { label: "Etternavn", hint: "Som i passet" }, givenName: { label: "Fornavn", hint: "Som i passet" }, gender: { label: "Kjønn", options: ["Mann", "Kvinne"] }, nationality: { label: "Nasjonalitet", hint: "Statsborgerland" }, dob: { label: "Fødselsdato", hint: "År / Måned / Dag" }, occupation: { label: "Yrke", hint: "Arbeid i ditt land" }, addressInKorea: { label: "Adresse i Korea", hint: "Hotell eller overnatting — detaljert" }, purposeOfVisit: { label: "Formål med besøk", options: ["Turisme", "Individuell reise", "Gruppetur", "Forretning", "Diplomatisk / Offisielt", "Medisinsk behandling", "Besøk familie / venner", "Konferanse / Arrangement", "Sysselsetting", "Studier", "Sportarrangement", "Annet"] }, departureDate: { label: "Avreisedato", hint: "Planlagt avreisedato fra Korea" }, departureFlightNo: { label: "Avgangsflygnr. / Skip", hint: "Valgfritt" }, signature: { label: "Underskrift", hint: "Signer som i passet" } } },
  da: { formTitle: "Ankomstkort", country: "KOREA", travelerInfo: "Udfyldningsinstruktioner", langCode: "DA", rtl: false,
    fields: { surname: { label: "Efternavn", hint: "Som i passet" }, givenName: { label: "Fornavn", hint: "Som i passet" }, gender: { label: "Køn", options: ["Mand", "Kvinde"] }, nationality: { label: "Nationalitet", hint: "Statsborgerskabsland" }, dob: { label: "Fødselsdato", hint: "År / Måned / Dag" }, occupation: { label: "Erhverv", hint: "Arbejde i dit land" }, addressInKorea: { label: "Adresse i Korea", hint: "Hotel eller overnatning — detaljeret" }, purposeOfVisit: { label: "Formål med besøg", options: ["Turisme", "Individuel rejse", "Grupperejse", "Forretning", "Diplomatisk / Officielt", "Medicinsk behandling", "Besøg familie / venner", "Konference / Arrangement", "Beskæftigelse", "Studier", "Sportsarrangement", "Andet"] }, departureDate: { label: "Afrejsedato", hint: "Planlagt afrejsedato fra Korea" }, departureFlightNo: { label: "Afgangsflygnr. / Skib", hint: "Valgfrit" }, signature: { label: "Underskrift", hint: "Underskriv som i passet" } } },
  fi: { formTitle: "Saapumiskortti", country: "KOREA", travelerInfo: "Täyttöohjeet", langCode: "FI", rtl: false,
    fields: { surname: { label: "Sukunimi", hint: "Kuten passissa" }, givenName: { label: "Etunimi", hint: "Kuten passissa" }, gender: { label: "Sukupuoli", options: ["Mies", "Nainen"] }, nationality: { label: "Kansalaisuus", hint: "Kansalaisuusmaa" }, dob: { label: "Syntymäaika", hint: "Vuosi / Kuukausi / Päivä" }, occupation: { label: "Ammatti", hint: "Työ kotimaassasi" }, addressInKorea: { label: "Osoite Koreassa", hint: "Hotelli tai majoituspaikka — yksityiskohtaisesti" }, purposeOfVisit: { label: "Vierailun tarkoitus", options: ["Matkailu", "Yksilömatka", "Ryhmämatka", "Liike", "Diplomaattinen / Virallinen", "Lääketieteellinen hoito", "Vierailu perhe / ystävät", "Kokous / Tapahtuma", "Työ", "Opiskelu", "Urheilutapahtuma", "Muu"] }, departureDate: { label: "Lähtöpäivä", hint: "Suunniteltu lähtöpäivä Koreasta" }, departureFlightNo: { label: "Lähtölentonro / Laiva", hint: "Valinnainen" }, signature: { label: "Allekirjoitus", hint: "Allekirjoita kuten passissa" } } },
  ro: { formTitle: "Card de sosire", country: "COREEA", travelerInfo: "Instrucțiuni de completare", langCode: "RO", rtl: false,
    fields: { surname: { label: "Nume de familie", hint: "Conform pașaportului" }, givenName: { label: "Prenume", hint: "Conform pașaportului" }, gender: { label: "Sex", options: ["Masculin", "Feminin"] }, nationality: { label: "Naționalitate", hint: "Țara de cetățenie" }, dob: { label: "Data nașterii", hint: "An / Lună / Zi" }, occupation: { label: "Ocupație", hint: "Muncă în țara dvs." }, addressInKorea: { label: "Adresa în Coreea", hint: "Hotel sau cazare — detaliat" }, purposeOfVisit: { label: "Scopul vizitei", options: ["Turism", "Călătorie individuală", "Tur de grup", "Afaceri", "Diplomatic / Oficial", "Tratament medical", "Vizită familie / prieteni", "Conferință / Eveniment", "Angajare", "Studii", "Eveniment sportiv", "Altele"] }, departureDate: { label: "Data plecării", hint: "Data planificată de plecare din Coreea" }, departureFlightNo: { label: "Nr. zbor/navă plecare", hint: "Opțional" }, signature: { label: "Semnătură", hint: "Semnați ca în pașaport" } } },
  uk: { formTitle: "Картка прибуття", country: "КОРЕЯ", travelerInfo: "Інструкція заповнення", langCode: "UK", rtl: false,
    fields: { surname: { label: "Прізвище", hint: "Як у паспорті" }, givenName: { label: "Ім'я", hint: "Як у паспорті" }, gender: { label: "Стать", options: ["Чоловіча", "Жіноча"] }, nationality: { label: "Громадянство", hint: "Країна громадянства" }, dob: { label: "Дата народження", hint: "Рік / Місяць / День" }, occupation: { label: "Професія", hint: "Робота у вашій країні" }, addressInKorea: { label: "Адреса в Кореї", hint: "Готель або місце проживання — детально" }, purposeOfVisit: { label: "Мета візиту", options: ["Туризм", "Індивідуальна подорож", "Груповий тур", "Бізнес", "Дипломатичний / Офіційний", "Медичне лікування", "Візит до рідних / друзів", "Конференція / Захід", "Працевлаштування", "Навчання", "Спортивний захід", "Інше"] }, departureDate: { label: "Дата відбуття", hint: "Запланована дата виїзду з Кореї" }, departureFlightNo: { label: "Рейс/судно відправлення", hint: "За бажанням" }, signature: { label: "Підпис", hint: "Підпишіться як у паспорті" } } },
  el: { formTitle: "Κάρτα άφιξης", country: "ΚΟΡΕΑ", travelerInfo: "Οδηγίες συμπλήρωσης", langCode: "EL", rtl: false,
    fields: { surname: { label: "Επώνυμο", hint: "Όπως αναγράφεται στο διαβατήριο" }, givenName: { label: "Όνομα", hint: "Όπως αναγράφεται στο διαβατήριο" }, gender: { label: "Φύλο", options: ["Άνδρας", "Γυναίκα"] }, nationality: { label: "Εθνικότητα", hint: "Χώρα υπηκοότητας" }, dob: { label: "Ημερομηνία γέννησης", hint: "Έτος / Μήνας / Ημέρα" }, occupation: { label: "Επάγγελμα", hint: "Εργασία στη χώρα σας" }, addressInKorea: { label: "Διεύθυνση στην Κορέα", hint: "Ξενοδοχείο ή κατάλυμα — λεπτομερώς" }, purposeOfVisit: { label: "Σκοπός επίσκεψης", options: ["Τουρισμός", "Ατομικό ταξίδι", "Ομαδική εκδρομή", "Επιχειρήσεις", "Διπλωματικός / Επίσημος", "Ιατρική θεραπεία", "Επίσκεψη οικογένειας / φίλων", "Συνέδριο / Εκδήλωση", "Απασχόληση", "Σπουδές", "Αθλητική εκδήλωση", "Άλλο"] }, departureDate: { label: "Ημερομηνία αναχώρησης", hint: "Προγραμματισμένη ημερομηνία αναχώρησης" }, departureFlightNo: { label: "Αρ. πτήσης/πλοίου αναχ.", hint: "Προαιρετικό" }, signature: { label: "Υπογραφή", hint: "Υπογράψτε όπως στο διαβατήριο" } } },
  he: { formTitle: "כרטיס כניסה", country: "קוריאה", travelerInfo: "הוראות מילוי", langCode: "HE", rtl: true,
    fields: { surname: { label: "שם משפחה", hint: "כפי שמופיע בדרכון" }, givenName: { label: "שם פרטי", hint: "כפי שמופיע בדרכון" }, gender: { label: "מין", options: ["זכר", "נקבה"] }, nationality: { label: "אזרחות", hint: "ארץ אזרחות" }, dob: { label: "תאריך לידה", hint: "שנה / חודש / יום" }, occupation: { label: "עיסוק", hint: "עבודה במדינתך" }, addressInKorea: { label: "כתובת בקוריאה", hint: "מלון או מקום שהייה — בפירוט" }, purposeOfVisit: { label: "מטרת הביקור", options: ["תיירות", "נסיעה פרטית", "טיול קבוצתי", "עסקים", "דיפלומטי / רשמי", "טיפול רפואי", "ביקור משפחה / חברים", "ועידה / אירוע", "עבודה", "לימודים", "אירוע ספורט", "אחר"] }, departureDate: { label: "תאריך יציאה", hint: "תאריך יציאה מקוריאה" }, departureFlightNo: { label: "מספר טיסה/אנייה יציאה", hint: "רשות" }, signature: { label: "חתימה", hint: "חתום כמו בדרכון" } } },
  fa: { formTitle: "کارت ورود", country: "کره", travelerInfo: "دستورالعمل پر کردن", langCode: "FA", rtl: true,
    fields: { surname: { label: "نام خانوادگی", hint: "طبق گذرنامه" }, givenName: { label: "نام", hint: "طبق گذرنامه" }, gender: { label: "جنسیت", options: ["مرد", "زن"] }, nationality: { label: "ملیت", hint: "کشور تابعیت" }, dob: { label: "تاریخ تولد", hint: "سال / ماه / روز" }, occupation: { label: "شغل", hint: "کار در کشور خود" }, addressInKorea: { label: "آدرس در کره", hint: "هتل یا محل اقامت — با جزئیات" }, purposeOfVisit: { label: "هدف سفر", options: ["گردشگری", "سفر انفرادی", "تور گروهی", "تجارت", "دیپلماتیک / رسمی", "درمان پزشکی", "دیدار خانواده / دوستان", "کنفرانس / رویداد", "اشتغال", "تحصیل", "رویداد ورزشی", "سایر"] }, departureDate: { label: "تاریخ خروج", hint: "تاریخ برنامه‌ریزی شده خروج از کره" }, departureFlightNo: { label: "شماره پرواز/کشتی خروج", hint: "اختیاری" }, signature: { label: "امضا", hint: "مانند گذرنامه امضا کنید" } } },
  mn: { formTitle: "Ирэлтийн карт", country: "СОЛОНГОС", travelerInfo: "Бөглөх заавар", langCode: "MN", rtl: false,
    fields: { surname: { label: "Овог", hint: "Паспортын дагуу" }, givenName: { label: "Нэр", hint: "Паспортын дагуу" }, gender: { label: "Хүйс", options: ["Эрэгтэй", "Эмэгтэй"] }, nationality: { label: "Иргэншил", hint: "Иргэншлийн улс" }, dob: { label: "Төрсөн огноо", hint: "Он / Сар / Өдөр" }, occupation: { label: "Мэргэжил", hint: "Өөрийн улсад хийдэг ажил" }, addressInKorea: { label: "Солонгос дах хаяг", hint: "Зочид буудал — дэлгэрэнгүй" }, purposeOfVisit: { label: "Зорилго", options: ["Аялал жуулчлал", "Ганцаарчилсан аялал", "Бүлгийн аялал", "Бизнес", "Дипломат / Албан", "Эмнэлгийн эмчилгээ", "Гэр бүл / найзаа зочлох", "Хурал / Арга хэмжээ", "Ажил эрхлэлт", "Суралцах", "Спортын арга хэмжээ", "Бусад"] }, departureDate: { label: "Явах огноо", hint: "Солонгосоос явах төлөвлөсөн огноо" }, departureFlightNo: { label: "Гарах нислэгийн дугаар", hint: "Заавал биш" }, signature: { label: "Гарын үсэг", hint: "Паспорт дахтай адил гарын үсэг зур" } } },
  ne: { formTitle: "आगमन कार्ड", country: "कोरिया", travelerInfo: "भर्ने निर्देशन", langCode: "NE", rtl: false,
    fields: { surname: { label: "थर", hint: "राहदानी अनुसार" }, givenName: { label: "नाम", hint: "राहदानी अनुसार" }, gender: { label: "लिंग", options: ["पुरुष", "महिला"] }, nationality: { label: "राष्ट्रियता", hint: "नागरिकताको देश" }, dob: { label: "जन्म मिति", hint: "वर्ष / महिना / दिन" }, occupation: { label: "पेशा", hint: "आफ्नो देशमा काम" }, addressInKorea: { label: "कोरियामा ठेगाना", hint: "होटल वा बसोबासको ठाउँ — विस्तृत" }, purposeOfVisit: { label: "भ्रमणको उद्देश्य", options: ["पर्यटन", "व्यक्तिगत यात्रा", "समूह यात्रा", "व्यापार", "कूटनीतिक / आधिकारिक", "चिकित्सा उपचार", "परिवार / साथी भ्रमण", "सम्मेलन / कार्यक्रम", "रोजगार", "अध्ययन", "खेलकुद कार्यक्रम", "अन्य"] }, departureDate: { label: "प्रस्थान मिति", hint: "कोरियाबाट प्रस्थानको मिति" }, departureFlightNo: { label: "प्रस्थान उडान / जहाज नं.", hint: "ऐच्छिक" }, signature: { label: "दस्तखत", hint: "राहदानी अनुसार" } } },
  ur: { formTitle: "آمد کارڈ", country: "کوریا", travelerInfo: "بھرنے کی ہدایات", langCode: "UR", rtl: true,
    fields: { surname: { label: "خاندانی نام", hint: "پاسپورٹ کے مطابق" }, givenName: { label: "پہلا نام", hint: "پاسپورٹ کے مطابق" }, gender: { label: "جنس", options: ["مرد", "عورت"] }, nationality: { label: "قومیت", hint: "شہریت کا ملک" }, dob: { label: "تاریخ پیدائش", hint: "سال / مہینہ / دن" }, occupation: { label: "پیشہ", hint: "اپنے ملک میں کام" }, addressInKorea: { label: "کوریا میں پتہ", hint: "ہوٹل یا رہائش — تفصیل سے" }, purposeOfVisit: { label: "دورے کا مقصد", options: ["سیاحت", "انفرادی سفر", "گروپ ٹور", "کاروبار", "سفارتی / سرکاری", "طبی علاج", "خاندان / دوستوں کا دورہ", "کانفرنس / تقریب", "روزگار", "تعلیم", "کھیلوں کا تقریب", "دیگر"] }, departureDate: { label: "روانگی کی تاریخ", hint: "کوریا سے روانگی کی تاریخ" }, departureFlightNo: { label: "روانگی پرواز / جہاز نمبر", hint: "اختیاری" }, signature: { label: "دستخط", hint: "پاسپورٹ کی طرح دستخط" } } },
  sw: { formTitle: "Kadi ya Kuwasili", country: "KOREA", travelerInfo: "Jinsi ya kujaza", langCode: "SW", rtl: false,
    fields: { surname: { label: "Jina la Familia", hint: "Kama ilivyo katika pasipoti" }, givenName: { label: "Jina la Kwanza", hint: "Kama ilivyo katika pasipoti" }, gender: { label: "Jinsia", options: ["Mume", "Mke"] }, nationality: { label: "Utaifa", hint: "Nchi ya uraia" }, dob: { label: "Tarehe ya Kuzaliwa", hint: "Mwaka / Mwezi / Siku" }, occupation: { label: "Kazi", hint: "Kazi katika nchi yako" }, addressInKorea: { label: "Anwani nchini Korea", hint: "Hoteli au mahali pa kukaa — kwa undani" }, purposeOfVisit: { label: "Sababu ya Ziara", options: ["Utalii", "Safari ya kibinafsi", "Safari ya kikundi", "Biashara", "Kidiplomasia / Rasmi", "Matibabu", "Kutembelea familia / marafiki", "Mkutano / Tukio", "Ajira", "Masomo", "Tukio la michezo", "Nyingine"] }, departureDate: { label: "Tarehe ya Kuondoka", hint: "Tarehe ya mpango wa kuondoka Korea" }, departureFlightNo: { label: "Nambari ya Ndege / Meli", hint: "Hiari" }, signature: { label: "Saini", hint: "Tia saini kama katika pasipoti" } } },
  ta: { formTitle: "வருகை அட்டை", country: "கொரியா", travelerInfo: "நிரப்பு வழிமுறைகள்", langCode: "TA", rtl: false,
    fields: { surname: { label: "குடும்பப் பெயர்", hint: "கடவுச்சீட்டில் உள்ளபடி" }, givenName: { label: "முதல் பெயர்", hint: "கடவுச்சீட்டில் உள்ளபடி" }, gender: { label: "பாலினம்", options: ["ஆண்", "பெண்"] }, nationality: { label: "தேசியம்", hint: "குடியுரிமை நாடு" }, dob: { label: "பிறந்த தேதி", hint: "ஆண்டு / மாதம் / நாள்" }, occupation: { label: "தொழில்", hint: "உங்கள் நாட்டில் வேலை" }, addressInKorea: { label: "கொரியாவில் முகவரி", hint: "ஹோட்டல் அல்லது தங்கும் இடம் — விவரமாக" }, purposeOfVisit: { label: "வருகையின் நோக்கம்", options: ["சுற்றுலா", "தனிப்பட்ட பயணம்", "குழு சுற்றுலா", "வணிகம்", "தூதர் / அரசாங்க", "மருத்துவ சிகிச்சை", "குடும்பம் / நண்பர்களை சந்திக்க", "மாநாடு / நிகழ்வு", "வேலை வாய்ப்பு", "படிப்பு", "விளையாட்டு நிகழ்வு", "மற்றவை"] }, departureDate: { label: "புறப்படும் தேதி", hint: "கொரியாவிலிருந்து புறப்படும் திட்டமிட்ட தேதி" }, departureFlightNo: { label: "புறப்படும் விமான / கப்பல் எண்", hint: "விருப்பத்திற்கு" }, signature: { label: "கையொப்பம்", hint: "கடவுச்சீட்டில் உள்ளபடி கையொப்பமிடவும்" } } },
  ka: { formTitle: "ჩამოსვლის ბარათი", country: "კორეა", travelerInfo: "შევსების ინსტრუქცია", langCode: "KA", rtl: false,
    fields: { surname: { label: "გვარი", hint: "პასპორტის მიხედვით" }, givenName: { label: "სახელი", hint: "პასპორტის მიხედვით" }, gender: { label: "სქესი", options: ["მამრობითი", "მდედრობითი"] }, nationality: { label: "მოქალაქეობა", hint: "მოქალაქეობის ქვეყანა" }, dob: { label: "დაბადების თარიღი", hint: "წელი / თვე / დღე" }, occupation: { label: "პროფესია", hint: "სამუშაო თქვენს ქვეყანაში" }, addressInKorea: { label: "მისამართი კორეაში", hint: "სასტუმრო ან საცხოვრებელი — დეტალურად" }, purposeOfVisit: { label: "ვიზიტის მიზანი", options: ["ტურიზმი", "ინდივიდუალური მოგზაურობა", "ჯგუფური ტური", "ბიზნესი", "დიპლომატიური / ოფიციალური", "სამედიცინო მკურნალობა", "ოჯახის / მეგობრების მონახულება", "კონფერენცია / ღონისძიება", "დასაქმება", "სწავლა", "სპორტული ღონისძიება", "სხვა"] }, departureDate: { label: "გამგზავრების თარიღი", hint: "კორეიდან გამგზავრების გეგმიური თარიღი" }, departureFlightNo: { label: "გამგზ. რეისის/გემის ნომ.", hint: "სურვილისამებრ" }, signature: { label: "ხელმოწერა", hint: "პასპორტის მსგავსი ხელმოწერა" } } },
  hy: { formTitle: "Ժամանման քարտ", country: "ԿՈՐԵԱ", travelerInfo: "Լրացման հրահանգ", langCode: "HY", rtl: false,
    fields: { surname: { label: "Ազգանուն", hint: "Ինչպես անձնագրում" }, givenName: { label: "Անուն", hint: "Ինչպես անձնագրում" }, gender: { label: "Սեռ", options: ["Արական", "Իգական"] }, nationality: { label: "Քաղաքացիություն", hint: "Քաղաքացիության երկիր" }, dob: { label: "Ծննդյան ամսաթիվ", hint: "Տարի / Ամիս / Օր" }, occupation: { label: "Մասնագիտություն", hint: "Աշխատանք ձեր երկրում" }, addressInKorea: { label: "Հասցե Կորեայում", hint: "Հյուրանոց — մանրամասն" }, purposeOfVisit: { label: "Այցի նպատակ", options: ["Զբոսաշրջություն", "Անհատական ​​ճամփորդ", "Խմբային շրջագայություն", "Բիզնես", "Դիպ. / Պաշտոն.", "Բժշկ. բուժում", "Ընտ. / Ընկ. այց", "Կոնֆ. / Միջ.", "Զբաղvածություն", "Ուսուցում", "Սպ. Իրադ.", "Այլ"] }, departureDate: { label: "Մեկնման ամսաթիվ", hint: "Կորեայից մեկնելու նախատեսված ամսաթիվ" }, departureFlightNo: { label: "Մեկն. Թռիչք/Նավ №", hint: "Ըստ ցանկության" }, signature: { label: "Ստորագրություն", hint: "Ստորագրեք ինչպես անձնագրում" } } },
  cs: { formTitle: "Příjezdová karta", country: "KOREA", travelerInfo: "Pokyny k vyplnění", langCode: "CS", rtl: false,
    fields: { surname: { label: "Příjmení", hint: "Jak je uvedeno v pasu" }, givenName: { label: "Jméno", hint: "Jak je uvedeno v pasu" }, gender: { label: "Pohlaví", options: ["Muž", "Žena"] }, nationality: { label: "Státní příslušnost", hint: "Stát občanství" }, dob: { label: "Datum narození", hint: "Rok / Měsíc / Den" }, occupation: { label: "Povolání", hint: "Práce ve vaší zemi" }, addressInKorea: { label: "Adresa v Koreji", hint: "Hotel nebo ubytování — podrobně" }, purposeOfVisit: { label: "Účel návštěvy", options: ["Turistika", "Individuální cesta", "Skupinový zájezd", "Obchod", "Diplomatický / Úřední", "Lékařské ošetření", "Návštěva rodiny / přátel", "Konference / Akce", "Zaměstnání", "Studium", "Sportovní akce", "Jiné"] }, departureDate: { label: "Datum odjezdu", hint: "Plánované datum odjezdu z Koreje" }, departureFlightNo: { label: "Č. odlet. letu/lodi", hint: "Nepovinné" }, signature: { label: "Podpis", hint: "Podepište jako v pasu" } } },
  sk: { formTitle: "Príjazdová karta", country: "KÓREA", travelerInfo: "Pokyny na vyplnenie", langCode: "SK", rtl: false,
    fields: { surname: { label: "Priezvisko", hint: "Ako je uvedené v pase" }, givenName: { label: "Meno", hint: "Ako je uvedené v pase" }, gender: { label: "Pohlavie", options: ["Muž", "Žena"] }, nationality: { label: "Štátna príslušnosť", hint: "Krajina občianstva" }, dob: { label: "Dátum narodenia", hint: "Rok / Mesiac / Deň" }, occupation: { label: "Povolanie", hint: "Práca vo vašej krajine" }, addressInKorea: { label: "Adresa v Kórei", hint: "Hotel alebo ubytovanie — podrobne" }, purposeOfVisit: { label: "Účel návštevy", options: ["Turistika", "Individuálna cesta", "Skupinový zájazd", "Obchod", "Diplomatický / Úradný", "Liečba", "Návšteva rodiny / priateľov", "Konferencia / Podujatie", "Zamestnanie", "Štúdium", "Šport. podujatie", "Iné"] }, departureDate: { label: "Dátum odchodu", hint: "Plánovaný dátum odchodu z Kórey" }, departureFlightNo: { label: "Č. odlet. letu/lode", hint: "Voliteľné" }, signature: { label: "Podpis", hint: "Podpíšte ako v pase" } } },
  bg: { formTitle: "Карта за пристигане", country: "КОРЕЯ", travelerInfo: "Инструкции за попълване", langCode: "BG", rtl: false,
    fields: { surname: { label: "Фамилия", hint: "Както в паспорта" }, givenName: { label: "Собствено ime", hint: "Както в паспорта" }, gender: { label: "Пол", options: ["Мъж", "Жена"] }, nationality: { label: "Националност", hint: "Страна на гражданство" }, dob: { label: "Дата на раждане", hint: "Година / Месец / Ден" }, occupation: { label: "Занятие", hint: "Работа във вашата страна" }, addressInKorea: { label: "Адрес в Корея", hint: "Хотел или пребиваване — подробно" }, purposeOfVisit: { label: "Цел на посещението", options: ["Туризъм", "Индивидуално пътуване", "Групова обиколка", "Бизнес", "Дипломатически / Официален", "Медицинско лечение", "Посещение семейство / приятели", "Конференция / Събитие", "Заетост", "Обучение", "Спортно събитие", "Друго"] }, departureDate: { label: "Дата на заминаване", hint: "Планирана дата на заминаване" }, departureFlightNo: { label: "№ рейс/кораб заминаване", hint: "По желание" }, signature: { label: "Подпис", hint: "Подпишете като в паспорта" } } },
  hr: { formTitle: "Karta dolaska", country: "KOREJA", travelerInfo: "Upute za ispunjavanje", langCode: "HR", rtl: false,
    fields: { surname: { label: "Prezime", hint: "Kao u putovnici" }, givenName: { label: "Ime", hint: "Kao u putovnici" }, gender: { label: "Spol", options: ["Muško", "Žensko"] }, nationality: { label: "Državljanstvo", hint: "Zemlja državljanstva" }, dob: { label: "Datum rođenja", hint: "Godina / Mjesec / Dan" }, occupation: { label: "Zanimanje", hint: "Posao u vašoj zemlji" }, addressInKorea: { label: "Adresa u Koreji", hint: "Hotel ili smještaj — detaljno" }, purposeOfVisit: { label: "Svrha posjete", options: ["Turizam", "Individualno putovanje", "Grupna tura", "Poslovni posjet", "Diplomatski / Službeni", "Medicinski tretman", "Posjet obitelji / prijatelji", "Konferencija / Događaj", "Zaposlenje", "Studij", "Sportski događaj", "Ostalo"] }, departureDate: { label: "Datum odlaska", hint: "Planirani datum odlaska iz Koreje" }, departureFlightNo: { label: "Br. let/brod odlaska", hint: "Neobavezno" }, signature: { label: "Potpis", hint: "Potpišite kao u putovnici" } } },
  sr: { formTitle: "Kartica dolaska", country: "KOREJA", travelerInfo: "Uputstvo za popunjavanje", langCode: "SR", rtl: false,
    fields: { surname: { label: "Prezime", hint: "Kao u pasošu" }, givenName: { label: "Ime", hint: "Kao u pasošu" }, gender: { label: "Pol", options: ["Muški", "Ženski"] }, nationality: { label: "Državljanstvo", hint: "Zemlja državljanstva" }, dob: { label: "Datum rođenja", hint: "Godina / Mesec / Dan" }, occupation: { label: "Zanimanje", hint: "Posao u vašoj zemlji" }, addressInKorea: { label: "Adresa u Koreji", hint: "Hotel ili smeštaj — detaljno" }, purposeOfVisit: { label: "Svrha posete", options: ["Turizam", "Individualno putovanje", "Grupna tura", "Poslovno", "Diplomatsko / Službeno", "Medicinski tretman", "Poseta porodici / prijatelji", "Konferencija / Događaj", "Zaposlenje", "Studije", "Sportski događaj", "Ostalo"] }, departureDate: { label: "Datum odlaska", hint: "Planirani datum odlaska iz Koreje" }, departureFlightNo: { label: "Br. leta/broda odlaska", hint: "Opcionalno" }, signature: { label: "Potpis", hint: "Potpišite kao u pasošu" } } },
  te: { formTitle: "రాక కార్డు", country: "కొరియా", travelerInfo: "పూరించే సూచనలు", langCode: "TE", rtl: false,
    fields: { surname: { label: "ఇంటి పేరు", hint: "పాస్‌పోర్ట్‌లో ఉన్నట్లు" }, givenName: { label: "పేరు", hint: "పాస్‌పోర్ట్‌లో ఉన్నట్లు" }, gender: { label: "లింగం", options: ["పురుషుడు", "స్త్రీ"] }, nationality: { label: "జాతీయత", hint: "పౌరసత్వం దేశం" }, dob: { label: "పుట్టిన తేదీ", hint: "సంవత్సరం / నెల / రోజు" }, occupation: { label: "వృత్తి", hint: "మీ దేశంలో పని" }, addressInKorea: { label: "కొరియాలో చిరునామా", hint: "హోటల్ లేదా నివాసం — వివరంగా" }, purposeOfVisit: { label: "సందర్శన లక్ష్యం", options: ["పర్యటన", "వ్యక్తిగత ప్రయాణం", "సమూహ పర్యటన", "వ్యాపారం", "దౌత్య / అధికారిక", "వైద్య చికిత్స", "కుటుంబం / స్నేహితులను చూడడం", "సదస్సు / కార్యక్రమం", "ఉపాధి", "చదువు", "క్రీడా కార్యక్రమం", "ఇతర"] }, departureDate: { label: "నిష్క్రమణ తేదీ", hint: "కొరియా నుండి బయలుదేరే తేదీ" }, departureFlightNo: { label: "నిష్క్రమణ విమాన / నౌక సంఖ్య", hint: "ఐచ్ఛికం" }, signature: { label: "సంతకం", hint: "పాస్‌పోర్ట్ ప్రకారం సంతకం" } } },
  mr: { formTitle: "आगमन कार्ड", country: "कोरिया", travelerInfo: "भरण्याचे निर्देश", langCode: "MR", rtl: false,
    fields: { surname: { label: "आडनाव", hint: "पासपोर्टनुसार" }, givenName: { label: "नाव", hint: "पासपोर्टनुसार" }, gender: { label: "लिंग", options: ["पुरुष", "स्त्री"] }, nationality: { label: "राष्ट्रीयत्व", hint: "नागरिकत्वाचा देश" }, dob: { label: "जन्म तारीख", hint: "वर्ष / महिना / दिवस" }, occupation: { label: "व्यवसाय", hint: "आपल्या देशातील काम" }, addressInKorea: { label: "कोरियातील पत्ता", hint: "हॉटेल किंवा निवास — तपशीलवार" }, purposeOfVisit: { label: "भेटीचा उद्देश", options: ["पर्यटन", "वैयक्तिक प्रवास", "गट पर्यटन", "व्यवसाय", "राजनैतिक / शासकीय", "वैद्यकीय उपचार", "कुटुंब / मित्रांना भेट", "परिषद / कार्यक्रम", "रोजगार", "अभ्यास", "क्रीडा स्पर्धा", "इतर"] }, departureDate: { label: "निघण्याची तारीख", hint: "कोरियातून निघण्याची नियोजित तारीख" }, departureFlightNo: { label: "निघण्याचे विमान / जहाज क्र.", hint: "पर्यायी" }, signature: { label: "स्वाक्षरी", hint: "पासपोर्टनुसार स्वाक्षरी" } } },
  gu: { formTitle: "આગમન કાર્ડ", country: "કોરિયા", travelerInfo: "ભરવાની સૂચનાઓ", langCode: "GU", rtl: false,
    fields: { surname: { label: "અટક", hint: "પાસપોર્ટ મુજબ" }, givenName: { label: "નામ", hint: "પાસપોર્ટ મુજબ" }, gender: { label: "જાતિ", options: ["પુરુષ", "સ્ત્રી"] }, nationality: { label: "રાષ્ટ્રીયતા", hint: "નાગરિકતાનો દેશ" }, dob: { label: "જન્મ તારીખ", hint: "વર્ષ / મહિનો / દિવસ" }, occupation: { label: "વ્યવસાય", hint: "તમારા દેશમાં કામ" }, addressInKorea: { label: "કોરિયામાં સરનામું", hint: "હોટેલ અથવા રહેઠાણ — વિગતવાર" }, purposeOfVisit: { label: "મુલાકાતનો હેતુ", options: ["પ્રવાસ", "વ્યક્તિગત મુસાફરી", "જૂથ પ્રવાસ", "વ્યવસાય", "રાજદ્વારી / સત્તાવાર", "તબીબી સારવાર", "કુટુંબ / મિત્રોની મુલાકાત", "પરિષદ / કાર્યક્રમ", "રોજગાર", "અભ્યાસ", "રમત-ગમત ઇવેન્ટ", "અન્ય"] }, departureDate: { label: "પ્રસ્થાન તારીખ", hint: "કોરિયા છોડવાની આયોજિત તારીખ" }, departureFlightNo: { label: "પ્રસ્થાન ફ્લાઇટ / જહાજ નં.", hint: "વૈકલ્પિક" }, signature: { label: "સહી", hint: "પાસપોર્ટ મુજબ સહી" } } },
  ml: { formTitle: "ആഗമന കാർഡ്", country: "കൊറിയ", travelerInfo: "പൂരിപ്പിക്കൽ നിർദ്ദേശങ്ങൾ", langCode: "ML", rtl: false,
    fields: { surname: { label: "കുടുംബ നാമം", hint: "പാസ്‌പോർട്ട് അനുസരിച്ച്" }, givenName: { label: "പേര്", hint: "പാസ്‌പോർട്ട് അനുസരിച്ച്" }, gender: { label: "ലിംഗം", options: ["പുരുഷൻ", "സ്ത്രീ"] }, nationality: { label: "ദേശീയത", hint: "പൗരത്വ രാജ്യം" }, dob: { label: "ജനനത്തീയതി", hint: "വർഷം / മാസം / ദിവസം" }, occupation: { label: "തൊഴിൽ", hint: "നിങ്ങളുടെ രാജ്യത്തെ ജോലി" }, addressInKorea: { label: "കൊറിയയിലെ വിലാസം", hint: "ഹോട്ടൽ അല്ലെങ്കിൽ താമസസ്ഥലം — വിശദമായി" }, purposeOfVisit: { label: "സന്ദർശന ഉദ്ദേശ്യം", options: ["ടൂറിസം", "വ്യക്തിഗത യാത്ര", "ഗ്രൂപ്പ് ടൂർ", "ബിസിനസ്", "നയതന്ത്ര / ഔദ്യോഗിക", "വൈദ്യ ചികിത്സ", "കുടുംബം / സുഹൃത്തുക്കളെ കാണൽ", "കോൺഫറൻസ് / ഇവന്റ്", "തൊഴിൽ", "പഠനം", "കായിക മത്സരം", "മറ്റുള്ളവ"] }, departureDate: { label: "പ്രസ്ഥാന തീയതി", hint: "കൊറിയ വിടാൻ ആസൂത്രിത തീയതി" }, departureFlightNo: { label: "പ്രസ്ഥാന വിമാനം / കപ്പൽ നമ്പർ", hint: "ഐച്ഛികം" }, signature: { label: "ഒപ്പ്", hint: "പാസ്‌പോർട്ട് അനുസരിച്ച് ഒപ്പിടുക" } } },
  kn: { formTitle: "ಆಗಮನ ಕಾರ್ಡ್", country: "ಕೊರಿಯಾ", travelerInfo: "ಭರ್ತಿ ಮಾಡುವ ಸೂಚನೆಗಳು", langCode: "KN", rtl: false,
    fields: { surname: { label: "ಕುಟುಂಬ ಹೆಸರು", hint: "ಪಾಸ್‌ಪೋರ್ಟ್ ಅನ್ವಯ" }, givenName: { label: "ಮೊದಲ ಹೆಸರು", hint: "ಪಾಸ್‌ಪೋರ್ಟ್ ಅನ್ವಯ" }, gender: { label: "ಲಿಂಗ", options: ["ಪುರುಷ", "ಮಹಿಳೆ"] }, nationality: { label: "ರಾಷ್ಟ್ರೀಯತೆ", hint: "ನಾಗರಿಕತ್ವ ದೇಶ" }, dob: { label: "ಹುಟ್ಟಿದ ದಿನಾಂಕ", hint: "ವರ್ಷ / ತಿಂಗಳು / ದಿನ" }, occupation: { label: "ವೃತ್ತಿ", hint: "ನಿಮ್ಮ ದೇಶದಲ್ಲಿ ಕೆಲಸ" }, addressInKorea: { label: "ಕೊರಿಯಾದಲ್ಲಿ ವಿಳಾಸ", hint: "ಹೋಟೆಲ್ ಅಥವಾ ವಾಸಸ್ಥಳ — ವಿವರವಾಗಿ" }, purposeOfVisit: { label: "ಭೇಟಿಯ ಉದ್ದೇಶ", options: ["ಪ್ರವಾಸ", "ವೈಯಕ್ತಿಕ ಪ್ರಯಾಣ", "ಗುಂಪು ಪ್ರವಾಸ", "ವ್ಯಾಪಾರ", "ರಾಜತಾಂತ್ರಿಕ / ಅಧಿಕೃತ", "ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ", "ಕುಟುಂಬ / ಸ್ನೇಹಿತರ ಭೇಟಿ", "ಸಮ್ಮೇಳನ / ಕಾರ್ಯಕ್ರಮ", "ಉದ್ಯೋಗ", "ಅಧ್ಯಯನ", "ಕ್ರೀಡಾ ಕಾರ್ಯಕ್ರಮ", "ಇತರೆ"] }, departureDate: { label: "ನಿರ್ಗಮನ ದಿನಾಂಕ", hint: "ಕೊರಿಯಾ ತೊರೆಯಲು ಯೋಜಿತ ದಿನಾಂಕ" }, departureFlightNo: { label: "ನಿರ್ಗಮನ ವಿಮಾನ / ಹಡಗು ಸಂ.", hint: "ಐಚ್ಛಿಕ" }, signature: { label: "ಸಹಿ", hint: "ಪಾಸ್‌ಪೋರ್ಟ್ ಅನ್ವಯ ಸಹಿ" } } },
  pa: { formTitle: "ਆਮਦ ਕਾਰਡ", country: "ਕੋਰੀਆ", travelerInfo: "ਭਰਨ ਦੀਆਂ ਹਦਾਇਤਾਂ", langCode: "PA", rtl: false,
    fields: { surname: { label: "ਉਪਨਾਮ", hint: "ਪਾਸਪੋਰਟ ਅਨੁਸਾਰ" }, givenName: { label: "ਨਾਮ", hint: "ਪਾਸਪੋਰਟ ਅਨੁਸਾਰ" }, gender: { label: "ਲਿੰਗ", options: ["ਪੁਰਸ਼", "ਔਰਤ"] }, nationality: { label: "ਕੌਮੀਅਤ", hint: "ਨਾਗਰਿਕਤਾ ਦਾ ਦੇਸ਼" }, dob: { label: "ਜਨਮ ਤਾਰੀਖ", hint: "ਸਾਲ / ਮਹੀਨਾ / ਦਿਨ" }, occupation: { label: "ਕਿੱਤਾ", hint: "ਆਪਣੇ ਦੇਸ਼ ਵਿੱਚ ਕੰਮ" }, addressInKorea: { label: "ਕੋਰੀਆ ਵਿੱਚ ਪਤਾ", hint: "ਹੋਟਲ ਜਾਂ ਰਹਾਇਸ਼ — ਵਿਸਤਾਰਤ" }, purposeOfVisit: { label: "ਦੌਰੇ ਦਾ ਮਕਸਦ", options: ["ਸੈਰ-ਸਪਾਟਾ", "ਨਿੱਜੀ ਯਾਤਰਾ", "ਸਮੂਹ ਦੌਰਾ", "ਕਾਰੋਬਾਰ", "ਕੂਟਨੀਤਿਕ / ਸਰਕਾਰੀ", "ਡਾਕਟਰੀ ਇਲਾਜ", "ਪਰਿਵਾਰ / ਦੋਸਤਾਂ ਨੂੰ ਮਿਲਣਾ", "ਕਾਨਫਰੰਸ / ਸਮਾਗਮ", "ਰੁਜ਼ਗਾਰ", "ਪੜ੍ਹਾਈ", "ਖੇਡ ਸਮਾਗਮ", "ਹੋਰ"] }, departureDate: { label: "ਰਵਾਨਗੀ ਦੀ ਤਾਰੀਖ", hint: "ਕੋਰੀਆ ਛੱਡਣ ਦੀ ਯੋਜਨਾਬੱਧ ਤਾਰੀਖ" }, departureFlightNo: { label: "ਰਵਾਨਗੀ ਉਡਾਣ / ਜਹਾਜ਼ ਨੰ.", hint: "ਵਿਕਲਪਿਕ" }, signature: { label: "ਦਸਤਖਤ", hint: "ਪਾਸਪੋਰਟ ਅਨੁਸਾਰ ਦਸਤਖਤ" } } },
  si: { formTitle: "පැමිණීමේ කාඩ්පත", country: "කොරියාව", travelerInfo: "පිරවීමේ උපදෙස්", langCode: "SI", rtl: false,
    fields: { surname: { label: "වාසගම", hint: "ගමන් බලපත්‍රයේ ඇති පරිදි" }, givenName: { label: "නම", hint: "ගමන් බලපත්‍රයේ ඇති පරිදි" }, gender: { label: "ලිංගය", options: ["පිරිමි", "ගැහැනු"] }, nationality: { label: "ජාතිකත්වය", hint: "පුරවැසිභාවයේ රට" }, dob: { label: "උපන් දිනය", hint: "වර්ෂ / මාස / දිනය" }, occupation: { label: "රැකියාව", hint: "ඔබේ රටේ රැකියාව" }, addressInKorea: { label: "කොරියාවේ ලිපිනය", hint: "හෝටලය හෝ නවාතැන — විස්තරාත්මකව" }, purposeOfVisit: { label: "සංචාරයේ අරමුණ", options: ["සංචාරය", "තනි ගමන", "සාමූහික සංචාරය", "ව්‍යාපාර", "රාජ්‍යතාන්ත්‍රික / නිල", "වෛද්‍ය ප්‍රතිකාර", "පවුල / මිතුරන් බැලීම", "සම්මේලනය / සිදුවීම", "රැකියා", "අධ්‍යාපනය", "ක්‍රීඩා සිදුවීම", "වෙනත්"] }, departureDate: { label: "පිටත්වීමේ දිනය", hint: "කොරියාවෙන් යාමට නියමිත දිනය" }, departureFlightNo: { label: "පිටත්වීමේ ගුවන් / නෞකා අංකය", hint: "විකල්ප" }, signature: { label: "අත්සන", hint: "ගමන් බලපත්‍රය අනුව අත්සන" } } },
  my: { formTitle: "ရောက်ရှိမှုကတ်", country: "ကိုရီးယား", travelerInfo: "ဖြည့်စွက်ရန် ညွှန်ကြားချက်များ", langCode: "MY", rtl: false,
    fields: { surname: { label: "မျိုးနွယ်အမည်", hint: "နိုင်ငံကူးလက်မှတ်အတိုင်း" }, givenName: { label: "အမည်", hint: "နိုင်ငံကူးလက်မှတ်အတိုင်း" }, gender: { label: "ကျား/မ", options: ["ကျား", "မ"] }, nationality: { label: "နိုင်ငံသားဆိုင်ရာ", hint: "နိုင်ငံသားဖြစ်သောနိုင်ငံ" }, dob: { label: "မွေးသက္ကရာဇ်", hint: "နှစ် / လ / ရက်" }, occupation: { label: "အလုပ်အကိုင်", hint: "မိမိနိုင်ငံရှိ အလုပ်" }, addressInKorea: { label: "ကိုရီးယားတွင် နေရပ်လိပ်စာ", hint: "ဟိုတယ် သို့မဟုတ် တည်းခိုရာနေရာ — အသေးစိတ်" }, purposeOfVisit: { label: "ဝင်ရောက်ရည်ရွယ်ချက်", options: ["ခရီးသွား", "တစ်ဦးတည်းခရီး", "အုပ်စုခရီး", "စီးပွားရေး", "သံတမန်/တရားဝင်", "ဆေးကုသမှု", "မိသားစု/မိတ်ဆွေ သွားရောက်", "ညီလာခံ/ပွဲ", "အလုပ်အကိုင်", "ပညာသင်", "အားကစားပွဲ", "အခြား"] }, departureDate: { label: "ထွက်ခွာမည့်ရက်စွဲ", hint: "ကိုရီးယားမှ ထွက်ခွာမည့် စီစဉ်ထားသောရက်" }, departureFlightNo: { label: "ထွက်ခွာသောလေယာဉ်/သင်္ဘောနံပါတ်", hint: "ရွေးချယ်မှုဆိုင်ရာ" }, signature: { label: "လက်မှတ်", hint: "နိုင်ငံကူးလက်မှတ်ရှိ လက်မှတ်နှင့် တူညီစွာ" } } },
  km: { formTitle: "កាតមកដល់", country: "កូរ៉េ", travelerInfo: "ការណែនាំក្នុងការបំពេញ", langCode: "KM", rtl: false,
    fields: { surname: { label: "នាមត្រកូល", hint: "តាមលិខិតឆ្លងដែន" }, givenName: { label: "ឈ្មោះ", hint: "តាមលិខិតឆ្លងដែន" }, gender: { label: "ភេទ", options: ["ប្រុស", "ស្រី"] }, nationality: { label: "សញ្ជាតិ", hint: "ប្រទេសដែលជាពលរដ្ឋ" }, dob: { label: "ថ្ងៃខែឆ្នាំកំណើត", hint: "ឆ្នាំ / ខែ / ថ្ងៃ" }, occupation: { label: "មុខរបរ", hint: "ការងារក្នុងប្រទេសរបស់អ្នក" }, addressInKorea: { label: "អាសយដ្ឋាននៅកូរ៉េ", hint: "សណ្ឋាគារ ឬកន្លែងស្នាក់នៅ — លម្អិត" }, purposeOfVisit: { label: "គោលបំណងនៃការទស្សនា", options: ["ទេសចរណ៍", "ការធ្វើដំណើរបុគ្គល", "ទស្សនកិច្ចជាក្រុម", "អាជីវកម្ម", "ការទូត / ផ្លូវការ", "ការព្យាបាលពេទ្យ", "ទស្សនាក្រុមគ្រួសារ / មិត្តភក្ដិ", "សន្និបាត / ព្រឹត្តិការណ៍", "ការងារ", "ការសិក្សា", "ព្រឹត្តិការណ៍កីឡា", "ផ្សេងៗ"] }, departureDate: { label: "ថ្ងៃចេញដំណើរ", hint: "ថ្ងៃដែលគ្រោងចាកចេញពីកូរ៉េ" }, departureFlightNo: { label: "លេខជើងហោះហើរ / នាវា", hint: "ស្រេចចិត្ត" }, signature: { label: "ហត្ថលេខា", hint: "ចុះហត្ថលេខាដូចក្នុងលិខិតឆ្លងដែន" } } },
  lo: { formTitle: "ບັດການເດີນທາງມາຮອດ", country: "ເກົາຫຼີ", travelerInfo: "ຄຳແນະນຳໃນການຕື່ມ", langCode: "LO", rtl: false,
    fields: { surname: { label: "ນາມສະກຸນ", hint: "ຕາມທີ່ລະບຸໃນໜັງສືຜ່ານແດນ" }, givenName: { label: "ຊື່", hint: "ຕາມທີ່ລະບຸໃນໜັງສືຜ່ານແດນ" }, gender: { label: "ເພດ", options: ["ຊາຍ", "ຍິງ"] }, nationality: { label: "ສັນຊາດ", hint: "ປະເທດທີ່ເປັນພົນລະເມືອງ" }, dob: { label: "ວັນເດືອນປີເກີດ", hint: "ປີ / ເດືອນ / ວັນ" }, occupation: { label: "ອາຊີບ", hint: "ວຽກງານໃນປະເທດຂອງທ່ານ" }, addressInKorea: { label: "ທີ່ຢູ່ໃນເກົາຫຼີ", hint: "ໂຮງແຮມ ຫຼື ທີ່ພັກ — ລາຍລະອຽດ" }, purposeOfVisit: { label: "ຈຸດປະສົງການເດີນທາງ", options: ["ທ່ອງທ່ຽວ", "ເດີນທາງສ່ວນຕົວ", "ທ່ອງທ່ຽວກຸ່ມ", "ທຸລະກິດ", "ການທູດ / ທາງການ", "ຮັກສາພະຍາດ", "ຢ້ຽມຍາດ / ໝູ່ເພື່ອນ", "ກອງປະຊຸມ / ງານ", "ການຈ້າງງານ", "ການຮຽນ", "ກິດຈະກຳກີຬາ", "ອື່ນໆ"] }, departureDate: { label: "ວັນທີ່ອອກເດີນທາງ", hint: "ວັນທີ່ວາງແຜນຈະອອກຈາກເກົາຫຼີ" }, departureFlightNo: { label: "ເລກຖ້ຽວບິນ / ເຮືອ", hint: "ທາງເລືອກ" }, signature: { label: "ລາຍເຊັນ", hint: "ເຊັນຕາມໜັງສືຜ່ານແດນ" } } },
  az: { formTitle: "Gəliş kartı", country: "KOREYA", travelerInfo: "Doldurma təlimatları", langCode: "AZ", rtl: false,
    fields: { surname: { label: "Soyad", hint: "Pasportda göstərildiyi kimi" }, givenName: { label: "Ad", hint: "Pasportda göstərildiyi kimi" }, gender: { label: "Cins", options: ["Kişi", "Qadın"] }, nationality: { label: "Vətəndaşlıq", hint: "Vətəndaşlıq ölkəsi" }, dob: { label: "Doğum tarixi", hint: "İl / Ay / Gün" }, occupation: { label: "Peşə", hint: "Öz ölkənizdəki iş" }, addressInKorea: { label: "Koreyadakı ünvan", hint: "Otel və ya qalacaq yer — ətraflı" }, purposeOfVisit: { label: "Ziyarətin məqsədi", options: ["Turizm", "Fərdi səyahət", "Qrup turu", "Biznes", "Diplomatik / Rəsmi", "Tibbi müalicə", "Ailə / Dostları ziyarət", "Konfrans / Tədbir", "Məşğulluq", "Təhsil", "İdman tədbiri", "Digər"] }, departureDate: { label: "Getmə tarixi", hint: "Koreyadan ayrılmağın planlaşdırılan tarixi" }, departureFlightNo: { label: "Çıxış reys / gəmi nömrəsi", hint: "İstəyə bağlı" }, signature: { label: "İmza", hint: "Pasportdakı kimi imzalayın" } } },
  kk: { formTitle: "Келу картасы", country: "КОРЕЯ", travelerInfo: "Толтыру нұсқаулығы", langCode: "KK", rtl: false,
    fields: { surname: { label: "Тегі", hint: "Паспорттағыдай" }, givenName: { label: "Аты", hint: "Паспорттағыдай" }, gender: { label: "Жынысы", options: ["Ер", "Әйел"] }, nationality: { label: "Азаматтығы", hint: "Азаматтық елі" }, dob: { label: "Туған күні", hint: "Жыл / Ай / Күн" }, occupation: { label: "Мамандығы", hint: "Өз елінде жұмыс" }, addressInKorea: { label: "Кореядағы мекенжайы", hint: "Қонақүй немесе тұрғын орын — егжей-тегжейлі" }, purposeOfVisit: { label: "Келу мақсаты", options: ["Туризм", "Жеке саяхат", "Топтық тур", "Бизнес", "Дипломатиялық / Ресми", "Медициналық емдеу", "Отбасы / Досқа бару", "Конференция / Іс-шара", "Жұмыспен қамту", "Оқу", "Спорт іс-шарасы", "Басқа"] }, departureDate: { label: "Кету күні", hint: "Кореядан кетудің жоспарланған күні" }, departureFlightNo: { label: "Кету рейсі / кеме нөмірі", hint: "Міндетті емес" }, signature: { label: "Қолтаңба", hint: "Паспорттағыдай қол қойыңыз" } } },
  uz: { formTitle: "Kelish kartasi", country: "KOREYA", travelerInfo: "To'ldirish yo'riqnomasi", langCode: "UZ", rtl: false,
    fields: { surname: { label: "Familiya", hint: "Pasportdagi kabi" }, givenName: { label: "Ism", hint: "Pasportdagi kabi" }, gender: { label: "Jinsi", options: ["Erkak", "Ayol"] }, nationality: { label: "Fuqaroligi", hint: "Fuqarolik mamlakati" }, dob: { label: "Tug'ilgan sanasi", hint: "Yil / Oy / Kun" }, occupation: { label: "Kasbi", hint: "O'z mamlakatidagi ishi" }, addressInKorea: { label: "Koreyada manzil", hint: "Mehmonxona yoki turar joy — batafsil" }, purposeOfVisit: { label: "Tashrif maqsadi", options: ["Turizm", "Shaxsiy sayohat", "Guruh turi", "Biznes", "Diplomatik / Rasmiy", "Tibbiy davolash", "Oila / Do'stlarni ziyorat", "Konferensiya / Tadbir", "Ish", "O'qish", "Sport tadbirı", "Boshqa"] }, departureDate: { label: "Ketish sanasi", hint: "Koreyadan ketishning rejalashtirilgan sanasi" }, departureFlightNo: { label: "Ketish reysi / kema raqami", hint: "Ixtiyoriy" }, signature: { label: "Imzo", hint: "Pasportdagi kabi imzo qo'ying" } } },
  am: { formTitle: "የመምጣት ካርድ", country: "ኮሪያ", travelerInfo: "የመሙያ መመሪያ", langCode: "AM", rtl: false,
    fields: { surname: { label: "የአባት ስም", hint: "እንደ ፓስፖርቱ" }, givenName: { label: "ስም", hint: "እንደ ፓስፖርቱ" }, gender: { label: "ፆታ", options: ["ወንድ", "ሴት"] }, nationality: { label: "ዜግነት", hint: "የዜግነት አገር" }, dob: { label: "የልደት ቀን", hint: "ዓመት / ወር / ቀን" }, occupation: { label: "ሙያ", hint: "በሀገርዎ ያለ ሥራ" }, addressInKorea: { label: "በኮሪያ ያለ አድራሻ", hint: "ሆቴል ወይም መኖሪያ — ዝርዝር" }, purposeOfVisit: { label: "የጉዞ ዓላማ", options: ["ቱሪዝም", "ግለሰብ ጉዞ", "የቡድን ጉዞ", "ንግድ", "ዲፕሎማሲያዊ / ኦፊሴላዊ", "ሕክምና", "ቤተሰብ / ጓደኞችን ጉብኝት", "ጉባኤ / ዝግጅት", "ቅጥር", "ትምህርት", "ስፖርት ዝግጅት", "ሌሎች"] }, departureDate: { label: "የመነሻ ቀን", hint: "ከኮሪያ የሚነሱበት የታቀደ ቀን" }, departureFlightNo: { label: "የመነሻ በረራ / መርከብ ቁጥር", hint: "አማራጭ" }, signature: { label: "ፊርማ", hint: "እንደ ፓስፖርቱ ፊርማ" } } },
  ha: { formTitle: "Katin Isowa", country: "KOREA", travelerInfo: "Umarni na cika", langCode: "HA", rtl: false,
    fields: { surname: { label: "Sunan Iyali", hint: "Kamar yadda yake a fasfo" }, givenName: { label: "Suna", hint: "Kamar yadda yake a fasfo" }, gender: { label: "Jinsi", options: ["Namiji", "Mace"] }, nationality: { label: "Ƙasa", hint: "Ƙasar zama" }, dob: { label: "Ranar Haihuwa", hint: "Shekara / Wata / Rana" }, occupation: { label: "Sana'a", hint: "Aiki a ƙasarka" }, addressInKorea: { label: "Adireshi a Korea", hint: "Hotel ko wurin zama — a daki-daki" }, purposeOfVisit: { label: "Manufar Ziyara", options: ["Yawon shakatawa", "Tafiya ta mutum ɗaya", "Yawon ƙungiya", "Kasuwanci", "Diflomasiyya / Hukuma", "Magani", "Ziyartar iyali / abokai", "Taro / Gangamin", "Aiki", "Karatu", "Wasanni", "Sauran"] }, departureDate: { label: "Ranar Tashi", hint: "Ranar da aka shirya tashi daga Korea" }, departureFlightNo: { label: "Lambar Jirgi / Jirgin ruwa", hint: "Zaɓi ne" }, signature: { label: "Sa hannu", hint: "Sa hannu kamar a fasfo" } } },
  yo: { formTitle: "Kaadi Dide", country: "KOREA", travelerInfo: "Awọn itọsọna fun kikun", langCode: "YO", rtl: false,
    fields: { surname: { label: "Orukọ Idílé", hint: "Gẹgẹ bi o ṣe wa ninu ìwé-ìrìn" }, givenName: { label: "Orukọ", hint: "Gẹgẹ bi o ṣe wa ninu ìwé-ìrìn" }, gender: { label: "Ìbálò", options: ["Akọ", "Abo"] }, nationality: { label: "Orílẹ̀-èdè", hint: "Orílẹ̀-èdè ọmọ ẹgbẹ" }, dob: { label: "Ọjọ Ìbí", hint: "Ọdún / Osù / Ọjọ" }, occupation: { label: "Iṣẹ́", hint: "Iṣẹ́ rẹ ní orílẹ̀-èdè rẹ" }, addressInKorea: { label: "Àdírẹ́sì ní Korea", hint: "Hotẹ́lì tàbí ibùgbé — ní àlàyé" }, purposeOfVisit: { label: "Ète Àbẹ̀wò", options: ["Ìrìn Àjò", "Ìrìn tí ẹni kan ṣe", "Ìrìn ẹgbẹ́", "Òwò", "Aṣojú / Ìjọba", "Ìtọ́jú Ìlera", "Ìbẹ̀wò Ẹbí / Àwọn Ọ̀rẹ́", "Àpéjọ / Ìṣẹ̀lẹ̀", "Iṣẹ́ Ìgbé", "Ìkẹ́kọ̀ọ́", "Ìṣẹ̀lẹ̀ Eré Ìdárayá", "Mìíràn"] }, departureDate: { label: "Ọjọ Ìkúrò", hint: "Ọjọ tí a gbero láti kúrò ní Korea" }, departureFlightNo: { label: "Nọ́mbà Ọkọ̀ Afẹ́fẹ́ / Ọkọ̀ Ojú Omi", hint: "Àṣàyàn" }, signature: { label: "Àmì Ọwọ́", hint: "Fi àmì ọwọ́ bíi ti ìwé-ìrìn rẹ" } } },
};

// Field display order (matches physical form)
const FIELD_ORDER = [
  'surname', 'givenName', 'gender', 'nationality', 'dob',
  'occupation', 'addressInKorea', 'purposeOfVisit',
  'departureDate', 'departureFlightNo', 'signature'
];

function getFormData(langCode) {
  if (FORM_DATA[langCode]) return { ...FORM_DATA[langCode], _fallback: false };
  const alt = langCode.replace('-', '_');
  if (FORM_DATA[alt]) return { ...FORM_DATA[alt], _fallback: false };
  const lang = LANGUAGES.find(l => l.code === langCode);
  return { ...FORM_DATA['en'], _fallback: true, _nativeName: lang ? lang.native : langCode };
}
