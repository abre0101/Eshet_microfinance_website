import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation resources
const resources = {
  en: {
    translation: {
      // Navbar
      home: 'Home',
      aboutUs: 'About Us',
      service: 'Service',
      contactUs: 'Contact Us',
      publication: 'Publication',
      jobs: 'Jobs',
      report: 'Report',
      loanProducts: 'Loan Products',
      savingProducts: 'Saving Products',
      generalContact: 'General Contact',
      branchContacts: 'Branch Contacts',
      documents: 'Documents',
      news: 'News',
      
      // Location
      location: 'Addis Ababa, Ethiopia',
      
      // Buttons
      contactUsBtn: 'Contact Us',
      applyNow: 'Apply Now',
      learnMore: 'Learn More',
      download: 'Download',
      viewOnline: 'View Online',
      callNow: 'Call Now',
      
      // Footer
      quickLinks: 'Quick Links',
      resources: 'Resources',
      contactInfo: 'Contact Info',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      businessHours: 'Business Hours',
      businessHoursValue: 'Mon - Fri: 9:00 AM - 5:00 PM',
      copyright: '© 2026 Eshet Microfinance Institution S.C. All rights reserved.',
      licensed: 'Licensed by the National Bank of Ethiopia | Thank you for being with us',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy'
    }
  },
  am: {
    translation: {
      // Navbar
      home: 'መነሻ',
      aboutUs: 'ስለ እኛ',
      service: 'አገልግሎት',
      contactUs: 'አግኙን',
      publication: 'ህትመቶች',
      jobs: 'ስራዎች',
      report: 'ሪፖርት',
      loanProducts: 'የብድር ምርቶች',
      savingProducts: 'የቁጠባ ምርቶች',
      generalContact: 'አጠቃላይ አድራሻ',
      branchContacts: 'የቅርንጫፍ አድራሻዎች',
      documents: 'ሰነዶች',
      news: 'ዜናዎች',
      
      // Location
      location: 'አዲስ አበባ፣ ኢትዮጵያ',
      
      // Buttons
      contactUsBtn: 'አግኙን',
      applyNow: 'አሁን ያመልክቱ',
      learnMore: 'ተጨማሪ ይወቁ',
      download: 'አውርድ',
      viewOnline: 'በመስመር ላይ ይመልከቱ',
      callNow: 'አሁን ይደውሉ',
      
      // Footer
      quickLinks: 'ፈጣን አገናኞች',
      resources: 'ግብዓቶች',
      contactInfo: 'የመገኛ አድራሻ',
      address: 'አድራሻ',
      phone: 'ስልክ',
      email: 'ኢሜይል',
      businessHours: 'የስራ ሰዓት',
      businessHoursValue: 'ሰኞ - አርብ: 9:00 ጠዋት - 5:00 ከሰዓት',
      copyright: '© 2026 እሸት ማይክሮ ፋይናንስ ተቋም. ሁሉም መብቶች የተጠበቁ ናቸው።',
      licensed: 'በኢትዮጵያ ብሔራዊ ባንክ ፈቃድ የተሰጠው | ከእኛ ጋር ስለሆኑ እናመሰግናለን',
      privacyPolicy: 'የግላዊነት ፖሊሲ',
      termsOfService: 'የአገልግሎት ውል',
      cookiePolicy: 'የኩኪ ፖሊሲ'
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
