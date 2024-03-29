import { Images, BaseColor } from "src/config";

export const FCategories = [
    {
        id: 1,
        title: "transfer",
        icon: "exchange-alt",
        screen: "FBank",
    },
    {
        id: 2,
        title: "topup",
        icon: "calendar-plus",
        screen: "FTopUp",
    },
    {
        id: 3,
        title: "bill",
        icon: "credit-card",
        screen: "FAddTransaction",
    },
    {
        id: 4,
        title: "more",
        icon: "ellipsis-v",
        screen: "FCategory",
    },
];

export const FRecentTransactions = [
    {
        id: 1,
        name: "Naomí Yepes",
        image: Images.profile4
    },
    {
        id: 2,
        name: "Steave Garret",
        image: Images.profile2
    },
    {
        id: 3,
        name: "Kari Granleese",
        image: Images.profile1
    },
    {
        id: 4,
        name: "Victor Pacheco",
        image: Images.profile3
    }
]

export const FActivites = [
    {
        id: 1,
        icon: "apple",
        name: "Apple Developer",
        date: "05 Apr 2021 19:00",
        status: "Transfer",
        price: "-$99",
        isUp: false,
        backgroundIcon: BaseColor.greenColor
    },
    {
        id: 2,
        icon: "angular",
        name: "Company Inc",
        date: "01 May 2021 19:00",
        status: "Salaray",
        price: "+$5000",
        isUp: true,
        backgroundIcon: BaseColor.pinkColor
    },
    {
        id: 3,
        icon: "credit-card",
        name: "Bank Charges",
        date: "01 Jun 2021 19:00",
        status: "Monthly Fee",
        price: "-$39",
        isUp: false,
        backgroundIcon: BaseColor.kashmir
        
    },
    {
        id: 4,
        icon: "user",
        name: "Steve Sent Money",
        date: "05 Apr 2021 19:00",
        status: "Credit",
        price: "+$500",
        isUp: true,
        backgroundIcon: BaseColor.pinkLightColor
    },
    {
        id: 5,
        icon: "car",
        name: "Rental Cost",
        date: "01 Aug 2021 19:00",
        status: "Debit",
        price: "-$250",
        isUp: false,
        backgroundIcon: BaseColor.blueColor
    },
    {
        id: 6,
        icon: "heart",
        name: "Insurance Expenses",
        date: "01 Sep 2021 19:00",
        status: "Debit",
        price: "+$6000",
        isUp: true,
        backgroundIcon: BaseColor.pinkDarkColor
    },
]; 

export const FHotNews = [
    {
        id: 1,
        icon:"bitcoin",
        title:"Bitcoin",
        price:"$98,99",
        subTitle:"Lorem ipsum",
        percent:"8,99%",
        isUp: true,
        colorIcon : "",
        backgroundIcon : ""
    },
    {
        id: 2,
        icon:"strikethrough",
        title:"Ethereum",
        price:"$59,99",
        subTitle:"Lorem ipsum",
        percent:"10,15%",
        isUp: false,
        colorIcon : BaseColor.whiteColor,
        backgroundIcon : BaseColor.accentColor
    },
    {
        id: 3,
        icon:"dollar-sign",
        title:"Dollar",
        price:"$98,99",
        subTitle:"Lorem ipsum",
        percent:"8,99%",
        isUp: true,
        colorIcon : "",
        backgroundIcon : ""
    },
];

export const FNews = [
    {
        id: 1,
        icon:"bitcoin",
        title:"Total Earnings",
        subTitle:"Since last week",
        price:"$ 24.300",
        percent:"+5.35%",
        isUp: true
    },
    {
        id: 2,
        icon:"shopping-cart",
        title:"Pending Orders",
        subTitle:"Since last week",
        price:"$ 24.300",
        percent:"-10.35%",
        isUp: false
    },
    {
        id: 3,
        icon:"chart-pie",
        title:"Total Revenue",
        subTitle:"Since last week",
        price:"$ 18.700",
        percent:"+5.35%",
        isUp: true
    },
]

export const FChartItems = [
    {
        id: 1,
        icon: "home",
        name: "Utilities",
        percent: 65.5,
        price: "$600",
        backgroundIcon: BaseColor.pinkLightColor,
    },
    {
        id: 2,
        icon: "music",
        name: "Entertainment",
        percent: 25.5,
        price: "$255",
        backgroundIcon: BaseColor.kashmir,
    },
    {
        id: 3,
        icon: "shopping-bag",
        name: "Food and Drink",
        percent: 10.9,
        price: "$109",
        backgroundIcon: BaseColor.accentColor,
    },
];

export const FTransactions = [
    {
        id: 1,
        image: Images.coinBitcon,
        code: "BTC",
        name: "Bitcoin",
        costPrice: "$11,390",
        marketCap: "73,80 B",
        percent: "0,33%",
        price: "$35,367",
        isUp: false,
    },
    {
        id: 2,
        image: Images.coinEth,
        code: "ETH",
        name: "Ethereum",
        costPrice: "$590",
        marketCap: "20,20 B",
        percent: "0,83%",
        price: "$25,467",
        isUp: true,
    },
    {
        id: 3,
        image: Images.coinUsdt,
        code: "USD",
        name: "USD Tether",
        costPrice: "$0.110",
        marketCap: "71,30 B",
        percent: "1,99%",
        price: "$2,00",
        isUp: false,
    },
    {
        id: 4,
        image: Images.coinMatic,
        code: "MAT",
        name: "Matic",
        costPrice: "$1.00",
        marketCap: "70,10 B",
        percent: "0,99%",
        price: "$15,123",
        isUp: false,
    },
    {
        id: 5,
        image: Images.coinLtc,
        code: "LTC",
        name: "Litecoin",
        costPrice: "$158,79",
        marketCap: "69,20 B",
        percent: "8,99%",
        price: "$158,798",
        isUp: true,
    },
    {
        id: 6,
        image: Images.coinDoge,
        code: "DOG",
        name: "Dogecoin",
        costPrice: "$113,90",
        marketCap: "68,30 B",
        percent: "8,99%",
        price: "$899,555",
        isUp: false,
    },
];

export const FHotNews2 = [
    {
        id: 1,
        backgroundIcon: BaseColor.pinkLightColor,
        icon:"chart-line",
        title:"How To Spend Investment Money",
        description:"Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.",
        textReadMore:"Read More",
    },
    {
        id: 2,
        backgroundIcon: BaseColor.accentColor,
        icon:"bullhorn",
        title:"Nulla porttitor accumsan tincidunt",
        description:"Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.",
        textReadMore:"Read More",
    },
];