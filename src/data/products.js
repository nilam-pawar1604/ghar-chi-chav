const products = [
{
  id: 1,
  name: "गुलाबजाम",
  englishName: "Gulab Jamun",
  category: "Sweets",
  price: 249,
  unit: "250g",
  rating: 4.9,
  badge: "FAVOURITE",
  badgeType: "purple",
  image:
    "https://images.openai.com/static-rsc-4/cLexRFYAO3XbT-SEWF9MEbMAsW9r8FjpvYZRe_ThVqY5h54JBc7q0KUdeTFkvzAHDbAj6F6TQZWTRokLomFbK2xAL7xrq3oKDkZz87O_24L9SpXr3uIAKWaw8xKrccPEehoitD_cnEL3o6AjsAubM-Pdpy_YjYKeJ4nqB0J6GKE?purpose=inline",
  description:
    "मऊ, रसाळ आणि पाकात मुरलेले स्वादिष्ट गुलाबजाम. घरच्या खास चवीने तयार केलेली गोड मेजवानी.",
},
{
  id: 2,
  name: "घरगुती पुलाव",
  englishName: "Homemade Pulao",
  category: "Main Course",
  price: 249,
  unit: "500g",
  rating: 4.8,
  badge: "POPULAR",
  badgeType: "orange",
  image:
    "https://images.openai.com/static-rsc-4/JMD35v1_7gooLB96otbImqwAls3PjiyfQpru37Bxr-kv-y-wIqRa6RGs773t4D62lCIQ_EX8TI7qb0EX-aBCY-fv0qtyN35BIJkSh1HbStatKDH2XN0g5Imdd7so49RFfFvuKDultO4fzmUOVmc9CmbrOrtGlHbUFLaR_TfAzAOxLeMxleys2HudoD5vYO3d?purpose=fullsize",
  description:
    "सुगंधी बासमती तांदूळ, ताज्या भाज्या आणि खास मसाल्यांपासून तयार केलेला स्वादिष्ट घरगुती पुलाव.",
},


  
   {
    id: 3,
    name: "खोबऱ्याची वडी",
    englishName: "Coconut Vadi",
    category: "Sweets",
    price: 229,
    unit: "250g",
    rating: 4.8,
    badge: "NEW",
    badgeType: "yellow",
    image:
      "https://images.openai.com/static-rsc-4/HDyW9PAmiPSiJzr6sqNdWGgw4XqBTVJwneowdCNVqDVPBuDkgvFxunTjpk2-ccgRQhOHh6_nJMg35WhJiFZgEj_tkS-nFasTRqVAj8J64iSqwmJ0rcaUqqNVE_euvRHQ7GxWg1gmSed655cw8Ra8AXFqMBbRjDwFJ7E6VAzcGRE?purpose=inline",
    description:
      "ताजे खोबरे आणि साखरेपासून तयार केलेली मऊ आणि स्वादिष्ट घरगुती वडी.",
  },

 

  {
    id: 4,
    name: "ठेचा चटणी",
    englishName: "Thecha Chutney",
    category: "Chutneys",
    price: 149,
    unit: "200g",
    rating: 4.8,
    badge: "FRESH",
    badgeType: "green",
    image:
      "https://images.openai.com/static-rsc-4/JNeBirone7fxqKwxrxv1IS7k9YWCQXj9Hv614Zt9X5L3zKLbGkVR3087Za-981zfzG80pbn3EIpoVdh5wB4d4O4yE5aLhlRdh0wopKx9zLWhWDt9BAbyA3hb2Vk56PU0IKW3DI8KJDD12kw7jfzIMiRHe35mSeTlC6GEe_EPDac?purpose=inline",
    description:
      "ताज्या मिरच्या आणि निवडक साहित्यापासून तयार केलेली झणझणीत ठेचा चटणी.",
  },

  {
    id: 5,
    name: "बेसन लाडू",
    englishName: "Besan Ladoo",
    category: "Sweets",
    price: 299,
    unit: "250g",
    rating: 4.9,
    badge: "POPULAR",
    badgeType: "orange",
    image:
      "https://images.openai.com/static-rsc-4/GaKYLCtrxps_pZ0J8IzYM2OU253teu_rcWpMuQdXrPRoC01NLJYZ4ElkHCZfKQfK53jHRhF3Gk9iZx3ajcx1KtsSoXXdNDq5PqRFbkVh5hsR8787r5Wnfe7m0eJ4ht_R_QBgTbsGyPC4Vkl30QthgxZ1jXfSnWAXzph92OPd0MiosQldHyqoRs45qdmX_FXX?purpose=fullsize",
    description:
      "तूप, बेसन आणि साखरेपासून पारंपरिक पद्धतीने तयार केलेले मऊ आणि खमंग बेसन लाडू.",
  },

  {
    id: 6,
    name: "घरचा स्पेशल मसाला",
    englishName: "Gharacha Special Masala",
    category: "Masalas",
    price: 199,
    unit: "200g",
    rating: 4.8,
    badge: "POPULAR",
    badgeType: "orange",
    image:
      "https://images.openai.com/static-rsc-4/_TcxDjumhYjvJLxZo2FoS32YEJmUkbDYl1lgVAzDoc7uXD0oW-l73oDCqiErqCl_tpugqUFdk8SSBBzQirocyOaqmjZJ-Qjnur_S2EY5_cv_-xLnphk0umeBhQ_wXUAIfqpJO3ft1hUTIMTfsBHe_eyN1yXjjRUAPQx-ybfK6EE?purpose=inline",
    description:
      "अस्सल घरगुती चवीसाठी छोट्या बॅचमध्ये तयार केलेला सुगंधी मसाला.",
  },

  {
    id: 7,
    name: "मसाला शेंगदाणे",
    englishName: "Masala Shengdan",
    category: "Snacks",
    price: 129,
    unit: "250g",
    rating: 4.7,
    badge: "BESTSELLER",
    badgeType: "red",
    image:
      "https://images.openai.com/static-rsc-4/5rblh8qiZqO9NJD27XF8h8-ZPUHyhNIp8l5AnR1J679NC6TGj8nxv4uZwIbnAj4H7ihVxlCthfaN4kh2YmqtVq3VGi-xsYyNkDBf1gU47Un1hXq13I467wcT0rl7UpX8PjmaMq8m36W8FgwJWQ7wzJ8kajlerVi_vbATvWfMG0qPyi9KqyZii0TlbqC1SlBe?purpose=fullsize",
    description:
      "खमंग मसाल्यांनी भाजलेले कुरकुरीत आणि चवदार मसाला शेंगदाणे.",
  },

  {
    id: 8,
    name: "चकली",
    englishName: "Bhajani Chakli",
    category: "Snacks",
    price: 199,
    unit: "250g",
    rating: 4.8,
    badge: "HOMEMADE",
    badgeType: "brown",
    image:
      "https://images.openai.com/static-rsc-4/DT27Dfc9b2j2FpBMG0v4R1bqHUvSTdPkNGgKhbAVa-aq3jEOODqMWmEMOESxobD_oI17eiDvXy0Y6aIZ_AP7l_ymSj9R8BexArKPXNmyCxX5Z90YdDKbqV5Bej8dmCqnanGyWd3UqfgYHIJacxkSeO4Bh5Z3RooJlPb-aRmdveE?purpose=inline",
    description:
      "पारंपरिक भाजणीपासून तयार केलेली खुसखुशीत आणि कुरकुरीत चकली.",
  },
{
  id: 9,
  name: "कोथिंबीर वडी",
  englishName: "Kothimbir Vadi",
  category: "Snacks",
  price: 179,
  unit: "250g",
  rating: 4.8,
  badge: "HOMEMADE",
  badgeType: "green",
  image:
    "https://images.openai.com/static-rsc-4/VRD9JzbkVeBXqRDiPX_8pzP9O3mvkZDmLvWRF6KoVUyI8PnzVBbj1vFINTHYps3lWBqViV7JGp_v71tX3hFq0XTJvcmk8rP5iOgS6xUnklaKK4W8JrZzOFmPc4e1IJgps9IcaZIv6I0gBrwE2vAsu9UTrelIAjbstU3WDlfCRmY?purpose=inline",
  description:
    "ताजी कोथिंबीर, बेसन आणि खास मसाल्यांपासून तयार केलेली खमंग आणि कुरकुरीत घरगुती कोथिंबीर वडी.",
},

  {
    id: 10,
    name: "उकडीचे मोदक",
    englishName: "Ukadiche Modak",
    category: "Sweets",
    price: 299,
    unit: "6 pcs",
    rating: 4.9,
    badge: "SPECIAL",
    badgeType: "yellow",
    image:
      "https://images.openai.com/static-rsc-4/CHC8yrKPRGjoGbewSzcHlDv4or6RUJwL5YChbyT9oCfUVGepuM60lJXcYVVgzKfdPDzxJDK0qKC6so8_c9phHyVBT_K7avtNoqyEYF3eP7FnbsUbxvqklqZLxOHsW6i7jaAz56UFjIE5V6nNrsLxZkMUBF2uD3iw9kVjSm6qYY0?purpose=inline",
    description:
      "खोबरे आणि गुळाच्या सारणाने भरलेले पारंपरिक उकडीचे मोदक.",
  },

   {
    id: 11,
    name: "करंजी",
    englishName: "Karanji",
    category: "Sweets",
    price: 249,
    unit: "6 pcs",
    rating: 4.8,
    badge: "SPECIAL",
    badgeType: "yellow",
    image:
      "https://images.openai.com/static-rsc-4/jTEYOTt9Nnu62F902j0I4KdYWMeYtNQZSHx8h02UbS8pIr6eLzbO16ckFOGgQwFsVUTGQAoCQTrucFeCnQuD8LCTwi6HJuLrWNmnQzcIljEJT2LnOAV6hGJqfGGeaVH7aqfD3jMV1-giMp4dsP2f9wCe7ToFLKoR9TtmwSJ60rM?purpose=inline",
    description:
      "खोबरे, साखर आणि सुगंधी मसाल्यांच्या सारणाने भरलेली पारंपरिक करंजी.",
  },

  {
    id: 12,
    name: "मिरचीचे लोणचं",
    englishName: "Mirchiche Lonche",
    category: "Pickles",
    price: 169,
    unit: "300g",
    rating: 4.8,
    badge: "SPICY",
    badgeType: "red",
    image:
      "https://images.openai.com/static-rsc-4/ZOEDNOtxLe-mGAvh2HkEVkQAF6ri5s-Ltyr8YM-YuzAIUvPy-NCmpPZAuJAX427mFE9r3FemGGsS5rEHnrFM-FzpjZ404g0i4b9HhXeB7FKbzKPbNQj4m4lmCzaPq3VyUHTIhdwqinlB4hPgUOQ2evbeNsPH0R7rg79yrDL2mT4NKzD1IGs2OqjSn6ChRH8L?purpose=fullsize",
    description:
      "ताज्या हिरव्या मिरच्या आणि खास घरगुती मसाल्यांपासून तयार केलेले लोणचं.",
  },

  {
    id: 13,
    name: "शंकरपाळी",
    englishName: "Shankarpali",
    category: "Snacks",
    price: 179,
    unit: "250g",
    rating: 4.8,
    badge: "HOMEMADE",
    badgeType: "brown",
    image:
      "https://images.openai.com/static-rsc-4/4rMXG69al1kgk1b4DQlbkp3aJaKrjPl79xjKsi6JWm79oHRSFKHLdXqrSyEGmaU_o3XQrIbfkJ5A5rqdm0B0A5OT_lB41bvroaJyx2Yd4sQMsAoA4UZH9VGPqIAwebZtAZc2W_pLhU-TLQ5Oe_9sv9b8Z-KP7OXt4iqXPSCyK9g?purpose=inline",
    description:
      "घरच्या पद्धतीने तयार केलेली कुरकुरीत आणि हलकी गोड शंकरपाळी.",
  },{
    id: 14,
    name: "लिंबाचे लोणचं",
    englishName: "Limbache Lonche",
    category: "Pickles",
    price: 159,
    unit: "300g",
    rating: 4.8,
    badge: "FAVOURITE",
    badgeType: "purple",
    image:
      "https://images.openai.com/static-rsc-4/0nez9hajyp6h9w3SCFZjpAnZXGtvcC-v65-rWSOEotpKExX8w3LAMggq-orHeQwDeApLNjM7riOY36R1CxI-hJNJ_CD_3_lY-jff5K6x_Nuif65BheLlNzXro24qjffaHOfY4LC1P-oRTYei8sRX4zRXspNYw8ZAMOKJ2lL4A7MC04hxXWwAlg_9rFNxvbWw?purpose=fullsize",
    description:
      "आंबट, तिखट आणि मसालेदार चवीचे पारंपरिक घरगुती लिंबाचे लोणचं.",
  },

 

  {
    id: 15,
    name: "अनारसे",
    englishName: "Anarsa",
    category: "Sweets",
    price: 279,
    unit: "250g",
    rating: 4.9,
    badge: "TRADITIONAL",
    badgeType: "brown",
    image:
      "https://images.openai.com/static-rsc-4/td7Nn5CInG2KArFnmWs69atoKvl84Sf06G9YJL9t73wuzcqVUWEH7aYHNOFB6ofazOpnEEc7PiA_Mo8hSDYMZGDTRagvg7Q0mjq7mwwLeOI6Tnq5ZCA0HKfCRIIxn-HFcc952q4U-14soLPBcx_QqbqqIEGcWtp15Nl1n20YmsmRRH5Fr8QMzXDRrk7helsE?purpose=inline",
    description:
      "तांदूळ आणि गुळापासून पारंपरिक पद्धतीने तयार केलेले खमंग अनारसे.",
  },

  {
    id: 16,
    name: "थालीपीठ",
    englishName: "Thalipeeth Bhajani",
    category: "Snacks",
    price: 189,
    unit: "500g",
    rating: 4.8,
    badge: "HOMEMADE",
    badgeType: "green",
    image:
      "https://images.openai.com/static-rsc-4/PE1iP7uYpjbSvc7x4pC8ozNqrPXlcD573TtULopRbuCMpZFtrDvj1_i6A8ncV5hsj5AXayIonj62ygx_Xlo_T928R1_Z7FfEPk8V15fMAHRDsKlxIt4Kb9KiDXfYs5wR6ipFL-RPZ5SDPgVUDvy7dj5sGIBNcYu7JgHrnF2FwsnCa9C5zc7x546slsV2qCiI?purpose=fullsize",
    description:
      "पारंपरिक धान्यांपासून तयार केलेली पौष्टिक आणि चवदार थालीपीठ भाजणी.",
  },

 {
      id: 17,
    name: "आमची आंबा लोणचं",
    englishName: "Aamchi Aamba Lonche",
    category: "Pickles",
    price: 249,
    unit: "500g",
    rating: 4.9,
    badge: "BESTSELLER",
    badgeType: "red",
    image:
      "https://images.openai.com/static-rsc-4/ZD3qQaWzrbYRDCfBtGKDv8QUcBMQ_IpIyBUiQsxiKJ469CJehWhWw91_JgBh6_xAGCECRMia8jYNE0zfGC7Ad01xGWGsq4Gmh21jdlDwzbinmozzjqFQe_88ieG9PKY1jlWYH9ekYNITagrl0igk3LgI2icnPPAu88lx6YLWXRos2x07DtbKaTvm4fyh75Dj?purpose=fullsize",
    description:
      "कच्च्या कैरी आणि सुगंधी मसाल्यांपासून तयार केलेले पारंपरिक घरगुती लोणचं.",
  }, 

{
  id: 18,
  name: "तुपातला शिरा",
  englishName: "Ghee Sheera",
  category: "Sweets",
  price: 199,
  unit: "250g",
  rating: 4.9,
  badge: "FAVOURITE",
  badgeType: "purple",
  image:
    "https://images.openai.com/static-rsc-4/UCWhR0Jq0dnLj18bxIgdVgvBwBNmtrFUrOYt6S-15KOTeZBbthZbidfjoUf91TsqptxC35d7ePiLeGJJNn-x56e9Vow-Qz9QYXNIfP8mhiEMqABULgF6GR0J8txrtPky8X55zqhKmZ4lZx8L2ouBmvjsI6EmZ1fsIUPGrtscuwQ?purpose=inline",
  description:
    "शुद्ध तुपात रवा, साखर आणि वेलची घालून तयार केलेला मऊ, सुगंधी आणि खमंग घरगुती शिरा.",
},

{
    id: 19,
    name: "मसाला चिवडा",
    englishName: "Masala Chivda",
    category: "Snacks",
    price: 189,
    unit: "250g",
    rating: 4.8,
    badge: "FAVOURITE",
    badgeType: "purple",
    image:
      "https://images.openai.com/static-rsc-4/xCViwbfzrghkeH9YKrn4q_NZDKB2HqgyyYwW9J49OkvnyhNSs_5g3EGcchqI9EvcvW14kdS8-arR8adN4UZBe8KcKxRBNUxZpXLEsQCcgNPZw4-0QZJe-6tq0xj-W7JBDeYiI-Rfp0P0U7cG8n2MZGOHUV_qY0AmtjC7XbDIWNUJQSJQieygteCrDNIY2DJf?purpose=fullsize",
    description:
      "शेंगदाणे आणि पारंपरिक मसाल्यांच्या परफेक्ट मिश्रणाचा कुरकुरीत चिवडा.",
  },
  {
  id: 20,
  name: "उडदाचे पापड",
  category: "Papad",
  price: 180,
  oldPrice: 220,
  rating: 4.8,
  reviews: 24,
  image: "https://images.openai.com/static-rsc-4/y2f38dqgg3E-LQU4HTFLKbz_j3bA6XfPANt93ffOeFYTPt284GUiqiR93HYLC_3mdBkzUsyAxQtv7sl8s0OfYGCdjmqExUxgFfmny_oS_JXjs1_sOr3xa5rfjsWO2ImOjlVUV0UPgcSwtzsvWZ3Ot4r3trEkte-bGmuezhsw7ogY66sgMKj4H6xVJqzNcrgF?purpose=fullsize",
  description: "घरगुती पद्धतीने बनवलेले कुरकुरीत आणि चविष्ट उडदाचे पापड."
},
 
];

export default products;