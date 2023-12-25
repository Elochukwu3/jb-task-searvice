const linkList = [
  "Furniture Assembly",
  "TV Mounting",
  "Help Moving",
  "Handyman",
  "Yard Work",
  "Painting",
  "Mounting Services",
  "Electrical Help",
  " Plumbing",
  "Hang Pictures",
  "Lighting Installation",
] as const;

const footer_links = [
  {
    header: "Service Category",
    id: "Category8227FFDFDSF",
    list: [
      "Handyman Services",
      "Cleaning Services",
      "Delivery Services",
      "Removalists",
      "Gardening Services",
      "Auto Electricians",
      "Assembly Services",
      "All Services",
    ],
  },
  {
    header: "Popular Locations",
    id: "Locations8227FFDFDSF",
    list: [
      "Delta",
      "Anambra",
      "Edo",
      "Rivers",
      "Enugu",
      "Lagos",
      "Imo",
      "Ebonyi",
      "Abia",
    ],
  },
  {
    header: "Company",
    id: "Company237FFDFDSF",
    list: [
      "Careers",
      "Media enquiries",
      "About us",
      "Community Guidelines",
      "Tasker Principles",
      "Terms and Conditions",
      "Blog",
      "Contact us",
      "Privacy policy",
    ],
  },
  {
    header: "Explore",
    id: "Explore227FXSFDFDSF",
    list: [
"How it works",
"Earn money",
"Side Hustle Calculator",
"Search jobs",
"Cost Guides",
"Service Guides",
"Users FAQ"
    ],
  },
] as const;
const MENU_URL = {
  location: "/location",
  service: "/service",
  mender: "/earn-as-mender",
  login: "/login",
  index: "/"
}as const
export { linkList, footer_links, MENU_URL};
