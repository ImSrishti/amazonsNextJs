import nc from 'next-connect';
import Product from '../../models/product';
import db from '../../utils/db';
import data from '../../utils/data';
const handler = nc();
import User from '../../models/User';

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
