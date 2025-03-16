import { Dispatch, RefObject, SetStateAction, useEffect, useLayoutEffect} from 'react';
import * as ex from 'excalibur';


interface IRefExcaliburGame
{
    game: ex.Engine | null;
    currentScene: ex.Scene | null;
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
            
        }

        return () =>
        {
            if (ref.current?.game)
            {
                // Engine cleanup
                if (ref.current.game !== null)
                {
                    ref.current.game = null
                    ref.current = null
                }
            }
        }
    }, []);

    useEffect(() =>
    {
        // EventEmitter
    }, []);

    return <div id="game-container"></div>
}

export {ExcaliburGame as default, type IPropsExcaliburGame, type IRefExcaliburGame}