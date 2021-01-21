import Order from './order.model';

export default {
    createNewOrder: async (req, res) => {
        try {
            const { clientName, clientPhoneNumber, clientNote, clientEmail, clientAddress, clientCountry } = req.body;
            const { productId } = req.params;

            const newOrder = new Order({
                clientName,
                clientPhoneNumber,
                clientEmail,
                clientAddress,
                clientCountry,
                clientNote,
                productId
            });

            await newOrder.save();

            res.status(201).json({message: "Your order has been created successfully"});
        } catch (error) {
            console.error(error);
        }
    },

    getOrderById: async (req, res) => {
        try {
            const { id } = req.params;

            const order = await Order.findById(id);

            res.status(200).json(order);
        } catch (error) {
            console.error(error);
        }
    },

    deleteOrderById: async (req, res) => {
        try {
            const { id } = req.params;

            await Order.findByIdAndDelete(id);

            res.status(200).json({message: 'This order has been deleted successfully'});
        } catch (error) {
            console.error(error);
        }
    }

}