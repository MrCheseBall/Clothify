const Category=require("../models/category.model.js")
const Product=require("../models/product.model.js")
async function createProduct(reqData){
    let topLevel=await Category.findOne({name:reqData.topLevelCatagory})
    console.log("toplevel",topLevel)
    if(!topLevel){
        topLevel=new Category({
            name:reqData.topLevelCatagory,
            level:1
        })
        await topLevel.save()
    }
    let secondLevel=await Category.findOne({
        name:reqData.secondLevelCatagory,
        parentCategory:topLevel._id
    })
    console.log("secondLevel",secondLevel)

    if(!secondLevel){
        secondLevel=new Category({
            name:reqData.secondLevelCatagory,
            parentCategory:topLevel._id,
            level:2
        })
        await secondLevel.save()
        
    }
    let thirdLevel=await Category.findOne({
        name:reqData.thirdLevelCatagory,
        parentCategory: secondLevel._id,
        
    })
    console.log("thirdLevel",thirdLevel.id)

    if(!thirdLevel){
        thirdLevel=new Category({
            name:reqData.thirdLevelCatagory,
            parentCategory:secondLevel._id,
            level:3,
        })
        await thirdLevel.save()
        // console.log('1')      
    }
    const product=new Product({
        title:reqData.title,  
        color:reqData.color,
        description:reqData.description,
        discountedPrice:reqData.discountedPrice,
        discountPercentage:reqData.discountPercentage,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        price:reqData.price,
        sizes:reqData.sizes,
        quantity:reqData.quantity,
        category:thirdLevel._id
    })
    return await product.save();
}

async function deleteProduct(productId){
    const product=await findProductById(productId);

    await product.findByIdAndDelete(productId);
    return "product Deleted Successfully"
}

async function updateProduct(productId,reqData){
    return await Product.findByIdAndDelete(productId,reqData);
}

async function findProductById(id){
    const product=await Product.findById(id).populate("category").exec();
    if(!product){
        throw new Error("Product not found with id "+id);
    }
    // console.log(product)
    return product;
}
async function getAllProducts(reqQuery){
    let {category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize}=reqQuery;
    
    pageSize=pageSize|| 10;

    let query=Product.find().populate("category");
    if(category){
        const existCategory=await Category.findOne({name:category})
        if(existCategory){
            query=query.where("category").equals(existCategory._id)
        }
        else{
            return {content:[],currentPage:1,totalPage:0}
        }
    }

    if(color){
        const colorSet=newSet(color.split(",").map(color=>color.trim().toLowerCase()));
        const colorRegex=colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null;

        query=query.where("color").regex(colorRegex);
    }
    if(sizes){
        const sizesSet=new Set(sizes)
        query.query.where("sizes.name").in([...sizesSet])
    }
    if(minPrice&&maxPrice){
        query= query.where('discountedPrice').gte(minPrice).lte(minPrice);
    }
    if(minDiscount){
        query=query.where('discountPercent').gt(minDiscount)
    }
    if(stock){
        if(stock=="in_stock"){
            query=query.where("quantity").gt(0);
        }
        if(stock=="out_of_stock"){
            query=query.where("quantity").gt(1);
        }
    }
    if(sort){
        const sortDirection=sort=="price_high"?-1:1;
        query.query.sort({discountedPrice:sortDirection})
    }
    const totalProducts=await Product.countDocuments(query);
    const skip=(pageNumber-1)*pageSize;

    query=query.skip(skip).limit(pageSize);
    const products=await query.exec();
    const totalPages=Math.ceil(totalProducts/pageSize);

    return {content:products,currentPage:pageNumber,totalPages}
}

async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
        console.log("h1")
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMultipleProduct,
}