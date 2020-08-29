const countryList = [
    { value:"AF", label: "Afghanistan" },
    { value:"AX", label: "Åland Islands" },
    { value:"AL", label: "Albania" },
    { value:"DZ", label: "Algeria" },
    { value:"AS", label: "American Samoa" },
    { value:"AD", label: "Andorra" },
    { value:"AO", label: "Angola" },
    { value:"AI", label: "Anguilla" },
    { value:"AQ", label: "Antarctica" },
    { value:"AG", label: "Antigua and Barbuda" },
    { value:"AR", label: "Argentina" },
    { value:"AM", label: "Armenia" },
    { value:"AW", label: "Aruba" },
    { value:"AU", label: "Australia" },
    { value:"AT", label: "Austria" },
    { value:"AZ", label: "Azerbaijan" },
    { value:"BS", label: "Bahamas" },
    { value:"BH", label: "Bahrain" },
    { value:"BD", label: "Bangladesh" },
    { value:"BB", label: "Barbados" },
    { value:"BY", label: "Belarus" },
    { value:"BE", label: "Belgium" },
    { value:"BZ", label: "Belize" },
    { value:"BJ", label: "Benin" },
    { value:"BM", label: "Bermuda" },
    { value:"BT", label: "Bhutan" },
    { value:"BO", label: "Bolivia, Plurinational State of" },
    { value:"BQ", label: "Bonaire, Sint Eustatius and Saba" },
    { value:"BA", label: "Bosnia and Herzegovina" },
    { value:"BW", label: "Botswana" },
    { value:"BV", label: "Bouvet Island" },
    { value:"BR", label: "Brazil" },
    { value:"IO", label: "British Indian Ocean Territory" },
    { value:"BN", label: "Brunei Darussalam" },
    { value:"BG", label: "Bulgaria" },
    { value:"BF", label: "Burkina Faso" },
    { value:"BI", label: "Burundi" },
    { value:"KH", label: "Cambodia" },
    { value:"CM", label: "Cameroon" },
    { value:"CA", label: "Canada" },
    { value:"CV", label: "Cape Verde" },
    { value:"KY", label: "Cayman Islands" },
    { value:"CF", label: "Central African Republic" },
    { value:"TD", label: "Chad" },
    { value:"CL", label: "Chile" },
    { value:"CN", label: "China" },
    { value:"CX", label: "Christmas Island" },
    { value:"CC", label: "Cocos (Keeling) Islands" },
    { value:"CO", label: "Colombia" },
    { value:"KM", label: "Comoros" },
    { value:"CG", label: "Congo" },
    { value:"CD", label: "Congo, the Democratic Republic of the" },
    { value:"CK", label: "Cook Islands" },
    { value:"CR", label: "Costa Rica" },
    { value:"CI", label: "Côte d'Ivoire" },
    { value:"HR", label: "Croatia" },
    { value:"CU", label: "Cuba" },
    { value:"CW", label: "Curaçao" },
    { value:"CY", label: "Cyprus" },
    { value:"CZ", label: "Czech Republic" },
    { value:"DK", label: "Denmark" },
    { value:"DJ", label: "Djibouti" },
    { value:"DM", label: "Dominica" },
    { value:"DO", label: "Dominican Republic" },
    { value:"EC", label: "Ecuador" },
    { value:"EG", label: "Egypt" },
    { value:"SV", label: "El Salvador" },
    { value:"GQ", label: "Equatorial Guinea" },
    { value:"ER", label: "Eritrea" },
    { value:"EE", label: "Estonia" },
    { value:"ET", label: "Ethiopia" },
    { value:"FK", label: "Falkland Islands (Malvinas)" },
    { value:"FO", label: "Faroe Islands" },
    { value:"FJ", label: "Fiji" },
    { value:"FI", label: "Finland" },
    { value:"FR", label: "France" },
    { value:"GF", label: "French Guiana" },
    { value:"PF", label: "French Polynesia" },
    { value:"TF", label: "French Southern Territories" },
    { value:"GA", label: "Gabon" },
    { value:"GM", label: "Gambia" },
    { value:"GE", label: "Georgia" },
    { value:"DE", label: "Germany" },
    { value:"GH", label: "Ghana" },
    { value:"GI", label: "Gibraltar" },
    { value:"GR", label: "Greece" },
    { value:"GL", label: "Greenland" },
    { value:"GD", label: "Grenada" },
    { value:"GP", label: "Guadeloupe" },
    { value:"GU", label: "Guam" },
    { value:"GT", label: "Guatemala" },
    { value:"GG", label: "Guernsey" },
    { value:"GN", label: "Guinea" },
    { value:"GW", label: "Guinea-Bissau" },
    { value:"GY", label: "Guyana" },
    { value:"HT", label: "Haiti" },
    { value:"HM", label: "Heard Island and McDonald Islands" },
    { value:"VA", label: "Holy See (Vatican City State)" },
    { value:"HN", label: "Honduras" },
    { value:"HK", label: "Hong Kong" },
    { value:"HU", label: "Hungary" },
    { value:"IS", label: "Iceland" },
    { value:"IN", label: "India" },
    { value:"ID", label: "Indonesia" },
    { value:"IR", label: "Iran, Islamic Republic of" },
    { value:"IQ", label: "Iraq" },
    { value:"IE", label: "Ireland" },
    { value:"IM", label: "Isle of Man" },
    { value:"IL", label: "Israel" },
    { value:"IT", label: "Italy" },
    { value:"JM", label: "Jamaica" },
    { value:"JP", label: "Japan" },
    { value:"JE", label: "Jersey" },
    { value:"JO", label: "Jordan" },
    { value:"KZ", label: "Kazakhstan" },
    { value:"KE", label: "Kenya" },
    { value:"KI", label: "Kiribati" },
    { value:"KP", label: "Korea, Democratic People's Republic of" },
    { value:"KR", label: "Korea, Republic of" },
    { value:"KW", label: "Kuwait" },
    { value:"KG", label: "Kyrgyzstan" },
    { value:"LA", label: "Lao People's Democratic Republic" },
    { value:"LV", label: "Latvia" },
    { value:"LB", label: "Lebanon" },
    { value:"LS", label: "Lesotho" },
    { value:"LR", label: "Liberia" },
    { value:"LY", label: "Libya" },
    { value:"LI", label: "Liechtenstein" },
    { value:"LT", label: "Lithuania" },
    { value:"LU", label: "Luxembourg" },
    { value:"MO", label: "Macao" },
    { value:"MK", label: "Macedonia, the former Yugoslav Republic of" },
    { value:"MG", label: "Madagascar" },
    { value:"MW", label: "Malawi" },
    { value:"MY", label: "Malaysia" },
    { value:"MV", label: "Maldives" },
    { value:"ML", label: "Mali" },
    { value:"MT", label: "Malta" },
    { value:"MH", label: "Marshall Islands" },
    { value:"MQ", label: "Martinique" },
    { value:"MR", label: "Mauritania" },
    { value:"MU", label: "Mauritius" },
    { value:"YT", label: "Mayotte" },
    { value:"MX", label: "Mexico" },
    { value:"FM", label: "Micronesia, Federated States of" },
    { value:"MD", label: "Moldova, Republic of" },
    { value:"MC", label: "Monaco" },
    { value:"MN", label: "Mongolia" },
    { value:"ME", label: "Montenegro" },
    { value:"MS", label: "Montserrat" },
    { value:"MA", label: "Morocco" },
    { value:"MZ", label: "Mozambique" },
    { value:"MM", label: "Myanmar" },
    { value:"NA", label: "Namibia" },
    { value:"NR", label: "Nauru" },
    { value:"NP", label: "Nepal" },
    { value:"NL", label: "Netherlands" },
    { value:"NC", label: "New Caledonia" },
    { value:"NZ", label: "New Zealand" },
    { value:"NI", label: "Nicaragua" },
    { value:"NE", label: "Niger" },
    { value:"NG", label: "Nigeria" },
    { value:"NU", label: "Niue" },
    { value:"NF", label: "ffolk Island" },
    { value:"MP", label: "Northern Mariana Islands" },
    { value:"NO", label: "Norway" },
    { value:"OM", label: "Oman" },
    { value:"PK", label: "Pakistan" },
    { value:"PW", label: "Palau" },
    { value:"PS", label: "Palestinian Territory, Occupied" },
    { value:"PA", label: "Panama" },
    { value:"PG", label: "Papua New Guinea" },
    { value:"PY", label: "Paraguay" },
    { value:"PE", label: "Peru" },
    { value:"PH", label: "Philippines" },
    { value:"PN", label: "Pitcairn" },
    { value:"PL", label: "Poland" },
    { value:"PT", label: "Portugal" },
    { value:"PR", label: "Puerto Rico" },
    { value:"QA", label: "Qatar" },
    { value:"RE", label: "Réunion" },
    { value:"RO", label: "Romania" },
    { value:"RU", label: "Russian Federation" },
    { value:"RW", label: "Rwanda" },
    { value:"BL", label: "Saint Barthélemy" },
    { value:"SH", label: "Saint Helena, Ascension and Tristan da Cunha" },
    { value:"KN", label: "Saint Kitts and Nevis" },
    { value:"LC", label: "Saint Lucia" },
    { value:"MF", label: "Saint Martin (French part)" },
    { value:"PM", label: "Saint Pierre and Miquelon" },
    { value:"VC", label: "Saint Vincent and the Grenadines" },
    { value:"WS", label: "Samoa" },
    { value:"SM", label: "San Marino" },
    { value:"ST", label: "Sao Tome and Principe" },
    { value:"SA", label: "Saudi Arabia" },
    { value:"SN", label: "Senegal" },
    { value:"RS", label: "Serbia" },
    { value:"SC", label: "Seychelles" },
    { value:"SL", label: "Sierra Leone" },
    { value:"SG", label: "Singapore" },
    { value:"SX", label: "Sint Maarten (Dutch part)" },
    { value:"SK", label: "Slovakia" },
    { value:"SI", label: "Slovenia" },
    { value:"SB", label: "Solomon Islands" },
    { value:"SO", label: "Somalia" },
    { value:"ZA", label: "South Africa" },
    { value:"GS", label: "South Georgia and the South Sandwich Islands" },
    { value:"SS", label: "South Sudan" },
    { value:"ES", label: "Spain" },
    { value:"LK", label: "Sri Lanka" },
    { value:"SD", label: "Sudan" },
    { value:"SR", label: "Suriname" },
    { value:"SJ", label: "Svalbard and Jan Mayen" },
    { value:"SZ", label: "Swaziland" },
    { value:"SE", label: "Sweden" },
    { value:"CH", label: "Switzerland" },
    { value:"SY", label: "Syrian Arab Republic" },
    { value:"TW", label: "Taiwan, Province of China" },
    { value:"TJ", label: "Tajikistan" },
    { value:"TZ", label: "Tanzania, United Republic of" },
    { value:"TH", label: "Thailand" },
    { value:"TL", label: "Timor-Leste" },
    { value:"TG", label: "Togo" },
    { value:"TK", label: "Tokelau" },
    { value:"TO", label: "Tonga" },
    { value:"TT", label: "Trinidad and Tobago" },
    { value:"TN", label: "Tunisia" },
    { value:"TR", label: "Turkey" },
    { value:"TM", label: "Turkmenistan" },
    { value:"TC", label: "Turks and Caicos Islands" },
    { value:"TV", label: "Tuvalu" },
    { value:"UG", label: "Uganda" },
    { value:"UA", label: "Ukraine" },
    { value:"AE", label: "United Arab Emirates" },
    { value:"GB", label: "United Kingdom" },
    { value:"US", label: "United States" },
    { value:"UM", label: "United States Minor Outlying Islands" },
    { value:"UY", label: "Uruguay" },
    { value:"UZ", label: "Uzbekistan" },
    { value:"VU", label: "Vanuatu" },
    { value:"VE", label: "Venezuela, Bolivarian Republic of" },
    { value:"VN", label: "Vietnam" },
    { value:"VG", label: "Virgin Islands, British" },
    { value:"VI", label: "Virgin Islands, U.S." },
    { value:"WF", label: "Wallis and Futuna" },
    { value:"EH", label: "Western Sahara" },
    { value:"YE", label: "Yemen" },
    { value:"ZM", label: "Zambia" },
    { value:"ZW", label: "Zimbabwe" }
]

