import React from 'react'
import NormProgress from './progressBar/NormProgress'
import Change from './progressBar/change'
import Username from './username'
import study from '../../assets/icons/study.png'
import taxi from '../../assets/icons/taxi.png'
import games from '../../assets/icons/games.png'
import Average from './progressBar/Average'
import data from '../../database/data'
import { AppContainer, GreyContainer } from './style'


export default function ProfileApp() {
    return (
        <>
            {
                data.map((user)=>{
                    let url= `https://picsum.photos/id/${user.id*4}/150/150`
                    return(
                        <AppContainer key={user.id}>
                        <Username userImage={url} name={user.username} />
                        <GreyContainer>
                            <div>
                            <NormProgress course='java' percent={user.java} icon={games}/>
                            <Change field = {user.java}></Change>
                            <NormProgress course="Python" percent={user.python} icon={study}  />
                            <Change field ={user.python}></Change>
                            <NormProgress course="Javascript" percent={user.javascript} icon={taxi}  />
                            <Change field ={(user.javascript)}></Change>
                            </div>
                            <Average percent={(user.java+user.python+user.javascript)/3} />
                        </GreyContainer>
                        
                        </AppContainer>
                    )
                })
            }
            
        </>
        
    )
}
