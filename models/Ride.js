const RideSchema = new mongoose.Schema({
    userId: String,
    driverId: String,
    fare: Number,
    status: String, // 'pending', 'accepted', 'in-progress', 'completed'
    route: [{ lat: Number, lng: Number }],
});

module.exports = mongoose.model("Ride", RideSchema);
