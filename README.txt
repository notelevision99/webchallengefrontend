/**API DOCUMENT**/

----------------CLIENT---------------

			/**REGISTER API**/
			
Url: "https://localhost:44310/api/auth/register"
Method: POST
{  
    "userName": "khachhang1",
    "passWord": "123456@Aa-",
    "email": "123asd@gmail.com",
    "address": "diachi1",
    "phoneNumber": "054679"
}

Reponse:
	+ Success :
		{
			"message": "" 
		}
	+ Error :
		{
			"message": "..."
		}
// Đăng kí tài khoản sẽ gửi link xác thực email đên gmail đăng kí
// Người dùng vào gmail nhấn vào đường link sẽ redirect về đường link
//Redicrect url: "https://localhost:44310/auth?token=***&email=***"
Response:
	+ Success : 
		{
			"message": "Xác nhận thành công"
		}
	+ Error : 
		{
			"message": "..."
		}

			/**LOGIN**/
URL: "https://localhost:44310/api/auth/login"
Method: POST
{
	"userName": "khachhang1",
    "passWord": "123456@Aa-"
}	
//Đăng nhập sẽ set cookie vào browser

Response: 
	+ Success:
		{
			"userId": "f07b3ce5-f678-4eeb-89a1-f69830277d3f",
			"userName": "khachhang1",
			"address": "diachi1",
			"phoneNumber": "054679",
			"email": "notelevision99@gmail.com",
			"roles": "User",
			"message": "Đăng nhập thành công"
		}
	+ Error : 
		{
			"message": "..."
		}
	
		/***********************************BLOG****************************/
// GetBlogsByBlogCategoryId	
URL: "https://localhost:44310/api/blogs/categoryblogs/{blogCategoryId}?pageNumber=1&pageSize=10"
Method: GET
//  blogCategoryId: 1 -> 4
Reponse:
{
    "data": [
        {
            "blogId": 15,
            "title": "asd",
            "shortDescription": "s",
            "blogCategoryId": 2,
            "blogCategoryName": "Tin tuc nong nghiep",
            "photoUrl": null,
            "createdDate": "0001-01-01T00:00:00"
        },
        {
            "blogId": 16,
            "title": "asdsdasd",
            "shortDescription": "asd",
            "blogCategoryId": 2,
            "blogCategoryName": "Tin tuc nong nghiep",
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1611688112/zk3f0utmbo3dbbqkvwe4.jpg",
            "createdDate": "0001-01-01T00:00:00"
        },
        
    ],
    "totalCount": 6,
    "pageNumber": 1,
    "pageSize": 10,
    "totalPages": 1
}
	+ Error: 
	{
		"message": "..."
	}
//GetBlogsByBlogId
URL : "https://localhost:44310/api/blogs/{blogId}"
Method: GET
//	blogId: int
Response:
	+ Success: 
	{
		"blogId": 16,
		"createdDate": "2021-01-27T02:08:18.5308476",
		"title": "asdsdasd",
		"shortDescription": "asd",
		"content": "<p>asd</p>",
		"photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1611688112/zk3f0utmbo3dbbqkvwe4.jpg"
	}
	+ Error 
	{
		"message": "..."
	}
		
		/***************************************************Categories Product*********************************/

// GetListCategories
URL: "https://localhost:44310/api/categories"
Method: GET
Response:
	+ Success :
	[
		{
			"categoryId": 1,
			"categoryName": "Loaiso1"
		},
		{
			"categoryId": 2,
			"categoryName": "Loaiso2"
		},
		{
			"categoryId": 3,
			"categoryName": "Loai3"
		}
	]

