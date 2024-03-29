import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      required: [true, 'A User requires an email'],
      type: String,
      unique: [true, 'A User email must be unique'],
    },
    first_name: {
      required: [true, 'A User requires a first_name'],
      type: String,
    },
    last_name: {
      required: [true, 'A User requires a last_name'],
      type: String,
    },
    password: {
      required: [true, 'A User requires a password'],
      type: String,
    },
    about: {
      required: false,
      type: String,
    },
    work: {
      required: false,
      type: String,
    },
    skills: {
      type: [],
      defaultTo: [],
    },
    avatar: {
      required: false,
      type: String,
    },
    primary_color: {
      default: '#000',
      type: String,
    },
    secondary_color: {
      default: '#fff',
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', UserSchema);
