export type User = {
  name: string;
  email: string;
  password: string;
};

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import users from './users.data';

@Injectable()
export class UsersService {
  async create(user: User): Promise<void> {
    // Hash the user's password before saving it to the database
    user.password = await bcrypt.hash(user.password, 10);
  }

  async findOne(email: string): Promise<User | undefined> {
    // Find the user with the given email in the database
    const u = users.find((item) => {
      return item.email === email;
    });

    if (u) {
      return {
        email: u.email,
        password: u.password_hash,
        name: u.name,
      };
    }

    return undefined;
  }

  async comparePassword(user: User, password: string): Promise<boolean> {
    // Compare the hashed password stored in the database with the provided password
    return await bcrypt.compare(password, user.password);
  }
}
