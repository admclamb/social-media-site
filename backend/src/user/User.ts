import * as bcrypt from 'bcryptjs';

export class User {
  private username: string;
  private password: string;
  private email: string;
  private user_id: number | null;

  constructor(
    username: string,
    password: string,
    email: string,
    user_id = null
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.user_id = user_id;
  }

  public getUsername(): string {
    return this.username;
  }
  public setUsername(newUsername: string): void {
    this.username = newUsername;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(newPassword: string): void {
    this.password = newPassword;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }
  public getUserId(): number | null {
    return this.user_id;
  }
}
