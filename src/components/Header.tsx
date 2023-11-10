const Header = () => {
  return (
    <div className="mt-16 mb-10 text-neutral-50	text-center">
      <h1 className="text-6xl font-bold flex flex-col md:flex-row items-center tracking-wider">
        <span className='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               className="md:mr-2 w-24 h-24">
          <path fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"/>
          <path
            d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
        </svg>
        </span>
        Astronomy Picture of the Day
      </h1>
      <p className="py-6 text-lg font-medium">
        Chaque jour la NASA publie une photo d'astronomie pour en savoir plus sur notre univers.
        <br/>
        Vous retrouverez sur ce site les photos partagées par la NASA.
      </p>
    </div>
  );
}

export default Header;