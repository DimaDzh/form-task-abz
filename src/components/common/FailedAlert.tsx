export default function FailedAlert() {
  return (
    <main className="grid min-h-full place-items-center bg-error/10 my-12 px-6 py-12 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Data not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the users you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-full  bg-error hover:bg-gray px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
