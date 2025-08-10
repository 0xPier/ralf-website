
import React, { useState, useCallback } from 'react';
import { TwitterIcon, TelegramIcon, PumpFunIcon, NftIcon, CopyIcon, CheckIcon, SocialLink, SoundOnIcon, SoundOffIcon } from './components/ui';

const App: React.FC = () => {
  const CONTRACT_ADDRESS = 'Address will be revealed at launch... stay tuned!';
  const [isCopied, setIsCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }, []);

  const videoId = 'ukpfsAKpMvc';

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 font-['Gochi_Hand'] text-[#202124] antialiased">
      <main className="w-full max-w-md mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-7xl sm:text-8xl md:text-9xl text-purple-800 font-black drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
          $RALF
        </h1>

        <div className="relative my-6 sm:my-8 w-full aspect-video border-4 border-black rounded-md shadow-[8px_8px_0px_0px_#202124] overflow-hidden">
          <iframe
            key={isMuted.toString()} // Force re-render on mute change
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Ralf the lizard playing a tambourine"
            className="w-full h-full"
          ></iframe>
          <button
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-2 right-2 p-2 bg-[#FBBC05] hover:bg-yellow-400 border-2 border-black rounded-full transition-transform hover:scale-110 shadow-[2px_2px_0px_0px_#202124] text-black"
          >
            {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
          </button>
        </div>

        <div className="w-full mb-8">
            <label className="text-xl text-left block mb-2">Contract Address</label>
            <div className="relative w-full">
                <div className="bg-white text-left text-sm sm:text-base p-4 pr-14 w-full border-4 border-black rounded-lg break-words">
                    {CONTRACT_ADDRESS}
                </div>
                <button 
                    onClick={handleCopy}
                    aria-label="Copy contract address"
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-all duration-200 text-white
                        ${isCopied 
                            ? 'bg-[#FBBC05] text-black hover:bg-yellow-400' 
                            : 'bg-purple-800 hover:bg-purple-900'} 
                        border-2 border-black`}
                >
                    {isCopied ? <CheckIcon /> : <CopyIcon />}
                </button>
            </div>
        </div>
        
        <div className="w-full mb-8 text-left bg-white p-6 border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_#202124]">
            <h2 className="text-3xl mb-3 text-purple-800">Who is Ralf?</h2>
            <p className="text-lg leading-relaxed">
                From the cosmic depths, a conqueror was sent with a mission of planetary domination: Ralf. But then he discovered funk. Earth's vibrant irresistible groove captured his soul, transforming him from a would-be tyrant into the Real Ass Lizard Funklord. Now, armed with his blessed tambourine, Ralf has a new mission: to channel the power of funk and pump the bags of every true believer. His music isn't just a sound; it's a financial blessing.
            </p>
        </div>

        <div className="flex items-center justify-center space-x-4 sm:space-x-6">
          <SocialLink href="https://x.com/Ralf_onSOL" ariaLabel="Follow on X/Twitter">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="https://telegram.org/" ariaLabel="Join Telegram group">
            <TelegramIcon />
          </SocialLink>
          <SocialLink href="https://pump.fun/" ariaLabel="Find on Pump.fun">
            <PumpFunIcon />
          </SocialLink>
          <SocialLink href="https://launchmynft.io/" ariaLabel="Launch an NFT with us">
            <NftIcon />
          </SocialLink>
        </div>

      </main>
    </div>
  );
};

export default App;