const Languages = [
    { //Peninsula Ibérica
        countries: ['ES', 'PT', 'AD'],
        languages: [
            {value: 'ES', label: 'Spanish (Español, Castellano)'},
            {value: 'PT', label: 'Portuguese (Português)'},
            {value: 'GL', label: 'Galician (Galego)'},
            {value: 'CA', label: 'Catalan (Català)'},
            {value: 'EU', label: 'Basque (Euskera)'},
            {value: 'AN', label: 'Aragonese (Aragonés)'},
            {value: 'OC', label: `Occitan (Lenga d'òc)`},
        ]
    },
    { //British Islands
        countries: ['IE', 'GB'],
        languages: [
            {value: 'EN', label: 'English'},
            {value: 'KW', label: 'Cornish (Kernewek)'},
            {value: 'GA', label: 'Irish (Gaeilge)'},
            {value: 'GD', label: 'Scottish Gaelic (Gàidhlig)'},
            {value: 'CY', label: 'Welsh (Cymraeg)'},
            {value: 'GV', label: 'Manx (Gaelg)'},
        ]
    },
    { //Western Europe
        countries: ['FR', 'NL', 'BE'],
        languages: [
            { value: 'FR', label: 'French (Français)' },
            { value: 'DE', label: 'German (Deutsch)' },
            { value: 'NL', label: 'Dutch (Nederlands)' },
            { value: 'FY', label: 'Western Frisian (Frysk)' },
        ]
    },
    { //Mediterranean
        countries: ['IT', 'GR', 'CY', 'MT', 'SM', 'VA'],
        languages: [
            { value: 'IT', label: 'Italian (Italiano)' },
            { value: 'EL', label: 'Greek (ελληνικά)' },
            { value: 'TR', label: 'Turkish (Türkçe)' },
            { value: 'FR', label: 'French (Français)' },
            { value: 'DE', label: 'German (Deutsch)' },
            { value: 'SL', label: 'Slovenian (Slovenski Jezik)' },
            { value: 'SQ', label: 'Albanian (Shqip)' },
            { value: 'MT', label: 'Maltese (Malti)' },
        ]
    },
    { //Northern Europe
        countries: ['IS', 'NO', 'SE', 'FI', 'DK'],
        languages: [
            { value: 'IS', label: 'Icelandic (Íslenska)' },
            { value: 'NO', label: 'Norwegian (Norsk)' },
            { value: 'NN', label: 'Norwegian Nynorsk (Norsk Nynorsk)' },
            { value: 'NB', label: 'Norwegian Bokmål (Norsk Bokmål)' },
            { value: 'SV', label: 'Swedish (Svenska)' },
            { value: 'FI', label: 'Finnish (Suomi)' },
            { value: 'SE', label: 'Northern Sami (Davvisámegiella)' },
            { value: 'DA', label: 'Danish (Danks)' },
            { value: 'FO', label: 'Faroese (Føroyskt)' },
            { value: 'KL', label: 'Greenlandic (Kalaallisut)' },
        ]
    },
    { //Central Europe
        countries: ['CH', 'LU', 'DE', 'CZ', 'PL', 'SK', 'AT', 'SI', 'HR', 'HU', 'EE', 'LV', 'LT'],
        languages: [
            { value: 'FR', label: 'French (Français)' },
            { value: 'DE', label: 'German (Deutsch)' },
            { value: 'IT', label: 'Italian (Italiano)' },
            { value: 'RM', label: 'Romansh (Rumantsch Grischun)' },
            { value: 'LB', label: 'Luxembourgish (Lëtzebuergesch)' },
            { value: 'FY', label: 'Frisian (Frysk)' },
            { value: 'CS', label: 'Czech (Čeština)' },
            { value: 'SK', label: 'Slovak (Slovenčina)' },
            { value: 'PL', label: 'Polish (Język Polski)' },
            { value: 'HR', label: 'Croatian (Hrvatski Jezik)' },
            { value: 'HU', label: 'Hungarian (Magyarul)' },
            { value: 'SL', label: 'Slovenian (Slovenski Jezik)' },
            { value: 'ET', label: 'Estonian (Eesti)' },
            { value: 'LV', label: 'Latvian (Latviešu Valoda)' },
            { value: 'LT', label: 'Lithuanian (Lietuvių Kalba)' },
        ]
    },
    { //Eastern Europe
        countries: ['BY', 'UA', 'RU'],
        languages: [
            { value: 'RU', label: 'Russian (Pусский)' },
            { value: 'BE', label: 'Belarusian (беларуская мова)' },
            { value: 'UK', label: 'Ukrainian (Українська)' },
            { value: 'BA', label: 'Bashkir (башҡорт теле)' },
            { value: 'CE', label: 'Chechen (нохчийн мотт)' },
            { value: 'CV', label: 'Chuvash (чӑваш чӗлхи)' },
            { value: 'OS', label: 'Ossetian (ирон æвзаг)' },
            { value: 'TT', label: 'Tatar (татар теле)' },
            { value: 'DA', label: 'Danish (Danks)' },
        ]
    },
    //Southeastern Europe: Moldova, Romania, Bosnia Herzegovina, Serbia, Bulgaria, Montenegro, Kosovo, Macedonia del Norte, Albania
    //{},
    //Central Asia
    {
        countries: ['KZ', 'UZ', 'TJ', 'TM', 'KG', 'AF'],
        languages: [
            { value: 'PS' , label: 'Pashto (پښتو)' },
            { value: 'KK' , label: 'Kazakh (қазақ тілі)' },
            { value: 'KY' , label: 'Kyrgyz (Кыргыз тили)' },
            { value: 'TK' , label: 'Turkmen (Кыргыз тили)' },
            { value: 'TG' , label: 'Tajik (тоҷикӣ)' },
            { value: 'UZ' , label: 'Uzbek (Oʻzbek)' }
        ]
    },
    //South Asia
    {
        countries: ['IN', 'PK', 'BD', 'NP', 'BT', 'LK', 'MV'],
        languages: [
            { value: 'HI', label: 'Hindi (हिन्दी)' },
            { value: 'UR', label: 'Urdu (اردو)' },
            { value: 'BN', label: 'Bengali (বাংলা)' },
            { value: 'NE', label: 'Nepali (नेपाली)' },
            { value: 'DZ', label: 'Dzongkha (རྫོང་ཁ)' },
            { value: 'DV', label: 'Divehi (ދިވެހި)' },
            { value: 'SV', label: 'Sinhala (සිංහල)' },
            { value: 'TA', label: 'Tamil (සිංහල)'}
        ]
    },
    //East Asia
    {
        countries: ['CN', 'HK', 'TW', 'MO', 'JP', 'KR', 'KP', 'MN'],
        languages: [
            { value: 'ZH', label: 'Chinese (中文)' },
            { value: 'JA' , label: 'Japanese (日本語)' },
            { value: 'KO' , label: 'Korean (한국어)'  },
            { value: 'MN' ,label:'Mongolian (Монгол хэл)' }
        ]
    },
    /*{
        countries: [],
        languages: [

        ]
    },*/
]

