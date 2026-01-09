// Translation dictionary for Amharic and English
export const translations = {
  English: {
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
    
    // Common
    location: 'Addis Ababa, Ethiopia',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    businessHours: 'Business Hours',
    
    // Hero sections
    welcomeMessage: 'Welcome To Eshet Microfinance Institution',
    heroSubtitle: 'Providing efficient and transparent financial services to enhance your living status',
    
    // Buttons
    contactUsBtn: 'Contact Us',
    applyNow: 'Apply Now',
    learnMore: 'Learn More',
    download: 'Download',
    viewOnline: 'View Online',
    
    // Footer
    quickLinks: 'Quick Links',
    resources: 'Resources',
    contactInfo: 'Contact Info',
    copyright: '© 2026 Eshet Microfinance Institution S.C. All rights reserved.',
    thankYou: 'Thank you for being with us'
  },
  
  አማርኛ: {
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
    
    // Common
    location: 'አዲስ አበባ፣ ኢትዮጵያ',
    phone: 'ስልክ',
    email: 'ኢሜይል',
    address: 'አድራሻ',
    businessHours: 'የስራ ሰዓት',
    
    // Hero sections
    welcomeMessage: 'እሸት ማይክሮ ፋይናንስ ተቋም እንኳን ደህና መጡ',
    heroSubtitle: 'የኑሮ ደረጃዎን ለማሻሻል ቀልጣፋ እና ግልጽ የፋይናንስ አገልግሎቶችን እንሰጣለን',
    
    // Buttons
    contactUsBtn: 'አግኙን',
    applyNow: 'አሁን ያመልክቱ',
    learnMore: 'ተጨማሪ ይወቁ',
    download: 'አውርድ',
    viewOnline: 'በመስመር ላይ ይመልከቱ',
    
    // Footer
    quickLinks: 'ፈጣን አገናኞች',
    resources: 'ግብዓቶች',
    contactInfo: 'የመገኛ አድራሻ',
    copyright: '© 2026 እሸት ማይክሮ ፋይናንስ ተቋም. ሁሉም መብቶች የተጠበቁ ናቸው።',
    thankYou: 'ከእኛ ጋር ስለሆኑ እናመሰግናለን'
  }
}

export const getTranslation = (language, key) => {
  return translations[language]?.[key] || translations['English'][key] || key
}
