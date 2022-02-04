import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import RowData from './RowData';
import { useState } from 'react';

function App() {
  const data = [
    {
        "ID": "1",
        "Surname": "Katukuri",
        "FullName": "Joji",
        "City": "Annarigudem",
        "Amount": "300"
    },
    {
        "ID": "2",
        "Surname": "Sale",
        "FullName": "Srinivasa Rao",
        "City": "Kondagudem",
        "Amount": "200"
    },
    {
        "ID": "3",
        "Surname": "Motapothula",
        "FullName": "Charles",
        "City": "Singarayapalem",
        "Amount": "300"
    },
    {
        "ID": "4",
        "Surname": "Nagabattini",
        "FullName": "Ramesh",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "5",
        "Surname": "Bangera",
        "FullName": "Rama Krishna",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "6",
        "Surname": "Marsakatla",
        "FullName": "Nani",
        "City": "Kalakodima",
        "Amount": "1050"
    },
    {
        "ID": "7",
        "Surname": "MD",
        "FullName": "Kajamia",
        "City": "Somavaram",
        "Amount": "200"
    },
    {
        "ID": "8",
        "Surname": "Yandapalli",
        "FullName": "Rattayya",
        "City": "choppakatlapalem",
        "Amount": "150"
    },
    {
        "ID": "9",
        "Surname": "Nagabattini",
        "FullName": "Kanakayya",
        "City": "YNPuram",
        "Amount": "200"
    },
    {
        "ID": "10",
        "Surname": "Nagabattini",
        "FullName": "Raju",
        "City": "YNPuram",
        "Amount": "300"
    },
    {
        "ID": "11",
        "Surname": "Ramala",
        "FullName": "Abraham",
        "City": "Tirvuru",
        "Amount": "300"
    },
    {
        "ID": "12",
        "Surname": "Mekala",
        "FullName": "Karunakar",
        "City": "Lingala",
        "Amount": "200"
    },
    {
        "ID": "13",
        "Surname": "Yemu",
        "FullName": "Bhaskar Rao",
        "City": "Lingala",
        "Amount": "100"
    },
    {
        "ID": "14",
        "Surname": "Thimballa",
        "FullName": "Anthony",
        "City": "Lingala",
        "Amount": "100"
    },
    {
        "ID": "15",
        "Surname": "Verpula",
        "FullName": "Mosha",
        "City": "Kalakodima",
        "Amount": "300"
    },
    {
        "ID": "16",
        "Surname": "Verpula",
        "FullName": "Samelu",
        "City": "Kalakodima",
        "Amount": "100"
    },
    {
        "ID": "17",
        "Surname": "Singu",
        "FullName": "Singu Samelu",
        "City": "Kalakodima",
        "Amount": "200"
    },
    {
        "ID": "18",
        "Surname": "Nagabattini",
        "FullName": "Anand Rao",
        "City": "YNPuram",
        "Amount": "200"
    },
    {
        "ID": "19",
        "Surname": "Mekala",
        "FullName": "Venkata Rao",
        "City": "Lingala",
        "Amount": "500"
    },
    {
        "ID": "20",
        "Surname": "Verpula",
        "FullName": "Jhon Appa Rao",
        "City": "Kalakodima",
        "Amount": "100"
    },
    {
        "ID": "21",
        "Surname": "Vadapalli",
        "FullName": "Naga Raju",
        "City": "Lingala",
        "Amount": "100"
    },
    {
        "ID": "22",
        "Surname": "Nagabattini",
        "FullName": "Pullayya",
        "City": "YNPuram",
        "Amount": "200"
    },
    {
        "ID": "23",
        "Surname": "Mekala",
        "FullName": "Sudhakar Rao",
        "City": "Lingala",
        "Amount": "200"
    },
    {
        "ID": "24",
        "Surname": "Konakanchi",
        "FullName": "Yesu",
        "City": "Diddupudi",
        "Amount": "150"
    },
    {
        "ID": "25",
        "Surname": "Konakanchi",
        "FullName": "Joji",
        "City": "Diddupudi",
        "Amount": "200"
    },
    {
        "ID": "26",
        "Surname": "Gujjarlapudi",
        "FullName": "Devadattam",
        "City": "Ramjaram",
        "Amount": "100"
    },
    {
        "ID": "27",
        "Surname": "Marsakatla",
        "FullName": "Prasad",
        "City": "Kalakodima",
        "Amount": "300"
    },
    {
        "ID": "28",
        "Surname": "Juganti",
        "FullName": "Rambabu",
        "City": "Chinna Korukondi",
        "Amount": "200"
    },
    {
        "ID": "29",
        "Surname": "Guttikonda",
        "FullName": "Mariyanna",
        "City": "Mittapalli",
        "Amount": "100"
    },
    {
        "ID": "30",
        "Surname": "Juganti",
        "FullName": "Sugun Rao",
        "City": "Chinna Korukondi",
        "Amount": "300"
    },
    {
        "ID": "31",
        "Surname": "Ambadipudi",
        "FullName": "Ramu",
        "City": "Yenkoor",
        "Amount": "500"
    },
    {
        "ID": "32",
        "Surname": "Jeenugu",
        "FullName": "Rama Rao",
        "City": "Tirvuru",
        "Amount": "200"
    },
    {
        "ID": "33",
        "Surname": "Bhogyam ",
        "FullName": "Pramanandamma",
        "City": "Sathupally",
        "Amount": "500"
    },
    {
        "ID": "34",
        "Surname": "Tanniru",
        "FullName": "Venkatayya",
        "City": "Sathupally",
        "Amount": "500"
    },
    {
        "ID": "35",
        "Surname": "Yamala",
        "FullName": "Paremeshawara Rao",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "36",
        "Surname": "Paagi",
        "FullName": "Anil Kumar",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "37",
        "Surname": "Ubbena",
        "FullName": "Kanaka Ratnam",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "38",
        "Surname": "Vaddepalli",
        "FullName": "Gopal",
        "City": "Gokavaram",
        "Amount": "500"
    },
    {
        "ID": "39",
        "Surname": "Pappula",
        "FullName": "Naga Raju",
        "City": "Peruvancha",
        "Amount": "200"
    },
    {
        "ID": "40",
        "Surname": "Kotte",
        "FullName": "Harlappa",
        "City": "Mustikunta",
        "Amount": "300"
    },
    {
        "ID": "41",
        "Surname": "Chavala",
        "FullName": "Babu",
        "City": "Chirunevvala",
        "Amount": "500"
    },
    {
        "ID": "42",
        "Surname": "Kaama",
        "FullName": "Shasri",
        "City": "Sathupally",
        "Amount": "1000"
    },
    {
        "ID": "43",
        "Surname": "Konakanchi",
        "FullName": "Prasad",
        "City": "Diddupudi",
        "Amount": "200"
    },
    {
        "ID": "44",
        "Surname": "Chinthamala",
        "FullName": "Yesu",
        "City": "Vallapuram",
        "Amount": "200"
    },
    {
        "ID": "45",
        "Surname": "Maare",
        "FullName": "Madhu",
        "City": "Ramchandrapeta",
        "Amount": "200"
    },
    {
        "ID": "46",
        "Surname": "Jupudi",
        "FullName": "Devasahayam",
        "City": "YNPuram",
        "Amount": "200"
    },
    {
        "ID": "47",
        "Surname": "Daggula",
        "FullName": "Narasimha Rao",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "48",
        "Surname": "Yadala",
        "FullName": "Shanthayya",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "49",
        "Surname": "Yadala",
        "FullName": "Manikyyam",
        "City": "Wyra BC Colony ",
        "Amount": "300"
    },
    {
        "ID": "50",
        "Surname": "Ambadipudi",
        "FullName": "Jhon",
        "City": "Anjanapuram",
        "Amount": "200"
    },
    {
        "ID": "51",
        "Surname": "Ambadipudi",
        "FullName": "Narasimha Rao",
        "City": "Anjanapuram",
        "Amount": "200"
    },
    {
        "ID": "52",
        "Surname": "Thummala",
        "FullName": "Chinni",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "53",
        "Surname": "Ambadipudi",
        "FullName": "Yeshobu",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "54",
        "Surname": "Medikonda",
        "FullName": "Anil",
        "City": "YNPuram",
        "Amount": "500"
    },
    {
        "ID": "55",
        "Surname": "Pera",
        "FullName": "Vijaya Raju",
        "City": "Laxmi Puram",
        "Amount": "200"
    },
    {
        "ID": "56",
        "Surname": "Koppela",
        "FullName": "Prasad",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "57",
        "Surname": "Gorintla",
        "FullName": "Yesu Ratnam",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "58",
        "Surname": "Ubbena",
        "FullName": "Prabhakar ",
        "City": "Kalluru",
        "Amount": "300"
    },
    {
        "ID": "59",
        "Surname": "Nagabattini",
        "FullName": "Daniyelu",
        "City": "YNPuram",
        "Amount": "400"
    },
    {
        "ID": "60",
        "Surname": "Motapothula",
        "FullName": "Satyam",
        "City": "Diddupudi",
        "Amount": "300"
    },
    {
        "ID": "61",
        "Surname": "Kaalangi",
        "FullName": "Jhansi",
        "City": "Khammam",
        "Amount": "200"
    },
    {
        "ID": "62",
        "Surname": "Neelam",
        "FullName": "Madhu",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "63",
        "Surname": "Paanem",
        "FullName": "Marthamma",
        "City": "Wyra - Rajashekar Nagar",
        "Amount": "200"
    },
    {
        "ID": "64",
        "Surname": "Paanem",
        "FullName": "Bala Raju",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "65",
        "Surname": "Marsakatla",
        "FullName": "Ravi",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "66",
        "Surname": "Ambadipudi",
        "FullName": "Sanjeev Rao",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "67",
        "Surname": "Daggupati",
        "FullName": "Bhagyamma",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "68",
        "Surname": "Vemula",
        "FullName": "Jaya Raju",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "69",
        "Surname": "Mekala",
        "FullName": "Naresh",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "70",
        "Surname": "Yadala",
        "FullName": "Deva Sahayam",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "71",
        "Surname": "Ambadipudi",
        "FullName": "Rama Krishna",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "72",
        "Surname": "Gudimalla",
        "FullName": "Ratna Kumar",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "73",
        "Surname": "Gujjarlapudi",
        "FullName": "Paul Raju",
        "City": "Govindha Puram",
        "Amount": "100"
    },
    {
        "ID": "74",
        "Surname": "Gujjarlapudi",
        "FullName": "Mariya Dasu",
        "City": "Govindha Puram",
        "Amount": "100"
    },
    {
        "ID": "75",
        "Surname": "Ambadipudi",
        "FullName": "Prasad",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "76",
        "Surname": "Amarlapudi",
        "FullName": "Vijaya",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "77",
        "Surname": "Guda",
        "FullName": "Srinivasa Rao",
        "City": "Chennuru",
        "Amount": "100"
    },
    {
        "ID": "78",
        "Surname": "MD",
        "FullName": "Rajiya Begum",
        "City": "Mallaram",
        "Amount": "100"
    },
    {
        "ID": "79",
        "Surname": "R",
        "FullName": "Prasad",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "80",
        "Surname": "Nagabattini",
        "FullName": "Sunil Kumar",
        "City": "YNPuram",
        "Amount": "500"
    },
    {
        "ID": "81",
        "Surname": "SK",
        "FullName": "Uddand",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "82",
        "Surname": "Pulapala",
        "FullName": "Venkateshwara Rao",
        "City": "Guduru",
        "Amount": "200"
    },
    {
        "ID": "83",
        "Surname": "Kedasi",
        "FullName": "Sugun Rao",
        "City": "Guduru",
        "Amount": "200"
    },
    {
        "ID": "84",
        "Surname": "Jupudi",
        "FullName": "Babu",
        "City": "Pedda Beerelli",
        "Amount": "200"
    },
    {
        "ID": "85",
        "Surname": "Karla",
        "FullName": "Venkayya",
        "City": "Nelakonda Palli",
        "Amount": "100"
    },
    {
        "ID": "86",
        "Surname": "NA",
        "FullName": "Ramana",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "87",
        "Surname": "Yernam",
        "FullName": "Prabhakar ",
        "City": "Muddunuru",
        "Amount": "100"
    },
    {
        "ID": "88",
        "Surname": "Mekala",
        "FullName": "Raaju",
        "City": "Kalluru",
        "Amount": "200"
    },
    {
        "ID": "89",
        "Surname": "Maanoji",
        "FullName": "Mohan Rao",
        "City": "Kalluru",
        "Amount": "200"
    },
    {
        "ID": "90",
        "Surname": "Ambadipudi",
        "FullName": "Yakob",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "91",
        "Surname": "Ambadipudi",
        "FullName": "Immanuel",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "92",
        "Surname": "Pothuraju",
        "FullName": "Sujatha",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "93",
        "Surname": "Yerpula",
        "FullName": "Mikayelu",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "94",
        "Surname": "Srikakulam",
        "FullName": "Srinu",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "95",
        "Surname": "Jonnalagadda",
        "FullName": "Kantha Rao",
        "City": "YNPuram",
        "Amount": "800"
    },
    {
        "ID": "96",
        "Surname": "Pandithi",
        "FullName": "Chepala Suresh",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "97",
        "Surname": "Marsakatla",
        "FullName": "Ratnamma",
        "City": "Pedda Korukondi",
        "Amount": "200"
    },
    {
        "ID": "98",
        "Surname": "Arikotla",
        "FullName": "Anand Rao",
        "City": "Seetharampuram",
        "Amount": "200"
    },
    {
        "ID": "99",
        "Surname": "Sreelam",
        "FullName": "Dhasharadha - Sudha",
        "City": "Jaggayapeta",
        "Amount": "200"
    },
    {
        "ID": "100",
        "Surname": "Daggupati",
        "FullName": "Pedda Ravi",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "101",
        "Surname": "Alli",
        "FullName": "Kanakayya",
        "City": "YNPuram",
        "Amount": "150"
    },
    {
        "ID": "102",
        "Surname": "Gorintla",
        "FullName": "Bhaskar",
        "City": "Gollapur",
        "Amount": "100"
    },
    {
        "ID": "103",
        "Surname": "Yamala",
        "FullName": "Bhaskar",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "104",
        "Surname": "Karnakanki",
        "FullName": "Rambabu",
        "City": "Venkatagiri",
        "Amount": "100"
    },
    {
        "ID": "105",
        "Surname": "Yamala",
        "FullName": "Gopala Rao",
        "City": "Gollapudi",
        "Amount": "500"
    },
    {
        "ID": "106",
        "Surname": "Yamala",
        "FullName": "Sreelatha",
        "City": "Gollapudi",
        "Amount": "200"
    },
    {
        "ID": "107",
        "Surname": "Yamala",
        "FullName": "Venkata Ratnam",
        "City": "Gollapudi",
        "Amount": "200"
    },
    {
        "ID": "108",
        "Surname": "IB Staff",
        "FullName": "IB Staff",
        "City": "Wyra",
        "Amount": "1116"
    },
    {
        "ID": "109",
        "Surname": "G",
        "FullName": "Daniel",
        "City": "Palvoncha",
        "Amount": "500"
    },
    {
        "ID": "110",
        "Surname": "Amarlapudi",
        "FullName": "Chinni",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "111",
        "Surname": "Ambadipudi",
        "FullName": "George",
        "City": "Anjanapuram",
        "Amount": "500"
    },
    {
        "ID": "112",
        "Surname": "Jammi",
        "FullName": "Venkateshwarllu",
        "City": "Khammam",
        "Amount": "500"
    },
    {
        "ID": "113",
        "Surname": "Nagabattini",
        "FullName": "Dasu",
        "City": "YNPuram",
        "Amount": "200"
    },
    {
        "ID": "114",
        "Surname": "Jupudi",
        "FullName": "Babu Rao",
        "City": "YNPuram",
        "Amount": "500"
    },
    {
        "ID": "115",
        "Surname": "Gujjarlapudi",
        "FullName": "Naga Bushanam",
        "City": "Govindha Puram",
        "Amount": "100"
    },
    {
        "ID": "116",
        "Surname": "DEE",
        "FullName": "Sreenivas Rao",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "117",
        "Surname": "AEE",
        "FullName": "Rani",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "118",
        "Surname": "Darmasoth",
        "FullName": "Lalu",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "119",
        "Surname": "NA",
        "FullName": "Krishna",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "120",
        "Surname": "Gorintla",
        "FullName": "Krishna",
        "City": "Gollapudi",
        "Amount": "500"
    },
    {
        "ID": "121",
        "Surname": "Nagabattini",
        "FullName": "Paul",
        "City": "YNPuram",
        "Amount": "500"
    },
    {
        "ID": "122",
        "Surname": "Pandithi",
        "FullName": "Laxman",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "123",
        "Surname": "Muthamala",
        "FullName": "Deva Swami",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "124",
        "Surname": "Ambadipudi",
        "FullName": "Prabhkar",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "125",
        "Surname": "Pilli",
        "FullName": "Mathamma",
        "City": "Chinna Beerelli",
        "Amount": "100"
    },
    {
        "ID": "126",
        "Surname": "Allu",
        "FullName": "Mani",
        "City": "Kalakodima",
        "Amount": "200"
    },
    {
        "ID": "127",
        "Surname": "Gandham",
        "FullName": "Vasanth Rao",
        "City": "Kalakodima",
        "Amount": "100"
    },
    {
        "ID": "128",
        "Surname": "Marsakatla",
        "FullName": "Babu",
        "City": "Kalakodima",
        "Amount": "200"
    },
    {
        "ID": "129",
        "Surname": "Yadala",
        "FullName": "George",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "130",
        "Surname": "Doddikarla",
        "FullName": "Anna Prasad",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "131",
        "Surname": "Gorintla",
        "FullName": "Balaramulu",
        "City": "Gollapudi",
        "Amount": "1000"
    },
    {
        "ID": "132",
        "Surname": "Marsakatla",
        "FullName": "Devadattam",
        "City": "Kalakodima",
        "Amount": "500"
    },
    {
        "ID": "133",
        "Surname": "Vaikuti",
        "FullName": "Sharabandi Raju",
        "City": "Kakarla",
        "Amount": "500"
    },
    {
        "ID": "134",
        "Surname": "Thandru",
        "FullName": "Rama Rao",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "135",
        "Surname": "Chettumala",
        "FullName": "Suresh",
        "City": "Kistaram",
        "Amount": "300"
    },
    {
        "ID": "136",
        "Surname": "Ambadipudi",
        "FullName": "Abraham S/o Yesu",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "137",
        "Surname": "SK",
        "FullName": "Meera",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "138",
        "Surname": "Nagabattini",
        "FullName": "Mosha",
        "City": "YNPuram",
        "Amount": "1000"
    },
    {
        "ID": "139",
        "Surname": "Nimmathota",
        "FullName": "EESaku",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "140",
        "Surname": "Yadala",
        "FullName": "Davidu",
        "City": "Wyra",
        "Amount": "500"
    },
    {
        "ID": "141",
        "Surname": "Konakala",
        "FullName": "Purushotham",
        "City": "Diddupudi",
        "Amount": "100"
    },
    {
        "ID": "142",
        "Surname": "Allu",
        "FullName": "Yeshob",
        "City": "Kalakodima",
        "Amount": "100"
    },
    {
        "ID": "143",
        "Surname": "Kasumalla ",
        "FullName": "Suresh",
        "City": "Wyra",
        "Amount": "150"
    },
    {
        "ID": "144",
        "Surname": "Gudimalla",
        "FullName": "Bhaskar Rao",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "145",
        "Surname": "Beerelli",
        "FullName": "Jana Rao",
        "City": "Yerraboinapalli",
        "Amount": "200"
    },
    {
        "ID": "146",
        "Surname": "Motapothula",
        "FullName": "Rattamma",
        "City": "Wyra",
        "Amount": "1000"
    },
    {
        "ID": "147",
        "Surname": "Peddi",
        "FullName": "Venkateshwarlu",
        "City": "Manuguru",
        "Amount": "501"
    },
    {
        "ID": "148",
        "Surname": "Kothapally",
        "FullName": "Ravi",
        "City": "Ramanagaram",
        "Amount": "500"
    },
    {
        "ID": "149",
        "Surname": "Kothapally",
        "FullName": "Ramesh",
        "City": "Ramanagaram",
        "Amount": "200"
    },
    {
        "ID": "150",
        "Surname": "Ambadipudi",
        "FullName": "Sreenu",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "151",
        "Surname": "Kaalangi",
        "FullName": "Swarupa Vijay Kumar",
        "City": "Kodada",
        "Amount": "1000"
    },
    {
        "ID": "152",
        "Surname": "Nadibujjakka",
        "FullName": "Karuna - Peddamma",
        "City": "Khammam",
        "Amount": "500"
    },
    {
        "ID": "153",
        "Surname": "Chanti Bujji",
        "FullName": "Praveen",
        "City": "Kusumanchi",
        "Amount": "500"
    },
    {
        "ID": "154",
        "Surname": "Swaroopa",
        "FullName": "Jhon Narasayya",
        "City": "Kodada",
        "Amount": "1000"
    },
    {
        "ID": "155",
        "Surname": "Amarlapudi",
        "FullName": "Naga Raju",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "156",
        "Surname": "Konakanchi",
        "FullName": "Seethayya",
        "City": "Diddupudi",
        "Amount": "100"
    },
    {
        "ID": "157",
        "Surname": "Nagabattini",
        "FullName": "Ravi",
        "City": "YNPuram",
        "Amount": "500"
    },
    {
        "ID": "158",
        "Surname": "Sugun Rao",
        "FullName": "Priyanka",
        "City": "Khammam",
        "Amount": "500"
    },
    {
        "ID": "159",
        "Surname": "Kaalangi",
        "FullName": "Ratna Prasad Charles Babu",
        "City": "Khammam",
        "Amount": "500"
    },
    {
        "ID": "160",
        "Surname": "Vadapalli",
        "FullName": "Shadrak",
        "City": "Ramanagaram",
        "Amount": "500"
    },
    {
        "ID": "161",
        "Surname": "Kasumalla ",
        "FullName": "Sreenu",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "162",
        "Surname": "Guttikonda",
        "FullName": "Narasimha Rao",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "163",
        "Surname": "Samarthapu ",
        "FullName": "Kiranmayee",
        "City": "Suryapeta",
        "Amount": "500"
    },
    {
        "ID": "164",
        "Surname": "Guttikonda",
        "FullName": "Veera Babu",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "165",
        "Surname": "Ambadipudi",
        "FullName": "Aadi Kumar",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "166",
        "Surname": "Pagolu",
        "FullName": "Harish",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "167",
        "Surname": "Daggupati",
        "FullName": "Ramesh",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "168",
        "Surname": "Doctor",
        "FullName": "Ravi Doctor",
        "City": "Kurnavelli",
        "Amount": "1000"
    },
    {
        "ID": "169",
        "Surname": "Bandi",
        "FullName": "Sai Kumar",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "170",
        "Surname": "Bayarla",
        "FullName": "Nagayya",
        "City": "Kakarlapadu",
        "Amount": "150"
    },
    {
        "ID": "171",
        "Surname": "Sirsani",
        "FullName": "Narayana",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "172",
        "Surname": "Pilli",
        "FullName": "Nayudu",
        "City": "Nacharam",
        "Amount": "200"
    },
    {
        "ID": "173",
        "Surname": "Pilli",
        "FullName": "Jaya Raju",
        "City": "Nacharam",
        "Amount": "100"
    },
    {
        "ID": "174",
        "Surname": "Nagabattini",
        "FullName": "Prabhakar Rao",
        "City": "YNPuram",
        "Amount": "200"
    },
    {
        "ID": "175",
        "Surname": "Ambadipudi",
        "FullName": "Chinna Abraham Murali",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "176",
        "Surname": "Amarlapudi",
        "FullName": "Laxmi",
        "City": "Muchinthala",
        "Amount": "500"
    },
    {
        "ID": "177",
        "Surname": "Amarlapudi",
        "FullName": "Anand Rao",
        "City": "Wyra",
        "Amount": "300"
    },
    {
        "ID": "178",
        "Surname": "Ambadipudi",
        "FullName": "Naga Raju",
        "City": "Wyra",
        "Amount": "100"
    },
    {
        "ID": "179",
        "Surname": "Marsakatla",
        "FullName": "Prasad",
        "City": "Wyra",
        "Amount": "200"
    },
    {
        "ID": "180",
        "Surname": "Ambadipudi",
        "FullName": "Hanumanth Rao",
        "City": "Anjanapuram",
        "Amount": "100"
    },
    {
        "ID": "181",
        "Surname": "Pilli",
        "FullName": "Kavitha",
        "City": "Nacharam",
        "Amount": "1000"
    },
    {
        "ID": "182",
        "Surname": "Bethampudi",
        "FullName": "Vara Prasad",
        "City": "Sathupally",
        "Amount": "500"
    },
    {
        "ID": "183",
        "Surname": "Bible Mission",
        "FullName": "Mahima Jyothi",
        "City": "Sathupally",
        "Amount": "200"
    }
];

  const [data1, setData1] =  useState(data);

  // const [first, setfirst] = useState(second);
  // console.log(data1);
  const onFilter = (event) => {
    const filtered = data.filter(user => {
      if(event.target.id === 'Surname'){
        return user.Surname.toString().toLocaleLowerCase().startsWith(event.target.value.toString().toLocaleLowerCase());
      } else if(event.target.id === 'FullName'){
        return user.FullName.toString().toLocaleLowerCase().startsWith(event.target.value.toString().toLocaleLowerCase());
      }else if(event.target.id === 'City'){
        return user.City.toString().toLocaleLowerCase().startsWith(event.target.value.toString().toLocaleLowerCase());
      }else if(event.target.id === 'Amount'){
        return user.Amount.toString().toLocaleLowerCase().startsWith(event.target.value.toString().toLocaleLowerCase());
      }
              

    });
    setData1(filtered);
  }

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Surname</th>
            <th>Full Name</th>
            <th>City</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <Form.Control type="text" id="num" controlId="ID" onChange={onFilter}/></td>
            <td><Form.Control type="text" id="Surname" controlId="Surname" onChange={onFilter}/></td>
            <td><Form.Control type="text" id="FullName" controlId="FullName" onChange={onFilter}/></td>
            <td><Form.Control type="text" id="City" controlId="City" onChange={onFilter}/></td>
            <td><Form.Control type="text" id="Amount" controlId="Amount" onChange={onFilter}/></td>
          </tr>
          {data1.map(user => <RowData ID={user.ID} Surname={user.Surname} FullName = {user.FullName} City={user.City} Amount={user.Amount}/>)}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
