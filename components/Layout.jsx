export const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-zinc-900 sm:p-6 lg:p-12'>
      <main className='mx-auto max-w-7xl'>{children}</main>
    </div>
  );
};
