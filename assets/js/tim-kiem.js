var mockData = [{
    name: "Giày Nike Dunk Low",
    price: 600.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Giay&Bong/giay-10.jpg'
},{
    name: "Giày Nike Air Max",
    price: 650.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Giay&Bong/giay-11.jpg'
},{
    name: "Giày Nike omer",
    price: 700.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Giay&Bong/giay-13.jpg'
},{
    name: "Giày Nike Kope 9",
    price: 800.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Giay&Bong/giay-16.jpg'
},{
    name: "Áo bóng đá",
    price: 200.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/QuanAo/quanao_6.jpg'
},{
    name: "Áo khoác dù",
    price: 300.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/QuanAo/quanao_22.jpg'
},{
    name: "Áo club Dortmund",
    price: 240.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/QuanAo/quanao_4.jpg'
},{
    name: "Áo bóng rổ",
    price: 180.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/QuanAo/quanao_20.jpg'
},{
    name: "Găng tay ",
    price: 120.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Gym/gym_1.jpg'
},{
    name: "Quấn khuỷu tay",
    price: 140.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Gym/gym_2.jpg'
},{
    name: "Quấn cổ tay",
    price: 150.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Gym/gym_3.jpg'
},{
    name: "Bao tay gym",
    price: 130.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Gym/gym_4.jpg'
},{
    name: "Đồng hồ tính bước chạy",
    price: 100.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Thiet-Bị-Thong-Minh/thietbi_1.jpg'
},{
    name: "Đồng hồ đo nhịp tim",
    price: 900.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Thiet-Bị-Thong-Minh/thietbi_2.jpg'
},{
    name: "Đồng hồ đi xe đạp",
    price: 999.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Thiet-Bị-Thong-Minh/thietbi_3.jpg'
},{
    name: "Đồng hồ thông minh",
    price: 999.999,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Thiet-Bị-Thong-Minh/thietbi_4.jpg'
},{
    name: "Balo màu đen",
    price: 300.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Balo-tuicheo/balo_1.jpg'
},{
    name: "Balo đa năng",
    price: 500.00,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Balo-tuicheo/balo_2.jpg'
},{
    name: "Balo thể thao",
    price: 400.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Balo-tuicheo/balo_3.jpg'
},{
    name: "sp siêu rộng",
    price: 300.000,
    picture: '/assets/image__Binh/Danh-muc-san-pham/Balo-tuicheo/balo_4.jpg'
}]


var products = document.querySelector('.products')

// init
// product.innerHTML = ''
mockData.forEach(item=>{
    var newProduct = document.createElement('div')
    newProduct.classList.add('product')
    newProduct.innerHTML = `
        <img src="${item.picture}">
        <div class="info">
            <div class="name">${item.name}</div>
            <div class="price">${item.price}</div>
        </div>`
        
    products.appendChild(newProduct)
})

var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function(e){
    // console.log(e.target.value);
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDOM = document.querySelectorAll('.product')
    listProductDOM.forEach(item=>{
        // console.log(item.innerText.includes(txtSearch));
        if( item.innerText.toLowerCase().includes(txtSearch)){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})


// Sticky Header cuộn trang 
    $(document).ready(function() {
        // alert("oke")
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('myheader').addClass('sticky');
            } else {
                $('myheader').removeClass('sticky');
            }
        });
    });




