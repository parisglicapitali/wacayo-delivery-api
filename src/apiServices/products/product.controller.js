import Product from './product.model';

export default {
    createNewProduct: async (req, res) => {
        try {
            const { price, category, name, description, shippingTime, shippingPrice } = req.body;

            const newProduct = new Product({
            price,
            category,
            name,
            description,
            shippingTime,
            shippingPrice,
            productPhoto: req.file.path
            });

            await newProduct.save();

            res.status(201).json({message: "This product has been created successfully"});
        } catch (error) {
            console.error(error);
        };
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();

            if(products.length === 0) return res.status(204).json({message: "Dont have products"});

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
        }
    },

    getProductById: async (req, res) => {
        try {
            const { id } = req.params;

            const product = await Product.findById(id);;

            if(!product) return res.status(204).json({message: "This product dont exist or has been eliminated"}); // checking if product exist

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
        }
    },

    getProductByCategory: async (req, res) => {
        try {
            const { category } = req.params;

            const products = await Product.find({category});

            if(products.length === 0) return res.status(204).json({message: "Dont have products in this category"});

            res.status(200).json(products);
        } catch (error) {
            console.log(error);
        };
    },

    editProductById: async (req, res) => {
        try {
            const { id } = req.params;

            const product = await Product.findByIdAndUpdate(id, req.body);

            res.status(200).json({product});
        } catch (error) {
            console.error(error);
        }
    },

    deleteProductById: async (req, res) => {
        try {
            const { id } = req.params;

            await Product.findByIdAndDelete(id);

            res.status(201).json({message: "This product has been deleted successfully"});
        } catch (error) {
            console.error(error);
        }
    }
}