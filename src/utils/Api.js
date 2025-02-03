export const transactionGroups = [
  {
    date: "Today",
    transactions: [
      {
        title: "MTN Airtime",
        reference: "TRX123456789",
        time: "14:20",
        amount: "1,000",
        type: "debit",
        status: "Success",
        icon: "phone-plus",
        color: "#F59E0B",
      },
      {
        title: "Wallet Funding",
        reference: "TRX123456788",
        time: "12:30",
        amount: "10,000",
        type: "credit",
        status: "Success",
        icon: "wallet-plus",
        color: "#10B981",
      },
    ],
  },
  {
    date: "Yesterday",
    transactions: [
      {
        title: "DSTV Subscription",
        reference: "TRX123456787",
        time: "16:45",
        amount: "24,500",
        type: "debit",
        status: "Success",
        icon: "television",
        color: "#8B5CF6",
      },
      {
        title: "Airtel Data",
        reference: "TRX123456786",
        time: "09:15",
        amount: "2,500",
        type: "debit",
        status: "Failed",
        icon: "wifi",
        color: "#EF4444",
      },
    ],
  },
];

export const filters = [
  { id: "all", name: "All" },
  { id: "airtime", name: "Airtime" },
  { id: "data", name: "Data" },
  { id: "bills", name: "Bills" },
];

export const billCategories = [
  {
    title: "TV",
    description: "DSTV, GOTV, Startimes",
    icon: "television",
    color: "#F59E0B",
  },
  {
    title: "Electricity",
    description: "PHCN, EKEDC, IKEDC",
    icon: "flash",
    color: "#10B981",
  },
  {
    title: "Internet",
    description: "Spectranet, Smile",
    icon: "wifi",
    color: "#3730A3",
  },
  {
    title: "Education",
    description: "WAEC, JAMB, NECO",
    icon: "school",
    color: "#8B5CF6",
  },
  {
    title: "Betting",
    description: "Bet9ja, SportyBet",
    icon: "gamepad-variant",
    color: "#EC4899",
  },
  {
    title: "Others",
    description: "More Services",
    icon: "dots-grid",
    color: "#6B7280",
  },
];

export const recentBills = [
  {
    title: "DSTV Premium",
    date: "Today 14:20",
    amount: "24,500",
    icon: "television",
    color: "#F59E0B",
  },
  {
    title: "EKEDC Electricity",
    date: "Yesterday",
    amount: "10,000",
    icon: "flash",
    color: "#10B981",
  },
  {
    title: "Spectranet 4G",
    date: "22 Jan 2024",
    amount: "15,000",
    icon: "wifi",
    color: "#3730A3",
  },
];

// export const networkProviders = [
//   { name: "MTN", icon: "signal-4g", color: "#FDB913" },
//   { name: "Airtel", icon: "signal-5g", color: "#FF0000" },
//   { name: "Glo", icon: "signal-4g", color: "#00B140" },
//   { name: "9mobile", icon: "signal-4g", color: "#006F37" },
// ];

export const quickServices = [
  { title: "Airtime", icon: "phone-plus" },
  { title: "Data Bundle", icon: "wifi" },
  // { title: "TV Sub", icon: "television" },
  // { title: "Electricity", icon: "flash" },
  // { title: "Education", icon: "school" },
  // { title: "Betting", icon: "gamepad-variant" },
];

export const transactions = [
  {
    title: "MTN Airtime",
    phone: "0803****234",
    date: "Today 14:20",
    amount: "1,000",
    icon: "phone-plus",
    color: "#F59E0B",
  },
  {
    title: "Airtel Data",
    phone: "0902****567",
    date: "Yesterday",
    amount: "2,500",
    icon: "wifi",
    color: "#3730A3",
  },
  {
    title: "DSTV Sub",
    phone: "0904****890",
    date: "Yesterday",
    amount: "6,500",
    icon: "television",
    color: "#10B981",
  },
];

export const quickActions = [
  { title: "Edit Profile", icon: "account-edit", actions: "edit-profile" },

  { title: "Security", icon: "shield-check", actions: "Security" },
  { title: "Support", icon: "headphones", actions: "Support" },
];

export const settingsSections = [
  {
    title: "Account Settings",
    items: [
      {
        title: "Personal Information",
        icon: "account-details",
        color: "#3730A3",
      },
      { title: "Bank Accounts", icon: "bank", color: "#10B981" },
      { title: "Change PIN", icon: "lock", color: "#F59E0B" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { title: "Notifications", icon: "bell", color: "#8B5CF6" },
      { title: "Privacy", icon: "shield-lock", color: "#EC4899" },
      { title: "Language", icon: "translate", color: "#3730A3" },
    ],
  },
];