const Global = [
    { value: "ab", label: "Abkhaz (аҧсуа)"},
    { value: "aa", label: "Afar (Afaraf)"},
    { value: "af", label: "Afrikaans (Afrikaans)"},
    { value: "ak", label: "Akan (Akan)"},
    { value: "sq", label: "Albanian (Shqip)"},
    { value: "am", label: "Amharic (አማርኛ)"},
    { value: "ar", label: "Arabic (العربية)"},
    { value: "an", label: "Aragonese (Aragonés)"},
    { value: "hy", label: "Armenian (Հայերեն)"},
    { value: "as", label: "Assamese (অসমীয়া)"},
    { value: "av", label: "Avaric (авар мацӀ, магӀарул мацӀ)"},
    { value: "ae", label: "Avestan (avesta)"},
    { value: "ay", label: "Aymara (aymar aru)"},
    { value: "az", label: "Azerbaijani (azərbaycan dili)"},
    { value: "bm", label: "Bambara (bamanankan)"},
    { value: "ba", label: "Bashkir (башҡорт теле)"},
    { value: "eu", label: "Basque (euskara, euskera)"},
    { value: "be", label: "Belarusian (Беларуская)"},
    { value: "bn", label: "Bengali (বাংলা)"},
    { value: "bh", label: "Bihari (भोजपुरी)"},
    { value: "bi", label: "Bislama (Bislama)"},
    { value: "bs", label: "Bosnian (bosanski jezik)"},
    { value: "br", label: "Breton (brezhoneg)"},
    { value: "bg", label: "Bulgarian (български език)"},
    { value: "my", label: "Burmese (ဗမာစာ)"},
    { value: "ca", label: "Catalan (Català)"},
    { value: "ch", label: "Chamorro (Chamoru)"},
    { value: "ce", label: "Chechen (нохчийн мотт)"},
    { value: "ny", label: "Chichewa (chiCheŵa, chinyanja)"},
    { value: "zh", label: "Chinese (中文 (Zhōngwén), 汉语, 漢語)"},
    { value: "cv", label: "Chuvash (чӑваш чӗлхи)"},
    { value: "kw", label: "Cornish (Kernewek)"},
    { value: "co", label: "Corsican (corsu, lingua corsa)"},
    { value: "cr", label: "Cree (ᓀᐦᐃᔭᐍᐏᐣ)"},
    { value: "hr", label: "Croatian (hrvatski)"},
    { value: "cs", label: "Czech (česky, čeština)"},
    { value: "da", label: "Danish (dansk)"},
    { value: "dv", label: "Divehi (ދިވެހި)"},
    { value: "nl", label: "Dutch (Nederlands, Vlaams)"},
    { value: "en", label: "English (English)"},
    { value: "eo", label: "Esperanto (Esperanto)"},
    { value: "et", label: "Estonian (eesti, eesti keel)"},
    { value: "ee", label: "Ewe (Eʋegbe)"},
    { value: "fo", label: "Faroese (føroyskt)"},
    { value: "fj", label: "Fijian (vosa Vakaviti)"},
    { value: "fi", label: "Finnish (suomi, suomen kieli)"},
    { value: "fr", label: "French (français, langue française)"},
    { value: "ff", label: "Fula (Fulfulde, Pulaar, Pular)"},
    { value: "gl", label: "Galician (Galego)"},
    { value: "ka", label: "Georgian (ქართული)"},
    { value: "de", label: "German (Deutsch)"},
    { value: "el", label: "Greek, Modern (Ελληνικά)"},
    { value: "gn", label: "Guaraní (Avañeẽ)"},
    { value: "gu", label: "Gujarati (ગુજરાતી)"},
    { value: "ht", label: "Haitian (Kreyòl ayisyen)"},
    { value: "ha", label: "Hausa (Hausa, هَوُسَ)"},
    { value: "he", label: "Hebrew (modern) (עברית)"},
    { value: "hz", label: "Herero (Otjiherero)"},
    { value: "hi", label: "Hindi (हिन्दी, हिंदी)"},
    { value: "ho", label: "Hiri Motu (Hiri Motu)"},
    { value: "hu", label: "Hungarian (Magyar)"},
    { value: "ia", label: "Interlingua (Interlingua)"},
    { value: "id", label: "Indonesian (Bahasa Indonesia)"},
    { value: "ie", label: "Interlingue"},
    { value: "ga", label: "Irish (Gaeilge)"},
    { value: "ig", label: "Igbo (Asụsụ Igbo)"},
    { value: "ik", label: "Inupiaq (Iñupiaq, Iñupiatun)"},
    { value: "io", label: "Ido (Ido)"},
    { value: "is", label: "Icelandic (Íslenska)"},
    { value: "it", label: "Italian (Italiano)"},
    { value: "iu", label: "Inuktitut (ᐃᓄᒃᑎᑐᑦ)"},
    { value: "ja", label: "Japanese (日本語 (にほんご／にっぽんご))"},
    { value: "jv", label: "Javanese (basa Jawa)"},
    { value: "kl", label: "Kalaallisut, Greenlandic (kalaallisut, kalaallit oqaasii)"},
    { value: "kn", label: "Kannada (ಕನ್ನಡ)"},
    { value: "kr", label: "Kanuri (Kanuri)"},
    { value: "ks", label: "Kashmiri (कश्मीरी, كشميري‎)"},
    { value: "kk", label: "Kazakh (Қазақ тілі)"},
    { value: "km", label: "Khmer (ភាសាខ្មែរ)"},
    { value: "ki", label: "Kikuyu, Gikuyu (Gĩkũyũ)"},
    { value: "rw", label: "Kinyarwanda (Ikinyarwanda)"},
    { value: "ky", label: "Kirghiz, Kyrgyz (кыргыз тили)"},
    { value: "kv", label: "Komi (коми кыв)"},
    { value: "kg", label: "Kongo (KiKongo)"},
    { value: "ko", label: "Korean (한국어 (韓國語), 조선말 (朝鮮語))"},
    { value: "ku", label: "Kurdish (Kurdî, كوردی‎)"},
    { value: "kj", label: "Kwanyama, Kuanyama (Kuanyama)"},
    { value: "la", label: "Latin (latine, lingua latina)"},
    { value: "lb", label: "Luxembourgish, Letzeburgesch (Lëtzebuergesch)"},
    { value: "lg", label: "Luganda (Luganda)"},
    { value: "li", label: "Limburgish, Limburgan, Limburger (Limburgs)"},
    { value: "ln", label: "Lingala (Lingála)"},
    { value: "lo", label: "Lao (ພາສາລາວ)"},
    { value: "lt", label: "Lithuanian (lietuvių kalba)"},
    { value: "lu", label: "Luba-Katanga ()"},
    { value: "lv", label: "Latvian (latviešu valoda)"},
    { value: "gv", label: "Manx (Gaelg, Gailck)"},
    { value: "mk", label: "Macedonian (македонски јазик)"},
    { value: "mg", label: "Malagasy (Malagasy fiteny)"},
    { value: "ms", label: "Malay (bahasa Melayu, بهاس ملايو‎)"},
    { value: "ml", label: "Malayalam (മലയാളം)"},
    { value: "mt", label: "Maltese (Malti)"},
    { value: "mi", label: "Māori (te reo Māori)"},
    { value: "mr", label: "Marathi (Marāṭhī) (मराठी)"},
    { value: "mh", label: "Marshallese (Kajin M̧ajeļ)"},
    { value: "mn", label: "Mongolian (монгол)"},
    { value: "na", label: "Nauru (Ekakairũ Naoero)"},
    { value: "nv", label: "Navajo, Navaho (Diné bizaad, Dinékʼehǰí)"},
    { value: "nb", label: "Norwegian Bokmål (Norsk bokmål)"},
    { value: "nd", label: "North Ndebele (isiNdebele)"},
    { value: "ne", label: "Nepali (नेपाली)"},
    { value: "ng", label: "Ndonga (Owambo)"},
    { value: "nn", label: "Norwegian Nynorsk (Norsk nynorsk)"},
    { value: "no", label: "Norwegian (Norsk)"},
    { value: "ii", label: "Nuosu (ꆈꌠ꒿ Nuosuhxop)"},
    { value: "nr", label: "South Ndebele (isiNdebele)"},
    { value: "oc", label: "Occitan (Occitan)"},
    { value: "oj", label: "Ojibwe, Ojibwa (ᐊᓂᔑᓈᐯᒧᐎᓐ)"},
    { value: "cu", label: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic (ѩзыкъ словѣньскъ)"},
    { value: "om", label: "Oromo (Afaan Oromoo)"},
    { value: "or", label: "Oriya (ଓଡ଼ିଆ)"},
    { value: "os", label: "Ossetian, Ossetic (ирон æвзаг)"},
    { value: "pa", label: "Panjabi, Punjabi (ਪੰਜਾਬੀ, پنجابی‎)"},
    { value: "pi", label: "Pāli (पाऴि)"},
    { value: "fa", label: "Persian (فارسی)"},
    { value: "pl", label: "Polish (polski)"},
    { value: "ps", label: "Pashto, Pushto (پښتو)"},
    { value: "pt", label: "Portuguese (Português)"},
    { value: "qu", label: "Quechua (Runa Simi, Kichwa)"},
    { value: "rm", label: "Romansh (rumantsch grischun)"},
    { value: "rn", label: "Kirundi (kiRundi)"},
    { value: "ro", label: "Romanian, Moldavian, Moldovan (română)"},
    { value: "ru", label: "Russian (русский язык)"},
    { value: "sa", label: "Sanskrit (Saṁskṛta) (संस्कृतम्)"},
    { value: "sc", label: "Sardinian (sardu)"},
    { value: "sd", label: "Sindhi (सिन्धी, سنڌي، سندھی‎)"},
    { value: "se", label: "Northern Sami (Davvisámegiella)"},
    { value: "sm", label: "Samoan (gagana faa Samoa)"},
    { value: "sg", label: "Sango (yângâ tî sängö)"},
    { value: "sr", label: "Serbian (српски језик)"},
    { value: "gd", label: "Scottish Gaelic (Gàidhlig)"},
    { value: "sn", label: "Shona (chiShona)"},
    { value: "si", label: "Sinhala, Sinhalese (සිංහල)"},
    { value: "sk", label: "Slovak (slovenčina)"},
    { value: "sl", label: "Slovene (slovenščina)"},
    { value: "so", label: "Somali (Soomaaliga, af Soomaali)"},
    { value: "st", label: "Southern Sotho (Sesotho)"},
    { value: "es", label: "Spanish (Español, Castellano)"},
    { value: "su", label: "Sundanese (Basa Sunda)"},
    { value: "sw", label: "Swahili (Kiswahili)"},
    { value: "ss", label: "Swati (SiSwati)"},
    { value: "sv", label: "Swedish (svenska)"},
    { value: "ta", label: "Tamil (தமிழ்)"},
    { value: "te", label: "Telugu (తెలుగు)"},
    { value: "tg", label: "Tajik (тоҷикӣ, toğikī, تاجیکی‎)"},
    { value: "th", label: "Thai (ไทย)"},
    { value: "ti", label: "Tigrinya (ትግርኛ)"},
    { value: "bo", label: "Tibetan Standard, Tibetan, Central (བོད་ཡིག)"},
    { value: "tk", label: "Turkmen (Türkmen, Түркмен)"},
    { value: "tl", label: "Tagalog (Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔)"},
    { value: "tn", label: "Tswana (Setswana)"},
    { value: "to", label: "Tonga (Tonga Islands) (faka Tonga)"},
    { value: "tr", label: "Turkish (Türkçe)"},
    { value: "ts", label: "Tsonga (Xitsonga)"},
    { value: "tt", label: "Tatar (татарча, tatarça, تاتارچا‎)"},
    { value: "tw", label: "Twi (Twi)"},
    { value: "ty", label: "Tahitian (Reo Tahiti)"},
    { value: "ug", label: "Uighur, Uyghur (Uyƣurqə, ئۇيغۇرچە‎)"},
    { value: "uk", label: "Ukrainian (українська)"},
    { value: "ur", label: "Urdu (اردو)"},
    { value: "uz", label: "Uzbek (zbek, Ўзбек, أۇزبېك‎)"},
    { value: "ve", label: "Venda (Tshivenḓa)"},
    { value: "vi", label: "Vietnamese (Tiếng Việt)"},
    { value: "vo", label: "Volapük (Volapük)"},
    { value: "wa", label: "Walloon (Walon)"},
    { value: "cy", label: "Welsh (Cymraeg)"},
    { value: "wo", label: "Wolof (Wollof)"},
    { value: "fy", label: "Western Frisian (Frysk)"},
    { value: "xh", label: "Xhosa (isiXhosa)"},
    { value: "yi", label: "Yiddish (ייִדיש)"},
    { value: "yo", label: "Yoruba (Yorùbá)"},
    { value: "za", label: "Zhuang, Chuang (Saɯ cueŋƅ, Saw cuengh)"}
]

const getLanguageList = (country=null) => {
    const global = Global.map((l) => {return {value: l.value.toUpperCase(), label: l.label}})

    let list = []
    if (country && country.length === 2)
        list = Languages.filter((l) => l.countries.filter((c) => c === country).length > 0)

    if (list.length === 1) {
        list = list[0].languages
        return [...list, ...global.filter((g) => !list.map((l) => l.value).includes(g.value))]
    }
    return global
}

export { getLanguageList, countryList }