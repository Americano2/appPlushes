import {
    StartMenu,
    Game,
    Start,
    Outcome,
    MainRound,
    OutcomeRound,
    RandomRound,
    Round,
    Continue
} from "./components"

import { Navigate } from "react-router"

export const parkourChildren = [
    {
        path: "/parkour",
        element: <StartMenu />
    },
    {
        path: "game",
        element: <Game />,
        children: [
            {
                path: "/parkour/game",
                element: <Navigate to="/parkour/game/start" />
            },
            {
                path: "start",
                element: <Start />
            },
            {
                path: "continue",
                element: <Continue />
            },
            {
                path: "round",
                element: <Round />,
                children: [
                    {
                        path: "/parkour/game/round",
                        element: <Navigate to="/parkour/game/start" />
                    },
                    {
                        path: "random",
                        element: <RandomRound />
                    },
                    {
                        path: "main",
                        element: <MainRound />
                    },
                    {
                        path: "outcome",
                        element: <OutcomeRound />
                    }
                ]
            },
            {
                path: "outcome",
                element: <Outcome />
            }
        ]
    }
]