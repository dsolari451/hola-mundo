import { useState } from "react";



export function TwitterFollowCard({ userName, name }) {

    const [isFollowing,setIsFollowing] = useState(false);

    const handleClick = () => setIsFollowing(!isFollowing);


    const titleUserName = `elmidu${userName}`;
    console.log(isFollowing);

    return (
        <>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_normal.jpg" alt={titleUserName} />
                    <div>
                        <strong> @{userName}</strong>
                        <span>
                            {name}
                        </span>
                    </div>
                </header>
                <aside>
                    <button onClick={handleClick}>
                        {
                            isFollowing ? <span>Follow</span> : <span>UnFollow</span>
                        }

                    </button>
                </aside>
            </article>
        </>
    )
}