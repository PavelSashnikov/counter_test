import { hashSync } from 'bcryptjs';
import { randomUUID } from 'crypto';

export const adminSeed = {
  id: randomUUID(),
  login: 'admin',
  password: hashSync('admin', 10),
};
