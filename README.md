# Enigma Password Manager

A secure, offline password manager for mobile devices built with React Native.

## Overview

Enigma is a privacy-focused password manager that works completely offline. It securely stores your passwords, notes, payment information, and personal details using strong encryption, all protected by a single master password.

## Features

- **Completely Offline**: Your data never leaves your device
- **Strong Encryption**: AES-256 encryption protects all sensitive data
- **Master Password Protection**: Single password to access all your secure data
- **Biometric Authentication**: Optional fingerprint/face ID support
- **Password Generator**: Create strong, unique passwords
- **Multiple Entry Types**:
  - Website & app credentials
  - Secure notes
  - Payment cards
  - Personal identities
  - Addresses

## Security Features

- **Zero-knowledge Architecture**: Only you can access your data
- **Auto-lock**: Automatically locks after inactivity
- **Clipboard Protection**: Automatically clears clipboard after copying sensitive data
- **Secure Backups**: Export encrypted backups
- **Password Health**: Check for weak or duplicate passwords
- **No Analytics or Tracking**: Privacy first approach

## Technical Stack

- **React Native**: Cross-platform mobile framework
- **SQLite with SQLCipher**: Secure, encrypted local database
- **Argon2id/PBKDF2**: Strong key derivation for the master password
- **React Navigation**: App navigation
- **Native Biometric APIs**: Fingerprint/Face ID integration

## Database Structure

Enigma uses an SQLite database with the following key tables:

- `users`: Master password and settings
- `vaults`: Container for groups of items
- `items`: Central table for all stored entries
- Specialized tables for different data types:
  - `login_items`: Website/app credentials
  - `secure_notes`: Encrypted notes
  - `payment_cards`: Payment information
  - `identities` and `addresses`: Personal information
  - `password_history`: Archive of previous passwords

## Installation & Setup

1. Clone the repository

   ```
   git clone https://github.com/yourusername/enigma-password-manager.git
   cd enigma-password-manager
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Run the app in development mode

   ```
   # For iOS
   npm run ios

   # For Android
   npm run android
   ```

## Project Structure

```
enigma/
├── src/
│   ├── components/         # Reusable UI components
│   ├── screens/            # App screens
│   ├── navigation/         # React Navigation setup
│   ├── database/           # Database operations
│   ├── crypto/             # Encryption utilities
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Helper functions
├── assets/                 # Images and static files
└── docs/                   # Project documentation
```

## Development Setup

### Prerequisites

- Node.js 14 or higher
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development)

### Environment Setup

Follow the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide to configure your development environment.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security Best Practices

For contributors and users:

- Never store the master password, only its hash
- Use secure random generators for cryptographic operations
- Clear sensitive data from memory when not in use
- Always encrypt data before storing it
- Implement proper key derivation functions
- Follow the principle of least privilege

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This password manager is designed for personal use. While we strive for the highest security standards, no software is 100% secure. Use at your own risk and always maintain separate backups of critical passwords.

---

Enigma Password Manager - Your passwords, your device, your control.
