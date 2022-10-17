
const dateObj = new Date()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const data = [
    {
        "id" : "1",
        "title"  : "Nasa Hogwig & Herold",
        "image_home" : "https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/up_1_1500x.jpg?v=1665546973",
        "date" : `${monthNames[dateObj.getMonth()]}  ${dateObj.getFullYear()}`,
        "main_content" : "Introducing Nasa Howig & Herold. This is the couple for navy colorway, perfecting fit all type of layout and set up.",
        "detail_album" : "Product album",
        "detail_marker" : "Marker",
        "detail_marker": "Marker",
        "link_album" : "https://imgur.com/a/CCGbdMO",
        "link_marker" : "Zy.cap",
        "child_content" : {
            "title" : "Specification",
            "content"  : ["Multi-shots resin","$70 per cap , 15 caps per colorway","Shipping within 10 days","Hand cast with resin, there's no paint involved","These artisan keycaps are compatible with MX keyboards"]
        },
        "image_detail_header" : "https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/up_1_1500x.jpg?v=1665546973",
        "image_detail_footer"  : ["https://cdn.shopify.com/s/files/1/0299/9497/5365/files/up_2_546130f7-0857-45e7-a765-6332be7fec48_1024x1024.jpg?v=1665546888"]
    },
    {
        "id" : "2",
        "title"  : "Dracula Sala Naja Raffle Sale",
        "image_home" : "https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/4_-_yyxVN5B_720x.jpg?v=1664976482",
        "date" : `${monthNames[dateObj.getMonth()]}  ${dateObj.getUTCFullYear()}`,
        "main_content" : "Introducing our latest sculpt - Sala Naja. She is the combination of magical Basilisk and Hungarian Horntail - the nightmare for any wizard that need to fight them.",
        "detail_album" : "Product album",
        "detail_marker" : "Marker",
        "link_album" : "https://imgur.com/a/nfj5goR",
        "link_marker" : "Zy.cap",
        "child_content" : {
            "title" : "Specification",
            "content"  : ["Multi-shots resin","$70 per cap , 15 caps per colorway","Shipping within 10 days","Hand cast with resin, there's no paint involved","These artisan keycaps are compatible with MX keyboards"]
        },
        "image_detail_header" : "https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/4_-_yyxVN5B_1500x.jpg?v=1664976482",
        "image_detail_footer"  :["https://cdn.shopify.com/s/files/1/0299/9497/5365/files/2_-_G8Y94Wl_1024x1024.jpg?v=1664976518","https://cdn.shopify.com/s/files/1/0299/9497/5365/files/up_2_1024x1024.jpg?v=1664861391"]
    },
    {
        "id" : "3",
        "title"  : "Blanktronaut - Debut Sale",
        "image_home" : "https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/Blanktronaut_11_720x.jpg?v=1664363752",
        "date" : `${monthNames[dateObj.getMonth()]}  ${dateObj.getUTCFullYear()}`,
        "main_content" : "Inspired by Interstellar, Blanktronaut is our new serie of blank artisans that match cherry profile.  The Light mode and dark mode astronaut  artisan will blend in to any keyset easily and provide a perfect focus point on your setup.",
        "detail_album" : "Product album",
        "detail_marker" : "Marker",
        "detail_marker": "Marker",
        "link_album" : "https://imgur.com/a/HHfSxKS",
        "link_marker" : "Zy.cap",
        "child_content" : {
            "title" : "Specification",
            "content"  : ["Multi-shots resin","Shipping within 14 days.","Hand cast with resin, there's no paint involved.","These artisan keycaps are compatible with MX keyboards.  "]
        },
        "image_detail_header" : "https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/Blanktronaut_11_1500x.jpg?v=1664363752",
        "image_detail_footer"  :["https://cdn.shopify.com/s/files/1/0299/9497/5365/files/Blanktronaut_10_1024x1024.jpg?v=1664362994","https://cdn.shopify.com/s/files/1/0299/9497/5365/files/Blanktronaut_4_1024x1024.jpg?v=1664362994"]
    }
]
export default data
export function getDataAnnoucement(){
    return data
}
export function getAnnoucemenDetail(id){
    return data.find((item)=>item.id == id)
}
