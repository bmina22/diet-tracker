export const metadata = {
  title: "식단 기록 트래커",
  description: "AI 다이어트 트래커",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
