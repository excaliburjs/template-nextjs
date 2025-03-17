import {Engine, Scene, Color, FadeInOut, EngineOptions} from 'excalibur';
import { Dispatch, RefObject, SetStateAction, useEffect, useLayoutEffect, useRef, useState} from 'react';

import { loader } from "@/excalibur/resources"

interface IRefExcaliburGame
{
    game: Engine | null;
    currentScene: Scene | null;
}

type IExcaliburRef = RefObject<IRefExcaliburGame | null>

// type UseExcaliburReturn = [
//     setSomeState:Dispatch<SetStateAction<boolean>>
// ]


const useExcaliburGame = (
    excaliburRef: IExcaliburRef, 
    excaliburRefConfig: EngineOptions
  )/*: UseExcaliburReturn */ => {

    const [someState, setSomeState] = useState(false)
    
    useLayoutEffect(() => {
        if (excaliburRef.current === null){
            excaliburRef.current = {game: null, currentScene: null}
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
    }, []);
    
    useEffect(() => {
            // EventEmitter
    }, []);
  
    return [setSomeState];
  };

export {useExcaliburGame as default, type IExcaliburRef}