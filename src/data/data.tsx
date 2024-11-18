import {
  ChartNoAxesColumnDecreasing,
  ChartNoAxesCombined,
  ChartPie,
  ContactRound,
  GalleryVertical,
  MailMinus,
  MapIcon,
  PhoneCall,
  ShieldQuestion,
  TrafficCone,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  IAccordingData,
  ICharts,
  IDashBoardRow1,
  IData,
  IDataContact,
  IDataInvoices,
  IDataTeam,
  IFormData,
  IPages,
} from "../interface/interface";

export const Data: IData[] = [
  {
    name: "manage team",
    favicon: <Users size={20} />,
  },
  {
    name: "contacts information",
    favicon: <ContactRound size={20} />,
  },
  {
    name: "invoices balances",
    favicon: <GalleryVertical size={20} />,
  },
];

export const Pages: IPages[] = [
  {
    name: "profile form",
    favicon: <User size={20} />,
  },

  {
    name: "FAQ page",
    favicon: <ShieldQuestion size={20} />,
  },
];

export const Charts: ICharts[] = [
  {
    name: "bar Chart",
    favicon: <ChartNoAxesColumnDecreasing size={20} />,
  },
  {
    name: "pie chart",
    favicon: <ChartPie size={20} />,
  },
  {
    name: "line chart",
    favicon: <ChartNoAxesCombined size={20} />,
  },
  {
    name: "geography chart",
    favicon: <MapIcon size={20} />,
  },
];

export const dashdatarow1: IDashBoardRow1[] = [
  {
    favicon: <MailMinus size={26} />,
    number: "12,361",
    description: "email sent",
    offer: "+14%",
  },
  {
    favicon: <PhoneCall size={26} />,
    number: "431,225",
    description: "Sales Obtained",
    offer: "+21%",
  },
  {
    favicon: <UserPlus size={26} />,
    number: "32,441",
    description: "New Clients",
    offer: "+5%",
  },
  {
    favicon: <TrafficCone size={26} />,
    number: "1,325,134",
    description: "Traffic Received",
    offer: "+43%",
  },
];

export const dataTeam: IDataTeam[] = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const DataContacts: IDataContact[] = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const DataInvoices: IDataInvoices[] = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const ProfileData: IFormData[] = [
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "contactNumber",
    placeholder: "Contact Number",
    type: "number",
    validation: {
      required: true,
    },
  },
  {
    name: "Address1",
    placeholder: "Address 1",
    type: "text",
    validation: {
      required: true,
    },
  },

  {
    name: "Address2",
    placeholder: "Address 2",
    type: "text",
    validation: {
      required: true,
    },
  },
];

