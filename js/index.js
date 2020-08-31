const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NavBar
let containerClass = document.querySelector(".container");
let navAttribute = containerClass.querySelector("nav");
let aAttributeOne = navAttribute.querySelector("a");
aAttributeOne.textContent = siteContent["nav"]["nav-item-1"];

let aAttributeTwo = aAttributeOne.nextElementSibling;
aAttributeTwo.textContent = siteContent["nav"]["nav-item-2"];

let aAttributeThree = aAttributeTwo.nextElementSibling;
aAttributeThree.textContent = siteContent["nav"]["nav-item-3"];

let aAttributeFour = aAttributeThree.nextElementSibling;
aAttributeFour.textContent = siteContent["nav"]["nav-item-4"];

let aAttributeFive = aAttributeFour.nextElementSibling;
aAttributeFive.textContent = siteContent["nav"]["nav-item-5"];

let aAttributeSix = aAttributeFive.nextElementSibling;
aAttributeSix.textContent = siteContent["nav"]["nav-item-6"];

// Changing color of nav text\\
aAttributeOne.style.color = "green";
aAttributeTwo.style.color = "green";
aAttributeThree.style.color = "green";
aAttributeFour.style.color = "green";
aAttributeFive.style.color = "green";
aAttributeSix.style.color = "green";

// Adding new child elements
const newNavElem = document.createElement('a') // instantiate the element 
newNavElem.textContent = 'Map'                // tack text content
newNavElem.href = '#'                          // tack any other attrs we need
const nav = document.querySelector('nav')    // this is the parent we wish to append the new link to
nav.appendChild(newNavElem)
newNavElem.style.color = "green";

// Prepending new child elements
const newNavElemTwo = document.createElement('a') 
newNavElemTwo.textContent = 'Solutions';
newNavElemTwo.href = `#`
const navTwo = document.querySelector('nav')
navTwo.prepend(newNavElemTwo)
newNavElemTwo.style.color = "green";

// Header
let ctaClass = document.querySelector(".cta");
let ctaDiv = ctaClass.querySelector(".cta-text");
let ctaHeader = ctaDiv.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

// Button
let ctaButton = ctaDiv.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// Circle Image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content Section
let mainContentSectionClass = document.querySelector(".main-content");
let topContentClass = mainContentSectionClass.querySelector(".top-content");
let textContent = topContentClass.querySelector(".text-content");
let textContentHeader = textContent.querySelector("h4");
textContentHeader.textContent = siteContent["main-content"]["features-h4"];

let textContentParagraph = textContent.querySelector("p");
textContentParagraph.textContent = siteContent["main-content"]["features-content"];

let textContentTwo = textContent.nextElementSibling;
let textContentTwoHeader = textContentTwo.querySelector("h4");
textContentTwoHeader.textContent = siteContent["main-content"]["about-h4"];

let textContentTwoParagraph = textContentTwo.querySelector("p");
textContentTwoParagraph.textContent = siteContent["main-content"]["about-content"];

let middleImage = mainContentSectionClass.querySelector(".middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content of Main Content Section
let bottomContentSection = mainContentSectionClass.querySelector(".bottom-content");
let textContentBottomOne = bottomContentSection.querySelector(".text-content");
let textContentBottomOneHeader = textContentBottomOne.querySelector("h4")
textContentBottomOneHeader.textContent = siteContent["main-content"]["services-h4"];

let textContentBottomOneParagraph = textContentBottomOne.querySelector("p");
textContentBottomOneParagraph.textContent = siteContent["main-content"]["services-content"];

let textContentBottomTwo = textContentBottomOne.nextElementSibling;
let textContentBottomTwoHeader = textContentBottomTwo.querySelector("h4");
textContentBottomTwoHeader.textContent = siteContent["main-content"]["product-h4"];

let textContentBottomTwoParagraph = textContentBottomTwo.querySelector("p");
textContentBottomTwoParagraph.textContent = siteContent["main-content"]["product-content"];

// Contact Section
let contactSection = document.querySelector(".contact");
let contactHeader = contactSection.querySelector("h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

contactParagraphOne = contactSection.querySelector("p");
contactParagraphOne.textContent = siteContent["contact"]["address"];

let contactParagraphTwo = contactParagraphOne.nextElementSibling;
contactParagraphTwo.textContent = siteContent["contact"]["phone"];

let contactParagraphThree = contactParagraphTwo.nextElementSibling;
contactParagraphThree.textContent = siteContent["contact"]["email"];

// Footer Section
let footerSection = document.querySelector("footer");
let footerParagraph = footerSection.querySelector("p");
footerParagraph.textContent = siteContent["footer"]["copyright"];