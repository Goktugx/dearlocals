import '../styles/globals.css';

export const metadata = {
  title: 'Dear Locals',
  description: 'Yerel işletmeleri destekleyen topluluk projesi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
