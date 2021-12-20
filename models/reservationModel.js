/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guests: {
    type: Number,
    required: [true, 'Please enter number of guests!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Reservation must belong to a User!']
  },
  Kids:{ 
    type: String,
    default: ''
  },
  menu: {
    type: String,
    require: [true, 'Please enter your choices.']
  },
   bookedAt: {
    type: String,
    required:[true,'please select a date']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

reservationSchema.pre(/^find/, function(next) {
  this.populate({
    path : 'user',
    select : 'name mobile'
  });
  next();
});
reservationSchema.pre('save', async function(next) {
  this.populate({
    path : 'user',
    select : 'name mobile'
  });
  next();
});
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
