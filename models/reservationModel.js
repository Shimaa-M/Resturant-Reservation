/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guests: {
    type: Number,
    required: [true, 'Please enter number of guests!'],
    min: 1,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Reservation must belong to a User!']
  },
  bookedAt: {
    type: String,
    required:true
},
  menu: {
    type: String,
    required: [true, 'Please enter your choices.']
  },
  kids: String,
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
