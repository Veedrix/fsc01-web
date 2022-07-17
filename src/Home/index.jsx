import { HeartIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const MAX_TWEET_CHAR = 280; //

function TweetForm(){
  const [text, setText] = useState('');

  function changeText(e){
    setText(e.target.value);
  }

  return(
    <div className='border-b border-silver p-4 space-y-5'>

      <div className="flex space-x-5">

        <img src="/src/tweet_img.svg" className="w-7" />
        <h1 className="font-bold text-xl">Página Inicial</h1>

      </div>

      <form className="pl-12 text-lg flex flex-col">

        <textarea
        name='tweet' 
        value= {text}
        placeholder='O que está acontecendo?'
        className="bg-transparent outline-none disabled:opacity-50"
        onChange={changeText}
        />

        <div className='flex justify-end items-center space-x-3'>

          <span className='text-sm'>
            <span>{text.length}</span>/
            <span className='text-birdBlue'>
            { MAX_TWEET_CHAR }
            </span>
          </span>

        <button 
          className="bg-birdBlue p-5 py-2 rounded-full disabled:opacity-50"
          disabled={text.length> MAX_TWEET_CHAR}
        >
          Tweet
        </button>

        </div>
      </form>
    </div>
  )
}

function Tweet({name, username, avatar, children}) {
  return(
    <div className='flex space-x-3 p-4 border-b border-silver'>
      <div>
        <img src={avatar}/>
      </div>
      <div className='space-y-1'>

        <span className='font-bold text-sm'>{name}</span>{' '}
        <span className='font-italic text-sm text-silver'>@{username}</span>

        <p>{children}</p>

        <div className='flex space-x-1 text-silver text-sm items-center'>
        <HeartIcon className="w-6 stroke-1" />
        <span>1.2K</span>
        </div>

      </div>
    </div>
  )
}

export const Home = () => {
  return (
    <>
      <TweetForm />
      <div>
        <Tweet name="Elon Musk" username="elonmusk" avatar="/src/tweet_img.svg">
          Let's make Twitter maximun fun! hehe
        </Tweet>
        <Tweet name="Vitor Siqueira" username="vitor_siqueira" avatar="/src/tweet_img.svg">
          Let's make Twitter maximun awesome! hehe
        </Tweet>
      </div>
    </>
  )
}
