const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	firstName: { 
		type: String, 
		required: [true, "Please enter your first name"]
	},
	lastName: { 
		type: String, 
		required: [true, "Please enter your last name"]
	},
	email: {
		type: String, 
		required: [true, "Please enter an email"], 
		unique: true,
		validate: [isEmail, "Please enter a valid email address"]
	},
	password: {
		type: String,
		required: [true, "Please enter a password"],
		minlength: [8, "Password is too short, it needs to be at least 8 characters"]
	},
	phoneNumber: {
		type: String,
		default: ""
	},
	address: {
		type: Object,
		default: {
			country: "",
			street1: "",
			street2: "",
			city: "",
			state: "",
			zipCode: ""
		}
	},
	createdAt: {
		type: Date,
		default: new Date().toISOString().split('T')[0]
	},
});

userSchema.pre('save', async function (next){
	const salt = await bcrypt.genSalt()
	this.password = await bcrypt.hash(this.password, salt)
	next()
})

const User = mongoose.model('User', userSchema);

module.exports = User