// GetProductsByCateName
URL: "https://localhost:44310/api/categories/getproductsbycatename/loaiso2?pageNumber=1&pageSize=10"
Method: GET
// Lấy danh sách sản phẩm có loại == loaiso2
Response:
	+Success:
	{
    "item1": [
        {
            "id": 1006,
            "productName": "sanphamtest",
            "categoryId": 2,
            "categoryName": "Loaiso2",
            "price": 2232,
            "totalCount": 0,
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609505380/j0dk7vlpstgz7ooezl9l.jpg",
            "company": "tanthanh",
            "weight": 1.2,
            "productDetails": null,
            "description": null,
			"urlSeo": "sanpham-1",
            "photos": null
        },
        {
            "id": 2018,
            "productName": "sonle23123123",
            "categoryId": 2,
            "categoryName": "Loaiso2",
            "price": 123123,
            "totalCount": 0,
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609184187/iambtc3nl9p8izydk28a.jpg",
            "company": "hagiangcorp",
            "weight": 1.0,
            "productDetails": null,
            "description": null,
			"urlSeo": "sanpham-2",
            "photos": null
        },
        ...
    ],
    "item2": 10
	}
// item2 : tổng số sản phẩm	

/** FILTER **/
//Response giống như trên
	//Filter theo company: 
		//URL: "https://localhost:44310/api/categories/getproductsbycatename/loaiso2?filter=2-tanthanh&pageNumber=1&pageSize=5"
		//Method: GET
		//filter=2-{tên công ty}
			//get list companyName to filter
			//URL: "https://localhost:44310/api/getfilterparams/getcompanies"
			//Method: GET
			+Response: 
			[
				{
					"company": "camtan"
				},
				{
					"company": "compa"
				},
				{
					"company": "hagiangcorp"
				},
				{
					"company": "tanthanh"
				}
			]
	//Filter theo weight:
		//URL: "https://localhost:44310/api/categories/getproductsbycatename/loaiso2?filter=5-1.2&pageNumber=1&pageSize=5"
		//Method: GET

		//filter=5-{weight}
			//get list weight to filter
			//URL: "https://localhost:44310/api/getfilterparams/getweights"
			//Method: GET
			+Response:
			[
				{
					"weight": 0.5
				},
				{
					"weight": 1.0
				},
				{
					"weight": 1.2
				},
				{
					"weight": 2.0
				}
			]
	
	- Muốn filter nhiều trường thì ngăn cách nhau bằng dấu _ (Shift + - )
	vd: filter=2-tanthanh_5-1.2
	Id filter list:
	2 - filter theo companyName
	5 - filter theo Weight
	6 (Sort - Sắp xếp)
	+	6-1(Sắp xếp giá từ cao -> thấp)
	+	6-2(Sắp xếp theo giá từ thấp -> cao)
		Không có thì sắp xếp theo mặc định
	vd: filter=2-tanthanh_5-1.2_6-1	
	
	
	
	
			/********************************************PRODCUT****************************************/

//GetProducts
URL: "https://localhost:44310/api/products?&pageNumber=1&pageSize=5"
Method: GET
Response:
	{
    "item1": [
        {
            "id": 1006,
            "productName": "sanphamtest",
            "categoryId": 2,
            "categoryName": "Loaiso2",
            "price": 2232,
            "totalCount": 0,
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609505380/j0dk7vlpstgz7ooezl9l.jpg",
            "company": "tanthanh",
            "weight": 1.2,
            "productDetails": null,
            "description": null,
			"urlSeo": "sanpham-2",
            "photos": null
        },
        
        {
            "id": 2022,
            "productName": "asd",
            "categoryId": 2,
            "categoryName": "Loaiso2",
            "price": 23123,
            "totalCount": 0,
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609184475/o34dsvofvjwhmqrqa2h1.png",
            "company": "tanthanh",
            "weight": 1.2,
            "productDetails": null,
            "description": null,
			"urlSeo": "sanpham-1",
            "photos": null
        }
    ],
    "item2": 12
}
	//item2: tổng số sản phẩm

	/**FILTER**/ 
	//Sử dụng như product categories
		
//GetProductsPopular
URL: "https://localhost:44310/api/products/getproductspopular"	
Method: GET
//Take 20 prodcuts
Reponse:
	[
		{
			"id": 1006,
			"productName": "sanphamtest",
			"categoryId": 2,
			"categoryName": "Loaiso2",
			"price": 2232,
			"totalCount": 0,
			"photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609505380/j0dk7vlpstgz7ooezl9l.jpg",
			"company": "tanthanh",
			"weight": 1.2,
			"productDetails": null,
			"description": null,
			"urlSeo": "sanpham-1",
			"photos": null
		},
		{
			"id": 2017,
			"productName": "longkim2",
			"categoryId": 1,
			"categoryName": "Loaiso1",
			"price": 12312,
			"totalCount": 0,
			"photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609064791/we6xqstkm6f1gs23gu1j.jpg",
			"company": "camtan",
			"weight": 2.0,
			"productDetails": null,
			"description": null,
			"urlSeo": "sanpham-2",
			"photos": null
		}
		...
	]

