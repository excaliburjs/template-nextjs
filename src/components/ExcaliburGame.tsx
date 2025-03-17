import { DisplayMode } from "excalibur"
import { MyLevel } from "@/excalibur/level"

import useExcaliburGame, { IExcaliburRef } from "@/hooks/useExcaliburGame";

type IExcaliburGameComponentProps = {ref: IExcaliburRef}


const ExcaliburGame = ({ref}: IExcaliburGameComponentProps)=> {
    const excaliburConfig = {
        width: 800, // Logical width and height in game pixels
        height: 600,
        suppressHiDPIScaling: true,
        displayMode: DisplayMode.FitScreenAndFill, // Display mode tells excalibur how to fill the window
        pixelArt: true, // pixelArt will turn on the correct settings to render pixel art without jaggies or shimmering artifacts
        scenes: {
          start: MyLevel
        },
        // physics: {
        //   solver: SolverStrategy.Realistic,
        //   substep: 5 // Sub step the physics simulation for more robust simulations
        // },
        // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
      }
    
    useExcaliburGame(ref, excaliburConfig)

    return <></>
}

export {ExcaliburGame as default, type IExcaliburGameComponentProps}