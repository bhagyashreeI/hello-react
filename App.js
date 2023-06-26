import React from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from "./utils/constants";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <div className="logoitem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-UNPJkW8OAJT10rkDLsrFQMFn7kJ587ryg&usqp=CAU" height="100" />
                    <span className="caption"><i>Order-Eat-Repeat</i></span>
                </div>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>My Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restLlist = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "427516",
            "name": "Taco Bell",
            "uuid": "1de514cf-f6a7-4c9a-8cd8-d8d395513ea6",
            "city": "6",
            "area": "Viman Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "e7f40335a66b230f5eda766022dfecbd",
            "cuisines": [
                "Mexican"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 2.200000047683716,
            "slugs": {
                "restaurant": "taco-bell-phoenix-marketcity-viman-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Taco Bell, Shop No 207 Phoenix MarketCity, Viman Nagar Road, Viman Nagar, Pune Maharashtra -411014",
            "locality": "Viman Nagar",
            "parentId": 1557,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6999973~p=1~eid=00000188-f743-d2ba-11b4-f2bf00dc0170~srvts=1687775597242",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "427516",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 2.200000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "608346",
            "name": "McDonald's",
            "uuid": "a6e909b4-8226-489a-abcd-cc6a4fe6d6fa",
            "city": "6",
            "area": "Aero-Mall",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "tags": [

            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "slaString": "21 MINS",
            "lastMileTravel": 1.7999999523162842,
            "slugs": {
                "restaurant": "mcdonalds-lohegaon-pebbles-plaza-viman-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Retail Showroom No. 11(Part), 12 & 13, Ground Floor, Pebbles Centre, MLCP, Pawar Business Square, Survey No. 225, Lohagaon, Pune 411014.",
            "locality": "Lohagaon",
            "parentId": 630,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "608346",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "lastMileTravel": 1.7999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "65148",
            "name": "Best Belgian waffle",
            "uuid": "fd463eff-d635-4dff-ab70-cce0d0e4f964",
            "city": "6",
            "area": "Viman Nagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "vu2b5rtmtli2ajoqu1uh",
            "cuisines": [
                "Desserts",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "best-belgian-waffle-koregaon-park-kalyani-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Shop 1 , near Computer Store  , Viman Darshan CHS , Sanjay Park , Lane No - 5 , Viman Nagar 411014",
            "locality": "Sanjay Park",
            "parentId": 5818,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "65148",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "354444",
            "name": "Captain Rolls",
            "uuid": "c7c9513e-cf53-4923-ad99-69f46aa3b614",
            "city": "6",
            "area": "Wadgaon Sheri",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "sldysdt8qcxf899fpoy4",
            "cuisines": [
                "Snacks",
                "Indian",
                "North Indian",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 3.700000047683716,
            "slugs": {
                "restaurant": "pune-roll-company-viman-nagar-viman-nagar-2",
                "city": "pune"
            },
            "cityState": "6",
            "address": "SR. .NO. 40/4/BALAJI UDYAM NAGAR ROAD,NEAR PMC WATER WADGAONSHERI PUNE,NEAR PMC WATER WADGAONSHERI PUNE,Pune Nagar Road & Sangamwadi, Pune, Maharashtra-411014",
            "locality": "Balaji Udhayam Nagar",
            "parentId": 55854,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7135237~p=4~eid=00000188-f743-d2ba-11b4-f2c000dc043f~srvts=1687775597242",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "3.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "354444",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 3.700000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.7",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3855",
            "name": "Uncle's Chinese",
            "uuid": "699535f1-8928-45e3-ae85-9ded5e6dfb0f",
            "city": "6",
            "area": "Koregaon Park",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "v4myttdsd9chqdhstnly",
            "cuisines": [
                "Chinese",
                "Thai",
                "Malaysian"
            ],
            "tags": [

            ],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 4.400000095367432,
            "slugs": {
                "restaurant": "uncles-chinese-koregaon-park",
                "city": "pune"
            },
            "cityState": "6",
            "address": "3 & 5, A/10, Meera Garden Society, Lane 7, Off North Main Road, Koregaon Park, Pune",
            "locality": "Koregaon Park",
            "parentId": 219488,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6971569~p=16~eid=00000188-f743-d2ba-11b4-f2c400dc1025~srvts=1687775597242",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "3855",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 4.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3178",
            "name": "Subway",
            "uuid": "b0c71270-5e09-4878-b0f2-b5116690e883",
            "city": "6",
            "area": "Viman Nagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 14,
            "minDeliveryTime": 14,
            "maxDeliveryTime": 14,
            "slaString": "14 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
                "restaurant": "subway-viman-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "SHOP NO-18B,19B,TOWN SQUARE SHOPPING CENTER, NEW AIRPORT ROAD, VIMAN NAGAR,PUNE-411014, Pune Nagar Road & Sangamwadi, Pune PMC, Maharashtra-411014",
            "locality": "Phoenix Market city",
            "parentId": 2,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "3178",
                "deliveryTime": 14,
                "minDeliveryTime": 14,
                "maxDeliveryTime": 14,
                "lastMileTravel": 0.699999988079071,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "430532",
            "name": "Taco Alfresco",
            "uuid": "bd808eaf-208f-4797-b82c-167c831bf9bd",
            "city": "6",
            "area": "Viman Nagar",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "zlykxi5bah9orfhi7zg4",
            "cuisines": [
                "Mexican",
                "Beverages",
                "Desserts",
                "Salads",
                "Tex-Mex"
            ],
            "tags": [

            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 1.7000000476837158,
            "slugs": {
                "restaurant": "taco-alfresco-viman-nagar-viman-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "Shop No.-1, Gera Enclave, Lane No.-6, Near Ganpati Chowk, Viman Nagar, Pune",
            "locality": "Viman Nagar",
            "parentId": 199819,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6937409~p=10~eid=00000188-f743-d2ba-11b4-f2c200dc0a08~srvts=1687775597242",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "430532",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 1.7000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "685719",
            "name": "Papa Johns Cafe",
            "uuid": "4607e7cb-5b6d-4643-b1db-d0b6a2afffc7",
            "city": "6",
            "area": "Viman Nagar",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "3fdf3d7e951ea446d5ffa2e098f39d10",
            "cuisines": [
                "Indian",
                "Fast Food",
                "Snacks",
                "Desserts"
            ],
            "tags": [

            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 0.6000000238418579,
            "slugs": {
                "restaurant": "papa-johns-cafe-viman-nagar-viman-nagar",
                "city": "pune"
            },
            "cityState": "6",
            "address": "House No 215, S No 230, Sanjay Park,Viman Darshan Pune-411032 ,,Pune Nagar Road & Sangamwadi,Pune,Maharashtra-411032",
            "locality": "Sanjay Park",
            "parentId": 408950,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "685719",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 0.6000000238418579,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "537127",
            "name": "The Royal Biryani Burger and Momos",
            "uuid": "2dc6c78d-e6c3-4e3f-a113-828c8ec9104e",
            "city": "6",
            "area": "Viman Nagar",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "31c6877271ef576582d09ab28622d172",
            "cuisines": [
                "Biryani",
                "Burgers",
                "Chinese",
                "North Indian"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 0.20000000298023224,
            "slugs": {
                "restaurant": "cheesy-pizza-house-vishrantwadi-vishrantwadi",
                "city": "pune"
            },
            "cityState": "6",
            "address": "LANE NO f opposite russian bakery HOUSE NO 215, S NO 230, SANJAY PARK VIMAN DARSHAN PUNE 411032, PUNE AIR PORT ROAD & SANGAMWADI, PUNE PMC (MAHARASHTRA)- 411032",
            "locality": "Sanjay Park",
            "parentId": 337043,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "537127",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 0.20000000298023224,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "2.7",
            "totalRatings": 20,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "40737",
            "name": "Cake Man",
            "uuid": "9369d20b-6066-40ab-8e06-af56b50293c8",
            "city": "6",
            "area": "Kalyani Nagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "14df28430cb3a76f1aca87827a2feb71",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 3.5999999046325684,
            "slugs": {
                "restaurant": "cakeman-kalyani-nagar-koregaon-park",
                "city": "pune"
            },
            "cityState": "6",
            "address": "shop no 3 , 10 north apartment ,near icici bank , kalyani nagar-411006",
            "locality": "Nilanjali Society",
            "parentId": 54960,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6996926~p=13~eid=00000188-f743-d2ba-11b4-f2c300dc0d57~srvts=1687775597242",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "3.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "40737",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "lastMileTravel": 3.5999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
];

const RestCard = (props) =>{
    const { restData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = restData?.data;
    return (
        <div className="card">
            <img src={CDN_URL + cloudinaryImageId} height="100" />
            <h3>{name}</h3>
            <span>{cuisines.join(',')}</span>
            <h4>{avgRating}</h4>
            <h4>Rs.{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className='container'>
            {
                    restLlist.map(restaurant =>(
                        <RestCard key={restaurant.data.id} restData={restaurant} />
                    ))
            }
                
            </div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);