import PriceList from "../svg/price-list"

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";


const price_data_home_one = [
    //  monthly price here 1 to 3
    {
        id: 1, 
        img: pric_img_1,
        title: "Personal Plan",
        desctiption: <>Customized anything in anytime</>,
        cls: "",
        pric: "146.00",
        price_feature: [
            {
                list: "Easy To Track AI Data",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "100+ Ready Boots",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Best Data Plan & Package",
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: "inactive"
            }
        ],

    }, 
    {
        id: 2, 
        img: pric_img_2,
        title: "Advanced",
        desctiption: <>Customized anything in anytime</>,
        cls: "active",
        pric: "159.00",
        price_feature: [
            {
                list: "Easy To Track AI Data",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "100+ Ready Boots",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Best Data Plan & Package",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 3, 
        img: pric_img_3,
        title: "Personal Plan",
        desctiption: <>Customized anything in anytime</>,
        cls: "",
        pric: "289.00",
        price_feature: [
            {
                list: "Easy To Track AI Data",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "100+ Ready Boots",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Best Data Plan & Package",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    },   
    
    
    //  yearly price here  4 to 6
    {
        id: 4, 
        img: pric_img_1,
        title: "Personal Plan",
        desctiption: <>Customized anything in anytime</>,
        cls: "",
        pric: "99.00",
        price_feature: [
            {
                list: "Easy To Track AI Data",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "100+ Ready Boots",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Best Data Plan & Package",
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: "inactive"
            }
        ],

    }, 
    {
        id: 5, 
        img: pric_img_2,
        title: "Advanced",
        desctiption: <>Customized anything in anytime</>,
        cls: "active",
        pric: "199.00",
        price_feature: [
            {
                list: "Easy To Track AI Data",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "100+ Ready Boots",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Best Data Plan & Package",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 6, 
        img: pric_img_3,
        title: "Personal Plan",
        desctiption: <>Customized anything in anytime</>,
        cls: "",
        pric: "299.00",
        price_feature: [
            {
                list: "Easy To Track AI Data",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "100+ Ready Boots",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Best Data Plan & Package",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    },  
]
export default price_data_home_one