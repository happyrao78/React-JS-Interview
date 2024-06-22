import React from 'react'

function Card({username,occupation="Frontend Developer",srcc="https://avatars.githubusercontent.com/u/138770813?v=4"}) {
    
  return (
    <figure class="bg-slate-500 rounded-xl p-8 dark:bg-slate-800 m-5 w-45 flex " >
    <img class="w-24 h-24 rounded-full mx-auto" src={srcc} alt="" width="384" height="512" />
    <div class="pt-4 space-y-1">
      <blockquote>
        <p class="text-md font-medium text-white">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className='text-black font-bold' >
        <div>
          {username}
        </div>
        <div>
          {occupation}
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Card