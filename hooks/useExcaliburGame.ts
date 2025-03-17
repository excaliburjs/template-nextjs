import {Engine, Scene, Color, FadeInOut, EngineOptions} from 'excalibur';
import { Dispatch, RefObject, SetStateAction, useEffect, useLayoutEffect, useRef, useState} from 'react';

import { loader } from "@/excalibur/resources"

interface IRefExcaliburGame
{
    game: Engine | null;
    currentScene: Scene | null;
}

type UseExcaliburReturn = [
    setSomeState:Dispatch<SetStateAction<boolean>>
]

type excaliburRef = RefObject<IRefExcaliburGame | null>

const useExcaliburGame = (
    excaliburRef: excaliburRef, 
    excaliburRefConfig: EngineOptions
  ): UseExcaliburReturn => {

    const [someState, setSomeState] = useState(false)
    
    useLayoutEffect(() => {
        console.log("useLayoutEffect")

        setTimeout(()=>{

            if (excaliburRef.current === null){
                excaliburRef.current = {game: null, currentScene: null}
                console.log("excaliburRef.current === null")
                console.log(window.location.href)

                const game = new Engine(excaliburRefConfig)
                
                game.start('start', { // name of the start scene 'start'
                    loader, // Optional loader (but needed for loading images/sounds)
                    inTransition: new FadeInOut({ // Optional in transition
                    duration: 1000,
                    direction: 'in',
                    color: Color.ExcaliburBlue
                    })
                }).then(() => {
                    excaliburRef.current = {game, currentScene: game.currentScene}
                }); 
            }
        
            return () => {
                    if (excaliburRef.current?.game)
                    {   
                        excaliburRef.current.game.dispose()
                    }
                    excaliburRef.current = null
            }
        })
    }, []);
    
    useEffect(() => {
            // EventEmitter
    }, []);
  
    return [setSomeState];
  };

export {useExcaliburGame as default, type excaliburRef, type UseExcaliburReturn}