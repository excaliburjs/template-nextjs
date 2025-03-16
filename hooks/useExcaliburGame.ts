import {Engine, Scene, Color, FadeInOut} from 'excalibur';

import { Dispatch, RefObject, SetStateAction, useEffect, useLayoutEffect} from 'react';

import game from '@/excalibur/main';
import { loader } from "@/excalibur/resources"

interface IRefExcaliburGame
{
    game: Engine | null;
    currentScene: Scene | null;
}

interface IPropsExcaliburGame{
    ref: RefObject<IRefExcaliburGame | null>,
    setSomeState:Dispatch<SetStateAction<boolean>>
}

const ExcaliburGame = ({ref, setSomeState}: IPropsExcaliburGame) =>
{
    useLayoutEffect(() =>
    {
        if (ref.current === null)
        {
            game.start('start', { // name of the start scene 'start'
              loader, // Optional loader (but needed for loading images/sounds)
              inTransition: new FadeInOut({ // Optional in transition
                duration: 1000,
                direction: 'in',
                color: Color.ExcaliburBlue
              })
            }).then(() => {
                ref.current = {game, currentScene: game.currentScene}
            });
            
        }

        return () =>
        {
            if (ref.current?.game)
            {
                game.dispose()
                ref.current.game = null
            }
            ref.current = null
        }
    }, []);

    useEffect(() =>
    {
        // EventEmitter
    }, []);

    return
}

export {ExcaliburGame as default, type IPropsExcaliburGame, type IRefExcaliburGame}