//Get ProductByUrlSeo
URL: "https://localhost:44310/api/products/sanpham-1"
Method: GET
// Lấy chi tiết sản phẩm dựa vào urlSeo
Response:
	{
    "item1": {
        "id": 1006,
        "productName": "sanphamtest",
        "categoryId": 2,
        "categoryName": "Loaiso2",
        "price": 2232,
        "totalCount": 0,
        "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609505380/j0dk7vlpstgz7ooezl9l.jpg",
        "company": "tanthanh",
        "weight": 1.2,
        "productDetails": "<p>Chi tiết sản phẩm</p><p>&nbsp;</p>",
        "description": "<p>&nbsp;</p><figure class=\"image\"><img src=\"https://res.cloudinary.com/dvezhpk57/image/upload/v1609496473/rxw9ucvivyjhenhfdta5.jpg\" srcset=\"https://res.cloudinary.com/dvezhpk57/image/upload/w_160%2Cc_scale/v1609496473/rxw9ucvivyjhenhfdta5.jpg 160w, https://res.cloudinary.com/dvezhpk57/image/upload/w_500%2Cc_scale/v1609496473/rxw9ucvivyjhenhfdta5.jpg 500w, https://res.cloudinary.com/dvezhpk57/image/upload/w_1000%2Cc_scale/v1609496473/rxw9ucvivyjhenhfdta5.jpg 1000w, https://res.cloudinary.com/dvezhpk57/image/upload/v1609496473/rxw9ucvivyjhenhfdta5.jpg 1052w\" sizes=\"100vw\" width=\"1052\"></figure>",
        "urlSeo": "sanpham-1",
        "photos": null
    },
    "item2": [
        {
            "id": 1006,
            "productName": "sanphamtest",
            "categoryId": 2,
            "categoryName": "Loaiso2",
            "price": 2232,
            "totalCount": 0,
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609505380/j0dk7vlpstgz7ooezl9l.jpg",
            "company": "tanthanh",
            "weight": 1.2,
            "productDetails": null,
            "description": "<p>&nbsp;</p><figure class=\"image\"><img src=\"https://res.cloudinary.com/dvezhpk57/image/upload/v1609496473/rxw9ucvivyjhenhfdta5.jpg\" srcset=\"https://res.cloudinary.com/dvezhpk57/image/upload/w_160%2Cc_scale/v1609496473/rxw9ucvivyjhenhfdta5.jpg 160w, https://res.cloudinary.com/dvezhpk57/image/upload/w_500%2Cc_scale/v1609496473/rxw9ucvivyjhenhfdta5.jpg 500w, https://res.cloudinary.com/dvezhpk57/image/upload/w_1000%2Cc_scale/v1609496473/rxw9ucvivyjhenhfdta5.jpg 1000w, https://res.cloudinary.com/dvezhpk57/image/upload/v1609496473/rxw9ucvivyjhenhfdta5.jpg 1052w\" sizes=\"100vw\" width=\"1052\"></figure>",
            "urlSeo": "sanpham-1",
            "photos": null
        },
        {
            "id": 2018,
            "productName": "sonle23123123",
            "categoryId": 2,
            "categoryName": "Loaiso2",
            "price": 123123,
            "totalCount": 0,
            "photoUrl": "http://res.cloudinary.com/dvezhpk57/image/upload/v1609184187/iambtc3nl9p8izydk28a.jpg",
            "company": "hagiangcorp",
            "weight": 1.0,
            "productDetails": null,
            "description": null,
            "urlSeo": "sanpham-3",
            "photos": null
        }
	]
}
	//  urlSeo không trùng nhau
	// item 1: Chi tiết sản phẩm
	// item 2: List 10 sản phẩm có liên quan


		
		
		
		
