const mongoose = require('mongoose')
const Product = mongoose.model('Product')


exports.get = async () => {

    const res =  Product.find({
        active: true}, 'title price slug');

    return res;  
}


exports.getBySlug = async (slug) => {

    const res = await Product.findOne(
    {
      slug: slug, 
      active: true

    }, 'title description price slug tags');
    
    return res;
}

exports.getById = async (id) => {

   const res = await Product.findById(id);

   return res;
}


exports.getByTag = async (tag) => {
    
    const res = await Product.findOne(
        {tags: tag, 
         active: true }, 'title description price slug tags');

    return res;     
}


exports.create = async (data) => {

        //var product = new Product(req.body);
        const product = new Product();

        product.title = data.title;
        product.slug = data.slug;
        product.description = data.description;
        product.price = data.price;
        product.active= data.active;
        product.tags= data.tags;
    
        await product.save()

}

exports.update = async (id,data) => {

    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description : data.description,
            price: data.price,
            slug: data.slug
        }
    })
}


exports.delete = async (id) => {
    
    await Product.findByIdAndRemove(id)
}