export default function Loading() {
  // This is a simple fallback that appears instantly
  // while the page is being prepared by the server.
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-la-red"></div>
    </div>
  );
}
