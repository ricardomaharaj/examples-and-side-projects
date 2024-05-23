import 'next-auth'

// https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    }
  }
}
