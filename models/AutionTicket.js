import mongoose from 'mongoose';

const AutionTicketSchema = mongoose.Schema({
    ticketID: {
        type: String,
        default: ''
    },
    session: {
        type: Object
    }
});

export default mongoose.model('AutionTicket', AutionTicketSchema);