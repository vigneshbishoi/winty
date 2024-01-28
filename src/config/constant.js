import AsyncStorage from "@react-native-async-storage/async-storage";
import { Images } from "./images";

/**
 * Define Const language use for whole application
 */

// BaseUrl
export const BASEURL = 'https://api.partner.winty.app/api/v1/';

export const BEFORE_LOGIN_TOKEN = 'ERRZcMfEPfXG8bGF';

export const PARTNER_ID = '46';

export const AFERT_LOGIN_TOKEN = async () => {
 const token= await AsyncStorage.getItem('Token');
 const display_id= await AsyncStorage.getItem('Display_id');
const auth = {token:token,display_id:display_id}
 return auth
}

 export const Language_Data = [
    {name: 'English', value: 'en'},
    {name: 'Mandarin', value: 'ma'},
    {name: 'Hindi', value: 'hi'},
    {name: 'Spanish', value: 'sp'},
    {name: 'French', value: 'fr'},
    {name: 'Arabic', value: 'ar'},
    {name: 'Russian', value: 'ru'},
    {name: 'Portuguese', value: 'po'},
    {name: 'Italian', value: 'it'},
    {name: 'German', value: 'ge'},
    {name: 'Japanese', value: 'ja'},
 ]

 export const EPopulars = [
   {
     id: 1,
     description: "Branch New + Home Deliv..",
     title: "Black T-Shirt with simple logo and …",
     image: Images.productView,
     costPrice: "$39",
     salePrice: "$29",
     isFavorite: false,
     price: 29,
   },
   {
     id: 2,
     description: "Shipping restrictions",
     title: "Converse Chuck Taylor All Star …",
     image: Images.productGrid02,
     costPrice: "$59",
     salePrice: "$39",
     isFavorite: true,
     price: 39,
   },
   {
     id: 3,
     description: "Branch New + Home Deliv..",
     title: "White T-Shirt with simple logo and …",
     image: Images.productGrid03,
     costPrice: "$39",
     salePrice: "$19",
     isFavorite: false,
     price: 19,
   },
   {
     id: 4,
     description: "Branch New + Home Deliv..",
     title: "White T-Shirt with simple logo and …",
     image: Images.productGrid04,
     costPrice: "$59",
     salePrice: "$39",
     isFavorite: true,
     price: 39,
   },
 
   {
     id: 5,
     description: "Branch New + Home Deliv..",
     title: "White T-Shirt with simple logo and …",
     image: Images.productGrid05,
     costPrice: "$59",
     salePrice: "$39",
     isFavorite: true,
     price: 39,
   },
 
   {
     id: 6,
     description: "Free delivery (Ts&Cs apply)",
     title: "Adidas Originals Superstar trainers …",
     image: Images.productGrid01,
     costPrice: "",
     salePrice: "$49",
     isFavorite: true,
     price: 49,
   },
 ];