export const AccordingData: IAccordingData[] = [
  {
    header: "an important question",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
  {
    header: "why us",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur..",
  },
  {
    header: "what we offer",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
  {
    header: "help",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
  {
    header: "our skills and experience",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
  {
    header: "your favorite important question",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
  {
    header: "some random important question",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
  {
    header: "the final  question",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur.",
  },
];

export const circleData = [
  [748, 72, 222, 23, 896],
  [395, 1245, 942, 219, 387],
  [1199, 285, 237, 1418, 216],
  [423, 1915, 1550, 143, 94],
  [212, 362, 330, 92, 435],
];

export const BarsCharts = [
  {
    country: "AD",
    "hot dog": 157,
    "hot dogColor": "hsl(192, 70%, 50%)",
    burger: 91,
    burgerColor: "hsl(224, 70%, 50%)",
    sandwich: 26,
    sandwichColor: "hsl(333, 70%, 50%)",
    kebab: 106,
    kebabColor: "hsl(57, 70%, 50%)",
    fries: 117,
    friesColor: "hsl(342, 70%, 50%)",
    donut: 12,
    donutColor: "hsl(226, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 46,
    "hot dogColor": "hsl(259, 70%, 50%)",
    burger: 187,
    burgerColor: "hsl(6, 70%, 50%)",
    sandwich: 101,
    sandwichColor: "hsl(207, 70%, 50%)",
    kebab: 114,
    kebabColor: "hsl(109, 70%, 50%)",
    fries: 146,
    friesColor: "hsl(305, 70%, 50%)",
    donut: 124,
    donutColor: "hsl(181, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 86,
    "hot dogColor": "hsl(332, 70%, 50%)",
    burger: 183,
    burgerColor: "hsl(156, 70%, 50%)",
    sandwich: 118,
    sandwichColor: "hsl(258, 70%, 50%)",
    kebab: 185,
    kebabColor: "hsl(157, 70%, 50%)",
    fries: 176,
    friesColor: "hsl(23, 70%, 50%)",
    donut: 66,
    donutColor: "hsl(306, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 51,
    "hot dogColor": "hsl(145, 70%, 50%)",
    burger: 63,
    burgerColor: "hsl(125, 70%, 50%)",
    sandwich: 144,
    sandwichColor: "hsl(247, 70%, 50%)",
    kebab: 166,
    kebabColor: "hsl(202, 70%, 50%)",
    fries: 110,
    friesColor: "hsl(178, 70%, 50%)",
    donut: 36,
    donutColor: "hsl(339, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 113,
    "hot dogColor": "hsl(20, 70%, 50%)",
    burger: 97,
    burgerColor: "hsl(111, 70%, 50%)",
    sandwich: 160,
    sandwichColor: "hsl(339, 70%, 50%)",
    kebab: 129,
    kebabColor: "hsl(138, 70%, 50%)",
    fries: 13,
    friesColor: "hsl(346, 70%, 50%)",
    donut: 112,
    donutColor: "hsl(319, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 183,
    "hot dogColor": "hsl(218, 70%, 50%)",
    burger: 123,
    burgerColor: "hsl(328, 70%, 50%)",
    sandwich: 107,
    sandwichColor: "hsl(205, 70%, 50%)",
    kebab: 27,
    kebabColor: "hsl(209, 70%, 50%)",
    fries: 142,
    friesColor: "hsl(310, 70%, 50%)",
    donut: 58,
    donutColor: "hsl(190, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 151,
    "hot dogColor": "hsl(277, 70%, 50%)",
    burger: 25,
    burgerColor: "hsl(359, 70%, 50%)",
    sandwich: 96,
    sandwichColor: "hsl(23, 70%, 50%)",
    kebab: 47,
    kebabColor: "hsl(131, 70%, 50%)",
    fries: 109,
    friesColor: "hsl(221, 70%, 50%)",
    donut: 8,
    donutColor: "hsl(312, 70%, 50%)",
  },
];

export const PieChart = {
  name: "nivo",
  color: "hsl(9, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(347, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(176, 70%, 50%)",
          children: [
            {
              name: "cchart",
              color: "hsl(37, 70%, 50%)",
              loc: 167115,
            },
            {
              name: "xAxis",
              color: "hsl(254, 70%, 50%)",
              loc: 72219,
            },
            {
              name: "yAxis",
              color: "hsl(288, 70%, 50%)",
              loc: 191202,
            },
            {
              name: "layers",
              color: "hsl(336, 70%, 50%)",
              loc: 95134,
            },
          ],
        },
        {
          name: "ppie",
          color: "hsl(211, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(11, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(117, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(352, 70%, 50%)",
                      loc: 37319,
                    },
                    {
                      name: "slices",
                      color: "hsl(171, 70%, 50%)",
                      loc: 79526,
                    },
                    {
                      name: "bbox",
                      color: "hsl(288, 70%, 50%)",
                      loc: 122587,
                    },
                  ],
                },
                {
                  name: "donut",
                  color: "hsl(216, 70%, 50%)",
                  loc: 194339,
                },
                {
                  name: "gauge",
                  color: "hsl(259, 70%, 50%)",
                  loc: 50782,
                },
              ],
            },
            {
              name: "legends",
              color: "hsl(31, 70%, 50%)",
              loc: 42516,
            },
          ],
        },
      ],
    },
    {
      name: "colors",
      color: "hsl(260, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(355, 70%, 50%)",
          loc: 4263,
        },
        {
          name: "hsl",
          color: "hsl(67, 70%, 50%)",
          loc: 109220,
        },
      ],
    },
    {
      name: "utils",
      color: "hsl(89, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(331, 70%, 50%)",
          loc: 74425,
        },
        {
          name: "resetClock",
          color: "hsl(6, 70%, 50%)",
          loc: 30908,
        },
        {
          name: "noop",
          color: "hsl(131, 70%, 50%)",
          loc: 137395,
        },
        {
          name: "tick",
          color: "hsl(278, 70%, 50%)",
          loc: 98137,
        },
        {
          name: "forceGC",
          color: "hsl(8, 70%, 50%)",
          loc: 11513,
        },
        {
          name: "stackTrace",
          color: "hsl(117, 70%, 50%)",
          loc: 143964,
        },
        {
          name: "dbg",
          color: "hsl(11, 70%, 50%)",
          loc: 147919,
        },
      ],
    },
    {
      name: "generators",
      color: "hsl(31, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(183, 70%, 50%)",
          loc: 12518,
        },
        {
          name: "city",
          color: "hsl(286, 70%, 50%)",
          loc: 5069,
        },
        {
          name: "animal",
          color: "hsl(293, 70%, 50%)",
          loc: 74471,
        },
        {
          name: "movie",
          color: "hsl(144, 70%, 50%)",
          loc: 73885,
        },
        {
          name: "user",
          color: "hsl(232, 70%, 50%)",
          loc: 189047,
        },
      ],
    },
    {
      name: "set",
      color: "hsl(102, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(21, 70%, 50%)",
          loc: 61583,
        },
        {
          name: "intersect",
          color: "hsl(123, 70%, 50%)",
          loc: 106671,
        },
        {
          name: "merge",
          color: "hsl(105, 70%, 50%)",
          loc: 124058,
        },
        {
          name: "reverse",
          color: "hsl(178, 70%, 50%)",
          loc: 186943,
        },
        {
          name: "toArray",
          color: "hsl(278, 70%, 50%)",
          loc: 172799,
        },
        {
          name: "toObject",
          color: "hsl(41, 70%, 50%)",
          loc: 132470,
        },
        {
          name: "fromCSV",
          color: "hsl(47, 70%, 50%)",
          loc: 131207,
        },
        {
          name: "slice",
          color: "hsl(24, 70%, 50%)",
          loc: 21170,
        },
        {
          name: "append",
          color: "hsl(306, 70%, 50%)",
          loc: 133028,
        },
        {
          name: "prepend",
          color: "hsl(174, 70%, 50%)",
          loc: 59816,
        },
        {
          name: "shuffle",
          color: "hsl(97, 70%, 50%)",
          loc: 106651,
        },
        {
          name: "pick",
          color: "hsl(76, 70%, 50%)",
          loc: 116768,
        },
        {
          name: "plouc",
          color: "hsl(147, 70%, 50%)",
          loc: 7758,
        },
      ],
    },
    {
      name: "text",
      color: "hsl(266, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(273, 70%, 50%)",
          loc: 159547,
        },
        {
          name: "slugify",
          color: "hsl(301, 70%, 50%)",
          loc: 20649,
        },
        {
          name: "snakeCase",
          color: "hsl(242, 70%, 50%)",
          loc: 186462,
        },
        {
          name: "camelCase",
          color: "hsl(271, 70%, 50%)",
          loc: 29306,
        },
        {
          name: "repeat",
          color: "hsl(247, 70%, 50%)",
          loc: 26321,
        },
        {
          name: "padLeft",
          color: "hsl(330, 70%, 50%)",
          loc: 77472,
        },
        {
          name: "padRight",
          color: "hsl(22, 70%, 50%)",
          loc: 116314,
        },
        {
          name: "sanitize",
          color: "hsl(10, 70%, 50%)",
          loc: 88979,
        },
        {
          name: "ploucify",
          color: "hsl(265, 70%, 50%)",
          loc: 49260,
        },
      ],
    },
    {
      name: "misc",
      color: "hsl(88, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(276, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(168, 70%, 50%)",
              loc: 126707,
            },
            {
              name: "HOWDY",
              color: "hsl(358, 70%, 50%)",
              loc: 30553,
            },
            {
              name: "aloha",
              color: "hsl(313, 70%, 50%)",
              loc: 105797,
            },
            {
              name: "AHOY",
              color: "hsl(285, 70%, 50%)",
              loc: 79607,
            },
          ],
        },
        {
          name: "other",
          color: "hsl(191, 70%, 50%)",
          loc: 137087,
        },
        {
          name: "path",
          color: "hsl(73, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(137, 70%, 50%)",
              loc: 27220,
            },
            {
              name: "pathB",
              color: "hsl(199, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(190, 70%, 50%)",
                  loc: 108914,
                },
                {
                  name: "pathB2",
                  color: "hsl(158, 70%, 50%)",
                  loc: 70825,
                },
                {
                  name: "pathB3",
                  color: "hsl(289, 70%, 50%)",
                  loc: 38922,
                },
                {
                  name: "pathB4",
                  color: "hsl(8, 70%, 50%)",
                  loc: 24858,
                },
              ],
            },
            {
              name: "pathC",
              color: "hsl(260, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(277, 70%, 50%)",
                  loc: 74325,
                },
                {
                  name: "pathC2",
                  color: "hsl(0, 70%, 50%)",
                  loc: 141064,
                },
                {
                  name: "pathC3",
                  color: "hsl(347, 70%, 50%)",
                  loc: 126215,
                },
                {
                  name: "pathC4",
                  color: "hsl(99, 70%, 50%)",
                  loc: 7252,
                },
                {
                  name: "pathC5",
                  color: "hsl(139, 70%, 50%)",
                  loc: 173710,
                },
                {
                  name: "pathC6",
                  color: "hsl(291, 70%, 50%)",
                  loc: 170158,
                },
                {
                  name: "pathC7",
                  color: "hsl(285, 70%, 50%)",
                  loc: 68460,
                },
                {
                  name: "pathC8",
                  color: "hsl(85, 70%, 50%)",
                  loc: 129658,
                },
                {
                  name: "pathC9",
                  color: "hsl(315, 70%, 50%)",
                  loc: 138812,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const linechart = [
  {
    id: "japan",
    color: "hsl(257, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 24,
      },
      {
        x: "helicopter",
        y: 49,
      },
      {
        x: "boat",
        y: 37,
      },
      {
        x: "train",
        y: 206,
      },
      {
        x: "subway",
        y: 258,
      },
      {
        x: "bus",
        y: 159,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 150,
      },
      {
        x: "bicycle",
        y: 258,
      },
      {
        x: "horse",
        y: 183,
      },
      {
        x: "skateboard",
        y: 18,
      },
      {
        x: "others",
        y: 184,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(56, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 147,
      },
      {
        x: "helicopter",
        y: 29,
      },
      {
        x: "boat",
        y: 241,
      },
      {
        x: "train",
        y: 286,
      },
      {
        x: "subway",
        y: 117,
      },
      {
        x: "bus",
        y: 166,
      },
      {
        x: "car",
        y: 83,
      },
      {
        x: "moto",
        y: 167,
      },
      {
        x: "bicycle",
        y: 47,
      },
      {
        x: "horse",
        y: 192,
      },
      {
        x: "skateboard",
        y: 90,
      },
      {
        x: "others",
        y: 153,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(218, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 271,
      },
      {
        x: "helicopter",
        y: 171,
      },
      {
        x: "boat",
        y: 287,
      },
      {
        x: "train",
        y: 150,
      },
      {
        x: "subway",
        y: 69,
      },
      {
        x: "bus",
        y: 89,
      },
      {
        x: "car",
        y: 245,
      },
      {
        x: "moto",
        y: 188,
      },
      {
        x: "bicycle",
        y: 217,
      },
      {
        x: "horse",
        y: 96,
      },
      {
        x: "skateboard",
        y: 111,
      },
      {
        x: "others",
        y: 86,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(327, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 77,
      },
      {
        x: "helicopter",
        y: 37,
      },
      {
        x: "boat",
        y: 34,
      },
      {
        x: "train",
        y: 217,
      },
      {
        x: "subway",
        y: 130,
      },
      {
        x: "bus",
        y: 216,
      },
      {
        x: "car",
        y: 272,
      },
      {
        x: "moto",
        y: 76,
      },
      {
        x: "bicycle",
        y: 120,
      },
      {
        x: "horse",
        y: 182,
      },
      {
        x: "skateboard",
        y: 72,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(252, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 275,
      },
      {
        x: "helicopter",
        y: 198,
      },
      {
        x: "boat",
        y: 290,
      },
      {
        x: "train",
        y: 157,
      },
      {
        x: "subway",
        y: 280,
      },
      {
        x: "bus",
        y: 266,
      },
      {
        x: "car",
        y: 53,
      },
      {
        x: "moto",
        y: 30,
      },
      {
        x: "bicycle",
        y: 286,
      },
      {
        x: "horse",
        y: 89,
      },
      {
        x: "skateboard",
        y: 141,
      },
      {
        x: "others",
        y: 35,
      },
    ],
  },
];

export const geography = [
  {
    id: "AFG",
    value: 730195,
  },
  {
    id: "AGO",
    value: 823634,
  },
  {
    id: "ALB",
    value: 221294,
  },
  {
    id: "ARE",
    value: 898408,
  },
  {
    id: "ARG",
    value: 189234,
  },
  {
    id: "ARM",
    value: 452074,
  },
  {
    id: "ATA",
    value: 665855,
  },
  {
    id: "ATF",
    value: 625217,
  },
  {
    id: "AUT",
    value: 854957,
  },
  {
    id: "AZE",
    value: 584355,
  },
  {
    id: "BDI",
    value: 104140,
  },
  {
    id: "BEL",
    value: 762207,
  },
  {
    id: "BEN",
    value: 548159,
  },
  {
    id: "BFA",
    value: 932109,
  },
  {
    id: "BGD",
    value: 491860,
  },
  {
    id: "BGR",
    value: 660561,
  },
  {
    id: "BHS",
    value: 653376,
  },
  {
    id: "BIH",
    value: 931592,
  },
  {
    id: "BLR",
    value: 835649,
  },
  {
    id: "BLZ",
    value: 738328,
  },
  {
    id: "BOL",
    value: 589272,
  },
  {
    id: "BRN",
    value: 264839,
  },
  {
    id: "BTN",
    value: 128700,
  },
  {
    id: "BWA",
    value: 535832,
  },
  {
    id: "CAF",
    value: 303071,
  },
  {
    id: "CAN",
    value: 906497,
  },
  {
    id: "CHE",
    value: 75829,
  },
  {
    id: "CHL",
    value: 109287,
  },
  {
    id: "CHN",
    value: 619790,
  },
  {
    id: "CIV",
    value: 696215,
  },
  {
    id: "CMR",
    value: 153472,
  },
  {
    id: "COG",
    value: 688168,
  },
  {
    id: "COL",
    value: 176081,
  },
  {
    id: "CRI",
    value: 398418,
  },
  {
    id: "CUB",
    value: 147804,
  },
  {
    id: "-99",
    value: 70689,
  },
  {
    id: "CYP",
    value: 324677,
  },
  {
    id: "CZE",
    value: 981071,
  },
  {
    id: "DEU",
    value: 292567,
  },
  {
    id: "DJI",
    value: 525095,
  },
  {
    id: "DNK",
    value: 49872,
  },
  {
    id: "DOM",
    value: 40512,
  },
  {
    id: "DZA",
    value: 124524,
  },
  {
    id: "ECU",
    value: 242615,
  },
  {
    id: "EGY",
    value: 21097,
  },
  {
    id: "ERI",
    value: 701772,
  },
  {
    id: "ESP",
    value: 807807,
  },
  {
    id: "EST",
    value: 600806,
  },
  {
    id: "ETH",
    value: 152433,
  },
  {
    id: "FIN",
    value: 206272,
  },
  {
    id: "FJI",
    value: 16846,
  },
  {
    id: "FLK",
    value: 351314,
  },
  {
    id: "FRA",
    value: 924177,
  },
  {
    id: "GAB",
    value: 254368,
  },
  {
    id: "GBR",
    value: 808967,
  },
  {
    id: "GEO",
    value: 925838,
  },
  {
    id: "GHA",
    value: 523083,
  },
  {
    id: "GIN",
    value: 768058,
  },
  {
    id: "GMB",
    value: 974341,
  },
  {
    id: "GNB",
    value: 663009,
  },
  {
    id: "GNQ",
    value: 37635,
  },
  {
    id: "GRC",
    value: 600480,
  },
  {
    id: "GTM",
    value: 556167,
  },
  {
    id: "GUY",
    value: 718480,
  },
  {
    id: "HND",
    value: 46622,
  },
  {
    id: "HRV",
    value: 300926,
  },
  {
    id: "HTI",
    value: 128680,
  },
  {
    id: "HUN",
    value: 116680,
  },
  {
    id: "IDN",
    value: 621108,
  },
  {
    id: "IND",
    value: 729142,
  },
  {
    id: "IRL",
    value: 917997,
  },
  {
    id: "IRN",
    value: 182831,
  },
  {
    id: "IRQ",
    value: 731517,
  },
  {
    id: "ISL",
    value: 596231,
  },
  {
    id: "ISR",
    value: 85526,
  },
  {
    id: "ITA",
    value: 679651,
  },
  {
    id: "JAM",
    value: 63134,
  },
  {
    id: "JOR",
    value: 88409,
  },
  {
    id: "JPN",
    value: 165060,
  },
  {
    id: "KAZ",
    value: 755491,
  },
  {
    id: "KEN",
    value: 582834,
  },
  {
    id: "KGZ",
    value: 797947,
  },
  {
    id: "KHM",
    value: 747280,
  },
  {
    id: "OSA",
    value: 20260,
  },
  {
    id: "KWT",
    value: 468901,
  },
  {
    id: "LAO",
    value: 197900,
  },
  {
    id: "LBN",
    value: 619465,
  },
  {
    id: "LBR",
    value: 786502,
  },
  {
    id: "LBY",
    value: 869443,
  },
  {
    id: "LKA",
    value: 216250,
  },
  {
    id: "LSO",
    value: 463927,
  },
  {
    id: "LTU",
    value: 547380,
  },
  {
    id: "LUX",
    value: 647351,
  },
  {
    id: "LVA",
    value: 585199,
  },
  {
    id: "MAR",
    value: 666597,
  },
  {
    id: "MDA",
    value: 885428,
  },
  {
    id: "MDG",
    value: 551746,
  },
  {
    id: "MEX",
    value: 507468,
  },
  {
    id: "MKD",
    value: 723607,
  },
  {
    id: "MLI",
    value: 566198,
  },
  {
    id: "MMR",
    value: 996309,
  },
  {
    id: "MNE",
    value: 212563,
  },
  {
    id: "MNG",
    value: 86822,
  },
  {
    id: "MOZ",
    value: 713275,
  },
  {
    id: "MRT",
    value: 960634,
  },
  {
    id: "MWI",
    value: 73262,
  },
  {
    id: "MYS",
    value: 663874,
  },
  {
    id: "NAM",
    value: 347141,
  },
  {
    id: "NCL",
    value: 71985,
  },
  {
    id: "NER",
    value: 76101,
  },
  {
    id: "NGA",
    value: 481159,
  },
  {
    id: "NIC",
    value: 933377,
  },
  {
    id: "NLD",
    value: 814108,
  },
  {
    id: "NOR",
    value: 910964,
  },
  {
    id: "NPL",
    value: 963999,
  },
  {
    id: "NZL",
    value: 235081,
  },
  {
    id: "OMN",
    value: 537710,
  },
  {
    id: "PAK",
    value: 970115,
  },
  {
    id: "PAN",
    value: 867228,
  },
  {
    id: "PER",
    value: 519129,
  },
  {
    id: "PHL",
    value: 512827,
  },
  {
    id: "PNG",
    value: 754753,
  },
  {
    id: "POL",
    value: 257513,
  },
  {
    id: "PRI",
    value: 991009,
  },
  {
    id: "PRT",
    value: 777555,
  },
  {
    id: "PRY",
    value: 788381,
  },
  {
    id: "QAT",
    value: 938503,
  },
  {
    id: "ROU",
    value: 978807,
  },
  {
    id: "RUS",
    value: 316735,
  },
  {
    id: "RWA",
    value: 493115,
  },
  {
    id: "ESH",
    value: 560972,
  },
  {
    id: "SAU",
    value: 677697,
  },
  {
    id: "SDN",
    value: 965105,
  },
  {
    id: "SDS",
    value: 634517,
  },
  {
    id: "SEN",
    value: 971690,
  },
  {
    id: "SLB",
    value: 671458,
  },
  {
    id: "SLE",
    value: 837196,
  },
  {
    id: "SLV",
    value: 408728,
  },
  {
    id: "ABV",
    value: 342172,
  },
  {
    id: "SOM",
    value: 156760,
  },
  {
    id: "SRB",
    value: 558131,
  },
  {
    id: "SUR",
    value: 356430,
  },
  {
    id: "SVK",
    value: 404980,
  },
  {
    id: "SVN",
    value: 561219,
  },
  {
    id: "SWZ",
    value: 378916,
  },
  {
    id: "SYR",
    value: 287607,
  },
  {
    id: "TCD",
    value: 836304,
  },
  {
    id: "TGO",
    value: 892008,
  },
  {
    id: "THA",
    value: 991765,
  },
  {
    id: "TJK",
    value: 155868,
  },
  {
    id: "TKM",
    value: 973121,
  },
  {
    id: "TLS",
    value: 237098,
  },
  {
    id: "TTO",
    value: 418569,
  },
  {
    id: "TUN",
    value: 11278,
  },
  {
    id: "TUR",
    value: 203482,
  },
  {
    id: "TWN",
    value: 654345,
  },
  {
    id: "TZA",
    value: 997577,
  },
  {
    id: "UGA",
    value: 649329,
  },
  {
    id: "UKR",
    value: 932128,
  },
  {
    id: "URY",
    value: 783009,
  },
  {
    id: "USA",
    value: 957782,
  },
  {
    id: "UZB",
    value: 421894,
  },
  {
    id: "VEN",
    value: 100766,
  },
  {
    id: "VNM",
    value: 778251,
  },
  {
    id: "VUT",
    value: 596746,
  },
  {
    id: "PSE",
    value: 917110,
  },
  {
    id: "YEM",
    value: 747848,
  },
  {
    id: "ZAF",
    value: 124045,
  },
  {
    id: "ZMB",
    value: 537053,
  },
  {
    id: "ZWE",
    value: 835846,
  },
  {
    id: "KOR",
    value: 189109,
  },
];
